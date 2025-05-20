import React from 'react';
import { Zap, Cpu, LineChart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Revolucionando Treinamento Marítimo
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A MetaSystem transforma a educação offshore com IA, simulações adaptativas e dados em tempo real. Treinamentos que elevam a segurança e a performance nas operações marítimas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-10 w-10 text-purple-600" />,
              title: 'Imersão Total, Risco Zero',
              description:
                'Ambientes virtuais hiper-realistas que simulam cenários de emergência e operações críticas sem colocar vidas em risco. Treinamento prático com total segurança e máxima fidelidade à realidade.',
            },
            {
              icon: <Cpu className="h-10 w-10 text-purple-600" />,
              title: 'Simulações com tecnologia IA',
              description:
                "Óculos de realidade aumentada que adaptam o treinamento ao perfil de cada profissional. Mais engajamento, menos erros, melhor performance.",
            },
            {
              icon: <LineChart className="h-10 w-10 text-purple-600" />,
              title: 'Melhorias Contínua',
              description:
                'Nossos sistemas evoluem continuamente com base nos desenvolvimentos do setor e nos dados de desempenho do usuário, mantendo o conteúdo de treinamento sempre atualizado.',
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-3 bg-purple-50 rounded-lg inline-flex mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};