const translations = {
    fr: {
        "nav-philosophy": "Philosophie",
        "nav-modules": "Modules",
        "nav-clinstore": "ClinStore",
        "nav-sdk": "SDK",
    },

    en: {
        "nav-philosophy": "Philosophy",
        "nav-modules": "Modules",
        "nav-clinstore": "ClinStore",
        "nav-sdk": "SDK",
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    localStorage.setItem('preferred-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.language-toggle .lang-btn');
});