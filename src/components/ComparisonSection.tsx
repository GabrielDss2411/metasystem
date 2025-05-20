import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  traditional: string;
  modern: string;
}

export const ComparisonSection: React.FC = () => {
  const comparisons: ComparisonItem[] = [
    {
      traditional: 'Aulas expositivas e conteúdo teórico fixo',
      modern: 'Metodologia ativa com simulações e experiências imersivas',
    },
    {
      traditional: 'Pouco uso de tecnologia ou plataformas digitais',
      modern: 'Integração de IA, dashboards e plataformas interativas',
    },
    {
      traditional: 'Avaliações pontuais, sem análise aprofundada',
      modern: 'Gamificação e alto engajamento prático',
    },
    {
      traditional: 'Participação passiva e baixo engajamento',
      modern: 'Conteúdo vivo, conectado às demandas atuais do setor',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            A vantagem da MetaSystem
          </h2>
          <p className="text-lg text-gray-600">
            Conectamos tradição marítima e inteligência artificial para elevar a formação profissional a um novo patamar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-full">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Treinamento Tradicional
              </h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-600">{item.traditional}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 shadow-lg text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">
                Treinamento MetaSystem
              </h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white/80 mt-1">•</span>
                  <span className="text-white/90">{item.modern}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};