// Fonction pour détecter l'OS
const getOperatingSystem = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'macos';
  if (userAgent.includes('linux') || userAgent.includes('x11')) return 'linux';
  return 'unknown';
};

// URL de l'API GitHub
const REPO_API_URL = 'https://api.github.com/repos/ClinVCF/clinVCF-os/releases/latest';

// Fonction pour formater la taille en Mo/Go
const formatFileSize = (bytes) => {
  if (bytes === null || bytes === undefined) return 'N/A';
  if (bytes === 0) return '0 octets';
  const k = 1024;
  const sizes = ['octets', 'Ko', 'Mo', 'Go'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

// Fonction pour formater la date
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

// Fonction pour filtrer les assets et extraire les infos
const filterAssetsByOS = (assets) => {
  const osLinks = {
    windows: { url: null, size: null, name: null },
    macos: { url: null, size: null, name: null },
    linux: { url: null, size: null, name: null }
  };

  assets.forEach((asset) => {
    const fileName = asset.name.toLowerCase();

    // Windows : .exe, .msi
    if (fileName.includes('.exe') || fileName.includes('.msi')) {
      osLinks.windows = {
        url: asset.browser_download_url,
        size: asset.size,
        name: asset.name
      };
    }
    // macOS : .dmg, .pkg
    else if (fileName.includes('.dmg') || fileName.includes('.pkg')) {
      osLinks.macos = {
        url: asset.browser_download_url,
        size: asset.size,
        name: asset.name
      };
    }
    // Linux : .deb, .rpm, .appimage, .tar.gz, .tar.bz2, .zip
    else if (
      fileName.includes('.deb') ||
      fileName.includes('.rpm') ||
      fileName.includes('.appimage') ||
      fileName.includes('.tar.gz') ||
      fileName.includes('.tar.bz2') ||
      fileName.includes('.zip')
    ) {
      osLinks.linux = {
        url: asset.browser_download_url,
        size: asset.size,
        name: asset.name
      };
    }
  });

  return osLinks;
};

// Mise à jour du DOM
const updateDownloadButtons = (osLinks, releaseData) => {
  // Récupération des éléments
  const windowsLink = document.getElementById('windows-link');
  const macosLink = document.getElementById('macos-link');
  const linuxLink = document.getElementById('linux-link');

  const windowsSize = document.getElementById('windows-size');
  const macosSize = document.getElementById('macos-size');
  const linuxSize = document.getElementById('linux-size');

  const windowsName = document.getElementById('windows-name');
  const macosName = document.getElementById('macos-name');
  const linuxName = document.getElementById('linux-name');

  // Mettre à jour les liens, noms et tailles
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

  // Détecter l'OS et appliquer la surbrillance sur le lien correspondant
  const detectedOS = getOperatingSystem();
  const activeClass = 'btn--highlight';

  // Retirer la classe active de tous les liens
  [windowsLink, macosLink, linuxLink].forEach((link) => {
    if (link) link.classList.remove(activeClass);
  });

  // Ajouter la classe active au lien correspondant à l'OS détecté
  if (detectedOS === 'windows' && windowsLink) windowsLink.classList.add(activeClass);
  if (detectedOS === 'macos' && macosLink) macosLink.classList.add(activeClass);
  if (detectedOS === 'linux' && linuxLink) linuxLink.classList.add(activeClass);

  // Mettre à jour la version et la date
  const releaseVersion = document.getElementById('release-version');
  const releasePublished = document.getElementById('release-published');

  if (releaseVersion) releaseVersion.textContent = releaseData.tag_name || 'N/A';
  if (releasePublished) releasePublished.textContent = formatDate(releaseData.published_at);
};

// Charger les releases GitHub
const loadGitHubReleases = async () => {
  try {
    const response = await fetch(REPO_API_URL);
    if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
    const data = await response.json();
    const osLinks = filterAssetsByOS(data.assets);
    updateDownloadButtons(osLinks, data);
  } catch (error) {
    console.error('Erreur :', error);
    // En cas d'erreur, conserver les liens par défaut
    const defaultUrl = 'https://github.com/ClinVCF/clinVCF-os/releases';
    ['windows-link', 'macos-link', 'linux-link'].forEach((id) => {
      const link = document.getElementById(id);
      if (link) link.href = defaultUrl;
    });
    // Mettre à jour les placeholders en cas d'erreur
    const releaseVersion = document.getElementById('release-version');
    const releasePublished = document.getElementById('release-published');
    if (releaseVersion) releaseVersion.textContent = 'N/A';
    if (releasePublished) releasePublished.textContent = 'N/A';
  }
};

// Exécuter au chargement
document.addEventListener('DOMContentLoaded', loadGitHubReleases);