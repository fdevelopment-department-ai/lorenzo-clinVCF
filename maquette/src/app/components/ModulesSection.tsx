import { ExternalLink } from 'lucide-react';

export function ModulesSection() {
  const freeModules = [
    {
      name: 'VCF Loader',
      features: [
        'Import de fichiers VCF/BCF standard',
        'Validation automatique du format',
        'Support des fichiers compressés (gzip)',
        'Détection automatique de l\'encodage',
      ],
    },
    {
      name: 'Data Viewer',
      features: [
        'Visualisation interactive des variants',
        'Filtrage avancé multi-critères',
        'Export des données filtrées',
        'Annotations ClinVar intégrées',
      ],
    },
    {
      name: 'Basic Annotations',
      features: [
        'Annotations génomiques de base',
        'Fréquences alléliques (gnomAD)',
        'Impact sur les protéines',
        'Conservation inter-espèces',
      ],
    },
  ];

  const premiumModules = [
    {
      name: 'PredSoma',
      features: [
        'Prédiction pathogénicité variants somatiques',
        'Algorithmes ML spécialisés cancer',
        'Intégration bases données tumorales',
        'Scoring personnalisé par type tumoral',
      ],
      tier: 'Pro+',
    },
    {
      name: 'PredConst',
      features: [
        'Prédiction variants constitutionnels',
        'Analyse héritabilité mendélienne',
        'Détection variants de novo',
        'Rapport clinique automatisé',
      ],
      tier: 'Pro+',
    },
    {
      name: 'Advanced Analytics',
      features: [
        'Analyse de cohortes',
        'Comparaisons multi-échantillons',
        'Statistiques population',
        'Visualisations avancées (Manhattan plots)',
      ],
      tier: 'Team',
    },
  ];

  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modules disponibles
          </h2>
          <p className="text-xl text-gray-600">
            Composez votre solution sur mesure avec nos modules spécialisés
          </p>
        </div>

        {/* Free System */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Gratuit
            </span>
            Système de base
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {freeModules.map((module) => (
              <div
                key={module.name}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {module.name}
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700"
                    aria-label="Documentation"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <ul className="space-y-2">
                  {module.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Community:</span> Usage
                    illimité
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Modules */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              Premium
            </span>
            Modules avancés
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {premiumModules.map((module) => (
              <div
                key={module.name}
                className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {module.name}
                  </h4>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700"
                    aria-label="Documentation"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <ul className="space-y-2 mb-4">
                  {module.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-purple-200">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">Requis:</span> Tier{' '}
                    {module.tier}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
