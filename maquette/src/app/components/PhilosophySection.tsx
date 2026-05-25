export function PhilosophySection() {
  const pillars = [
    {
      number: '01',
      title: 'Plateforme ouverte',
      description:
        'ClinVCF-OS est conçu comme une plateforme open-source permettant à la communauté scientifique de contribuer et d\'innover. Transparence totale du code et des algorithmes pour garantir la fiabilité des analyses.',
    },
    {
      number: '02',
      title: 'Écosystème modulaire',
      description:
        'Architecture modulaire permettant d\'activer uniquement les fonctionnalités nécessaires. Installez les modules de base gratuitement et ajoutez des modules premium selon vos besoins spécifiques d\'analyse.',
    },
    {
      number: '03',
      title: 'Développement communautaire',
      description:
        'Une communauté active de chercheurs, cliniciens et développeurs qui contribuent constamment à l\'amélioration de la plateforme. Partagez vos workflows et bénéficiez de l\'expertise collective.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre philosophie
          </h2>
          <p className="text-xl text-gray-600">
            Trois principes fondamentaux qui guident le développement de ClinVCF-OS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <span className="text-2xl font-bold text-blue-600">
                  {pillar.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
