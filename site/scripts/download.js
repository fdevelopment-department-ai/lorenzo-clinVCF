// Fonction pour détecter l'OS
const getOperatingSystem = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'macos';
  if (userAgent.includes('linux') || userAgent.includes('x11')) return 'linux';
  return 'unknown';
};

const REPO_API_URL = 'https://api.github.com/repos/ClinVCF/clinVCF-os/releases/latest';

const formatFileSize = (bytes) => {
  if (bytes === null || bytes === undefined) return 'N/A';
  if (bytes === 0) return '0 octets';
  const k = 1024;
  const sizes = ['octets', 'Ko', 'Mo', 'Go'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const filterAssetsByOS = (assets) => {
  const osLinks = {
    windows: { url: null, size: null, name: null },
    macos: { url: null, size: null, name: null },
    linux: { url: null, size: null, name: null }
  };

  assets.forEach((asset) => {
    const fileName = asset.name.toLowerCase();

    if (fileName.includes('.exe') || fileName.includes('.msi')) {
      osLinks.windows = { url: asset.browser_download_url, size: asset.size, name: asset.name };
    } else if (fileName.includes('.dmg') || fileName.includes('.pkg')) {
      osLinks.macos = { url: asset.browser_download_url, size: asset.size, name: asset.name };
    } else if (
      fileName.includes('.deb') || fileName.includes('.rpm') ||
      fileName.includes('.appimage') || fileName.includes('.tar.gz') ||
      fileName.includes('.tar.bz2') || fileName.includes('.zip')
    ) {
      osLinks.linux = { url: asset.browser_download_url, size: asset.size, name: asset.name };
    }
  });

  return osLinks;
};

const updateDownloadButtons = (osLinks, releaseData) => {
  const windowsLink = document.getElementById('windows-link');
  const macosLink = document.getElementById('macos-link');
  const linuxLink = document.getElementById('linux-link');

  const windowsSize = document.getElementById('windows-size');
  const macosSize = document.getElementById('macos-size');
  const linuxSize = document.getElementById('linux-size');

  const windowsName = document.getElementById('windows-name');
  const macosName = document.getElementById('macos-name');
  const linuxName = document.getElementById('linux-name');

  if (windowsLink && osLinks.windows) {
    windowsLink.href = osLinks.windows.url;
    if (windowsSize) windowsSize.textContent = formatFileSize(osLinks.windows.size);
    if (windowsName) windowsName.textContent = osLinks.windows.name;
  }

  if (macosLink && osLinks.macos) {
    macosLink.href = osLinks.macos.url;
    if (macosSize) macosSize.textContent = formatFileSize(osLinks.macos.size);
    if (macosName) macosName.textContent = osLinks.macos.name;
  }

  if (linuxLink && osLinks.linux) {
    linuxLink.href = osLinks.linux.url;
    if (linuxSize) linuxSize.textContent = formatFileSize(osLinks.linux.size);
    if (linuxName) linuxName.textContent = osLinks.linux.name;
  }

  const detectedOS = getOperatingSystem();
  const activeClass = 'btn--highlight';

  [windowsLink, macosLink, linuxLink].forEach((link) => {
    if (link) link.classList.remove(activeClass);
  });

  if (detectedOS === 'windows' && windowsLink) windowsLink.classList.add(activeClass);
  if (detectedOS === 'macos' && macosLink) macosLink.classList.add(activeClass);
  if (detectedOS === 'linux' && linuxLink) linuxLink.classList.add(activeClass);

  // Mise à jour de tous les éléments version/date via classes
  document.querySelectorAll('.release-version').forEach(el => el.textContent = releaseData.tag_name || 'N/A');
  document.querySelectorAll('.release-published').forEach(el => el.textContent = formatDate(releaseData.published_at));
};

const loadGitHubReleases = async () => {
  try {
    const response = await fetch(REPO_API_URL);
    if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
    const data = await response.json();
    const osLinks = filterAssetsByOS(data.assets);
    updateDownloadButtons(osLinks, data);
  } catch (error) {
    console.error('Erreur :', error);
    const defaultUrl = 'https://github.com/ClinVCF/clinVCF-os/releases';
    ['windows-link', 'macos-link', 'linux-link'].forEach((id) => {
      const link = document.getElementById(id);
      if (link) link.href = defaultUrl;
    });
    document.querySelectorAll('.release-version').forEach(el => el.textContent = 'N/A');
    document.querySelectorAll('.release-published').forEach(el => el.textContent = 'N/A');
  }
};

document.addEventListener('DOMContentLoaded', loadGitHubReleases);