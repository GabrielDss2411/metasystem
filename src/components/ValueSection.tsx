import React from 'react';
import { Lightbulb, Anchor, Brain } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="p-4 rounded-full bg-purple-50 inline-flex mb-6 group-hover:bg-purple-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const ValueSection: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
      title: 'Inovação que Capacita',
      description:
        'Integramos plataformas digitais, simulações e recursos imersivos aos métodos clássicos de ensino.',
    },
    {
      icon: <Anchor className="h-8 w-8 text-purple-600" />,
      title: 'Tradição que Sustenta',
      description:
        'Fundamentamos nossos treinamentos na experiência prática e na cultura marítima que nos trouxe até aqui.',
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: 'Excelência Técnica',
      description:
        'Nossos instrutores combinam vivência real e didática moderna para garantir aprendizado com alto padrão de entrega.',
    },
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Por que a MetaSystem?
          </h2>
          <p className="text-lg text-gray-600">
          Unimos o que há de mais moderno em soluções digitais com a solidez do treinamento presencial, formando profissionais preparados para os desafios do mar e do offshore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};