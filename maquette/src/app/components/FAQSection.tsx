import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      question: 'ClinVCF-OS est-il vraiment gratuit ?',
      answer:
        'Oui, la version Community est entièrement gratuite et inclut les modules de base (VCF Loader, Data Viewer, annotations standards). Elle est limitée à 100 variants par jour mais parfaite pour découvrir la plateforme. Pour un usage professionnel illimité, les versions payantes débloquent tous les modules avancés.',
    },
    {
      question: 'Puis-je utiliser ClinVCF-OS en contexte clinique ?',
      answer:
        'ClinVCF-OS peut être utilisé comme outil d\'aide à la décision clinique, mais ne remplace pas le jugement médical. Les versions Pro et supérieures incluent des fonctionnalités validées cliniquement. Pour un usage diagnostique, nous recommandons la version Enterprise avec audit de conformité CLIA/CAP.',
    },
    {
      question: 'Comment sont protégées mes données génomiques ?',
      answer:
        'Aucune donnée n\'est envoyée à nos serveurs. Tout le traitement se fait en local sur votre machine. En version cloud (Pro+), les données sont chiffrées de bout en bout (AES-256) et stockées dans des datacenters certifiés ISO 27001. Vous gardez toujours le contrôle total de vos données.',
    },
    {
      question: 'Quels formats de fichiers sont supportés ?',
      answer:
        'ClinVCF-OS supporte les formats VCF (v4.0+), BCF, et leurs versions compressées (gzip, bgzip). Import également possible depuis des fichiers TSV/CSV annotés. Export vers Excel, CSV, JSON, et génération de rapports PDF personnalisables.',
    },
    {
      question: 'Puis-je développer mes propres modules ?',
      answer:
        'Absolument ! Notre SDK open-source permet de créer des modules personnalisés en Python ou JavaScript. Documentation complète et exemples disponibles sur GitHub. Les modules communautaires peuvent être partagés sur le ClinStore et même monétisés si vous le souhaitez.',
    },
    {
      question: 'Comment fonctionne le pricing Early Adopter ?',
      answer:
        'Les tarifs actuels bénéficient d\'une réduction de 40% pour tous les premiers utilisateurs. Cette réduction est garantie à vie tant que vous restez abonné. Prix normal : Pro 49€/mois, Team 329€/mois. L\'offre Early Adopter est limitée aux 5000 premiers inscrits.',
    },
    {
      question: 'Puis-je changer de formule à tout moment ?',
      answer:
        'Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment. Les changements prennent effet immédiatement. En cas de downgrade, le prorata du mois en cours est crédité sur votre prochaine facture. Annulation possible sans frais avec un préavis de 30 jours.',
    },
    {
      question: 'Quelles sont les configurations système requises ?',
      answer:
        'Windows 10+, macOS 11+, ou Linux (Ubuntu 20.04+). 8 Go RAM minimum (16 Go recommandés pour gros fichiers VCF). 2 Go d\'espace disque. Processeur 64-bit. Pas de GPU requis mais améliore les performances de visualisation si présent.',
    },
    {
      question: 'Proposez-vous des formations ?',
      answer:
        'Oui ! Formation en ligne gratuite de 2h pour tous les utilisateurs (vidéos + exercices). Les abonnés Team/Enterprise bénéficient de sessions de formation personnalisées avec nos experts (en français ou anglais). Certifications professionnelles disponibles moyennant un examen.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur ClinVCF-OS
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors group">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="text-gray-500 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-12 text-center bg-blue-50 rounded-xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-4">
            Notre équipe support est là pour vous aider
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Contacter le support
          </button>
        </div>
      </div>
    </section>
  );
}
