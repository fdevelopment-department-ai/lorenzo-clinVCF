import { Check, Download, Mail } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'Community',
      price: 'Gratuit',
      period: '',
      badge: null,
      description: 'Pour découvrir et tester la plateforme',
      cta: 'Télécharger',
      ctaIcon: Download,
      features: [
        'Modules de base (VCF Loader, Data Viewer)',
        'Annotations génomiques standards',
        'Usage limité à 100 variants/jour',
        'Support communautaire (forum)',
        'Mises à jour de sécurité',
        'Documentation complète',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '29€',
      period: '/mois',
      badge: 'Early Adopter -40%',
      description: 'Pour les chercheurs et cliniciens individuels',
      cta: "S'abonner",
      ctaIcon: null,
      features: [
        'Tous les modules de base',
        'PredSoma & PredConst inclus',
        'Usage illimité',
        'Support prioritaire par email',
        'Exports avancés (Excel, CSV, JSON)',
        'API REST complète',
        'Mises à jour automatiques',
        'Stockage cloud 50 Go',
      ],
      highlighted: true,
    },
    {
      name: 'Team',
      price: '199€',
      period: '/mois',
      badge: 'Early Adopter -40%',
      description: 'Pour les équipes et laboratoires',
      cta: "S'abonner",
      ctaIcon: null,
      features: [
        'Tous les modules Pro',
        'Advanced Analytics inclus',
        'Jusqu\'à 10 utilisateurs',
        'Gestion centralisée des licences',
        'Support prioritaire avec SLA',
        'Formation en ligne incluse',
        'Déploiement on-premise disponible',
        'Stockage cloud 500 Go',
        'Intégration SSO/LDAP',
      ],
      highlighted: false,
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      badge: null,
      description: 'Pour les institutions et hôpitaux',
      cta: 'Nous contacter',
      ctaIcon: Mail,
      features: [
        'Tous les modules Team',
        'Utilisateurs illimités',
        'Modules personnalisés sur demande',
        'Support dédié 24/7',
        'Conformité HIPAA/RGPD garantie',
        'Audit de sécurité annuel',
        'Infrastructure dédiée disponible',
        'Stockage cloud illimité',
        'Contrat de service personnalisé',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarifs transparents
          </h2>
          <p className="text-xl text-gray-600">
            Choisissez la formule adaptée à vos besoins, sans engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.badge && (
                <div className="mb-3">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

              <button
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-colors mb-6 ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.ctaIcon && <plan.ctaIcon size={18} />}
                {plan.cta}
              </button>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className="text-green-500 shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Tous les prix sont hors taxes. Facturation mensuelle ou annuelle (-20%).{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Voir les conditions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
