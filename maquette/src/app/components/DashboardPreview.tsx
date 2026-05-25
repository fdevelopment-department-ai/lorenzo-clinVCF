import { FileText, Eye, Sparkles } from 'lucide-react';

export function DashboardPreview() {
  const variantData = [
    { gene: 'BRCA1', variant: 'c.5266dupC', clinvar: 'Pathogenic', impact: 'High' },
    { gene: 'TP53', variant: 'c.524G>A', clinvar: 'Likely pathogenic', impact: 'High' },
    { gene: 'EGFR', variant: 'c.2573T>G', clinvar: 'Uncertain', impact: 'Moderate' },
    { gene: 'KRAS', variant: 'c.35G>A', clinvar: 'Benign', impact: 'Low' },
  ];

  const modules = [
    { name: 'VCF Loader', icon: FileText, color: 'blue' },
    { name: 'Data Viewer', icon: Eye, color: 'green' },
    { name: 'PredSoma', icon: Sparkles, color: 'purple', premium: true },
    { name: 'PredConst', icon: Sparkles, color: 'purple', premium: true },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interface intuitive et puissante
          </h2>
          <p className="text-xl text-gray-600">
            Visualisez et analysez vos variants génétiques en quelques clics
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Module Tabs */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              {modules.map((module) => (
                <div
                  key={module.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                    module.premium
                      ? 'border-purple-200 bg-purple-50'
                      : `border-${module.color}-200 bg-${module.color}-50`
                  }`}
                >
                  <module.icon size={18} className={`text-${module.color}-600`} />
                  <span className="text-sm font-medium text-gray-700">
                    {module.name}
                  </span>
                  {module.premium && (
                    <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                      Premium
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Data Table */}
          <div className="p-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Gene
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Variant
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      ClinVar
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {variantData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {row.gene}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                        {row.variant}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            row.clinvar === 'Pathogenic'
                              ? 'bg-red-100 text-red-800'
                              : row.clinvar === 'Likely pathogenic'
                              ? 'bg-orange-100 text-orange-800'
                              : row.clinvar === 'Uncertain'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {row.clinvar}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            row.impact === 'High'
                              ? 'bg-red-100 text-red-800'
                              : row.impact === 'Moderate'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {row.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
