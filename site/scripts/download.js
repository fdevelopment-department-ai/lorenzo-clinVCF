const getOperatingSystem = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'macos';
  if (userAgent.includes('linux')) return 'linux';
  return 'unknown';
};

const REPO_API_URL = 'https://api.github.com/repos/ClinVCF/clinVCF-os/releases/latest';

// Fonction pour filtrer les assets par OS
const filterAssetsByOS = (assets) => {
  const osLinks = {
    windows: null,
    macos: null,
    linux: null,
  };

  assets.forEach((asset) => {
    const fileName = asset.name.toLowerCase();
    if (fileName.includes('.exe') || fileName.includes('.msi')) {
      osLinks.windows = asset.browser_download_url;
    } else if (fileName.includes('.dmg') || fileName.includes('.pkg')) {
      osLinks.macos = asset.browser_download_url;
    } else if (fileName.includes('.deb') || fileName.includes('.rpm') || fileName.includes('.appimage')) {
      osLinks.linux = asset.browser_download_url;
    }
  });

  return osLinks;
};

const updateDownloadButtons = (osLinks) => {
  const windowsBtn = document.querySelector('#download-windows');
  const macosBtn = document.querySelector('#download-macos');
  const linuxBtn = document.querySelector('#download-linux');

  if (windowsBtn && osLinks.windows) windowsBtn.href = osLinks.windows;
  if (macosBtn && osLinks.macos) macosBtn.href = osLinks.macos;
  if (linuxBtn && osLinks.linux) linuxBtn.href = osLinks.linux;

  const detectedOS = getOperatingSystem();
  const activeClass = 'btn--highlight'; 

  [windowsBtn, macosBtn, linuxBtn].forEach((btn) => {
    if (btn) btn.classList.remove(activeClass);
  });

  if (detectedOS === 'windows' && windowsBtn) windowsBtn.classList.add(activeClass);
  if (detectedOS === 'macos' && macosBtn) macosBtn.classList.add(activeClass);
  if (detectedOS === 'linux' && linuxBtn) linuxBtn.classList.add(activeClass);
};

const loadGitHubReleases = async () => {
  try {
    const response = await fetch(REPO_API_URL);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    const osLinks = filterAssetsByOS(data.assets);
    updateDownloadButtons(osLinks);
  } catch (error) {
    console.error('Erreur lors de la récupération des releases GitHub :', error);
    const defaultReleaseUrl = 'https://github.com/ClinVCF/clinVCF-os/releases';
    const buttons = document.querySelectorAll('#download-windows, #download-macos, #download-linux');
    buttons.forEach((btn) => {
      if (btn) btn.href = defaultReleaseUrl;
    });
  }
};

document.addEventListener('DOMContentLoaded', loadGitHubReleases);