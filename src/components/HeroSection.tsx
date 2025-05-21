import React from 'react';
import { ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section  id="inicio" className="relative bg-white pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            <span className='blue-600'> Treinamento Marítimo Inteligente. </span> 
              <span className="text-orange-600"> Impulsionado por IA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Revolucionando o treinamento e as operações marítimas por meio de sistemas inteligentes, tecnologias imersivas e soluções digitais de alto impacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solutions"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-center transition-all hover:blue-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg shadow-purple-200"
              >
                Nossas Soluções
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-medium text-center flex items-center justify-center gap-2 hover:border-gray-400 transition-all group"
              >
                Saiba mais
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <img
                src="https://github.com/GabrielDss2411/metasystem/blob/main/logo/fundobloco1.jpg?raw=true"
                alt="Maritime training with advanced technology"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
