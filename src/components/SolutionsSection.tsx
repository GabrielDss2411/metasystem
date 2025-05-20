import React, { useState } from 'react';
import { Shield, Users, Database, CheckCircle } from 'lucide-react';

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const SolutionsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions: Solution[] = [
    {
      icon: <Shield className="h-10 w-10 blue-600" />,
      title: 'Segurança como Prioridade',
      description:
        "Simulações em realidade aumentada combinadas a protocolos internacionais garantem treinamentos seguros e eficazes.",
      features: [
        'Realidade aumentada aplicada a cenários de risco',
        'Protocolos alinhados às normas internacionais',
        'Treinamentos imersivos em ambientes controlados',
        'Cultura de segurança reforçada em cada etapa',
      ],
    },
    {
      icon: <Database className="h-10 w-10 blue-600" />,
      title: 'Conectado ao Futuro',
      description:
        'Nossos treinamentos tradicionais seguem como alicerce, agora potencializados por dados e tecnologias que ampliam resultados.',
      features: [
        'Integração entre métodos clássicos e digitais',
        'Banco de dados inteligente com rastreabilidade',
        'Insights estratégicos para tomada de decisão',
        'Atualização contínua baseada em desempenho',
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Aprendizado Personalizado',
      description:
        'Tecnologia que entende o perfil do aluno e adapta o treinamento conforme suas necessidades.',
      features: [
        'IA que reconhece estilos de aprendizagem',
        'Feedback em tempo real',
        'Progresso individual monitorado',
        'Redução da curva de aprendizado',
      ],
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
      title: 'Resultados Validados',
      description:
        'Nossos programas são validados por dados de desempenho e métricas operacionais.',
      features: [
        'KPIs de performance em tempo real',
        'Relatórios gerenciais automatizados',
        'Avaliações práticas baseadas em cenários reais',
        'Reconhecimento por órgãos certificadores',
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Nossas soluções de treinamento
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Descubra nossa ampla gama de soluções de treinamento marítimo aprimoradas por IA de ponta.
          </p>
          
          <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden mb-16">
            <img
              src="./src/components/logo/fundo2.jpg"
              alt="Virtual Reality Training"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8">
              <p className="text-white text-lg font-medium">
                Experimente cenários de treinamento imersivos de RV/RA
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`
                rounded-xl overflow-hidden border border-gray-100
                transition-all duration-500 ease-in-out
                ${
                  activeIndex === index
                    ? 'bg-white shadow-xl scale-[1.02] z-10'
                    : 'bg-white/80 hover:bg-white hover:shadow-lg'
                }
              `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="p-8">
                <div className="p-3 bg-blue-50 rounded-lg inline-flex mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-600 mr-2 pt-0.5">•</span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-medium blue-600 hover: blue-600"
                  >
                    Learn more about this solution
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};