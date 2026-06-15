const translations = {
    fr: {
        "nav-philosophy": "Philosophie",
        "nav-modules": "Modules",
        "nav-clinstore": "ClinStore",
        "nav-sdk": "SDK",
        "nav-docs": "Documentation",
        "nav-tarifs": "Tarifs",
        "btn-download": "Télécharger",
        "hero-text": "Plateforme <span class=\"text-bleu\">modulaire</span><br> d'analyse de variants<br> génétiques",
        "hero-text-2": "Solution unifiée pour le chargement, la visualisation et la prédiction de variants génétiques.<br> Conçu pour les professionnels de la génomique et de la recherche clinique.",
        "btn-download-2": "Télécharger gratuitement",
        "sdk-btn": "&lt;/&gt; Explorer le SDK",
        "hero-content-1": "Installation en 2 minutes",
        "hero-content-2": "Multi-plateforme",
        "hero-content-3": "Aucune télémétrie",
        "mockup-title": "Interface intuitive et puissante",
        "mockup-subtitle": "Visualisez et analysez vos variants génétiques en quelques clics",
        "philosophy-title": "Notre philosophie",
        "philosophy-subtitle": "Trois principes fondamentaux qui guident le développement de ClinVCF-OS",
        "card1-title": "Plateforme ouverte",
        "card1-text": "ClinVCF-OS est conçu comme une plateforme open-source permettant à la communauté scientifique de contribuer et d'innover. Transparence totale du code et des algorithmes pour garantir la fiabilité des analyses.",
        "card2-title": "Ecosystème modulaire",
        "card2-text": "Architecture modulaire permettant d'activer uniquement les fonctionnalités nécessaires. Installez les modules de base gratuitement et ajoutez des modules premium selon vos besoins spécifiques d'analyse.",
        "card3-title": "Développement communautaire",
        "card3-text": "Une communauté active de chercheurs, cliniciens et développeurs qui contribuent constamment à l'amélioration de la plateforme. Partagez vos workflows et bénéficiez de l'expertise collective.",
        "modules-title": "Modules disponibles",
        "modules-subtitle": "Composez votre solution sur mesure avec nos modules spécialisés",
        "tarif-label": "Tarifs",
        "tarif-title": "Offres modulaires pour la recherche et la clinique",
        "tarif-subtitle": "Choisissez la formule adaptée à votre usage, avec des fonctionnalités claires, un support prioritaire et une tarification transparente.",
        "tarif-note": "Tous les prix sont hors taxes. Facturation mensuelle ou annuelle (-20%). <a class=\"conditions\" href=\"#\">Voir les conditions</a>",
        "download-title": "Téléchargez ClinVCF-OS",
        "download-subtitle": "Disponible pour Windows, macOS et Linux. Votre système d'exploitation sera détecté automatiquement.",
        "download-links-label": "Liens de téléchargement",
    },
    en: {
        "nav-philosophy": "Philosophy",
        "nav-modules": "Modules",
        "nav-clinstore": "ClinStore",
        "nav-sdk": "SDK",
        "nav-docs": "Documentation",
        "nav-tarifs": "Pricing",
        "btn-download": "Download",
        "hero-text": "<span class=\"text-bleu\">Modular</span><br> genetic variant<br> analysis platform",
        "hero-text-2": "Unified solution for loading, visualizing, and predicting genetic variants.<br> Designed for genomics professionals and clinical research.",
        "btn-download-2": "Download for free",
        "sdk-btn": "&lt;/&gt; Explore the SDK",
        "hero-content-1": "2-minute installation",
        "hero-content-2": "Cross-platform",
        "hero-content-3": "No telemetry",
        "mockup-title": "Intuitive and powerful interface",
        "mockup-subtitle": "Visualize and analyze your genetic variants in just a few clicks",
        "philosophy-title": "Our philosophy",
        "philosophy-subtitle": "Three core principles guiding the development of ClinVCF-OS",
        "card1-title": "Open platform",
        "card1-text": "ClinVCF-OS is designed as an open-source platform allowing the scientific community to contribute and innovate. Full transparency of code and algorithms to ensure analysis reliability.",
        "card2-title": "Modular ecosystem",
        "card2-text": "Modular architecture allowing you to activate only the features you need. Install the base modules for free and add premium modules based on your specific analysis needs.",
        "card3-title": "Community-driven development",
        "card3-text": "An active community of researchers, clinicians and developers constantly contributing to the improvement of the platform. Share your workflows and benefit from collective expertise.",
        "modules-title": "Available modules",
        "modules-subtitle": "Build your custom solution with our specialized modules",
        "tarif-label": "Pricing",
        "tarif-title": "Modular plans for research and clinical use",
        "tarif-subtitle": "Choose the plan that fits your needs, with clear features, priority support and transparent pricing.",
        "tarif-note": "All prices exclude taxes. Monthly or annual billing (-20%). <a class=\"conditions\" href=\"#\">See terms</a>",
        "download-title": "Download ClinVCF-OS",
        "download-subtitle": "Available for Windows, macOS and Linux. Your operating system will be detected automatically.",
        "download-links-label": "Download links",
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
    const buttons = document.querySelectorAll('.nav-actions .language-toggle .lang-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const chosenLang = e.target.textContent.trim().toLowerCase();
            setLanguage(chosenLang);
        });
    });

    const savedLang = localStorage.getItem('preferred-lang') || 'fr';
    setLanguage(savedLang);

    buttons.forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === savedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
});