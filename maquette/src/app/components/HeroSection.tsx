import { Download, Code2, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Plateforme <span className="text-blue-600">modulaire</span> d'analyse de variants génétiques
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Solution unifiée pour le chargement, la visualisation et la prédiction de variants génétiques.
            Conçu pour les professionnels de la génomique et de la recherche clinique.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl">
              <Download size={20} />
              Télécharger gratuitement
            </button>
            <button className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors text-lg font-semibold">
              <Code2 size={20} />
              Explorer le SDK
            </button>
          </div>

          {/* Features Tagline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span>Installation en 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span>Multi-plateforme</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span>Aucune télémétrie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
