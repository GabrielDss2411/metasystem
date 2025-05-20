import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Os treinamentos da MetaSystem elevaram a performance dos nossos tripulantes, com simulações realistas e uso avançado de IA. Notamos resultados imediatos em disciplina e tomada de decisão. MetaSystem transforma tripulações.",
      author: 'Rogério Soares',
      role: 'Diretor Geral',
      company: 'Hunters Manpower',
      image: './src/components/logo/maninho.jpg',
    },
    {
      quote:
        "A MetaSystem eleva a capacitação dos marítimos com inteligência artificial, trazendo mais segurança e eficiência ao setor offshore. A AMOB apoia essa transformação essencial para o futuro da nossa indústria.",
      author: 'Ivan Instrutor',
      role: 'Presidente',
      company: 'Associação de Marítimos e Offshores do Brasil (AMOB)',
      image: './src/components/logo/ivan.jpg',
    },
    {
      quote:
        "Implementing MetaSystem's training solutions has resulted in a measurable decrease in safety incidents and improved operational efficiency across our fleet.",
      author: 'Ricardo Andrade',
      role: 'Fleet Manager',
      company: 'Atlantic Shipping Co.',
      image: 'https://i.pravatar.cc/100?img=18',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide automático a cada 2s

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-white shadow-lg p-8 md:p-12">
            <div className="absolute -top-6 left-10">
              <div className="p-3 bg-purple-100 rounded-full">
                <Quote className="h-8 w-8 text-purple-600" />
              </div>
            </div>

            <div className="pt-6 min-h-[240px] transition-all duration-500 ease-in-out">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.20 }}
                  className="text-xl md:text-2xl font-medium text-gray-800 mb-8 italic leading-relaxed"
                >
                  "{testimonials[currentIndex].quote}"
                </motion.p>
              </AnimatePresence>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentIndex].role},{' '}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-3 -right-3 w-40 h-40 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -z-10 -top-3 -left-3 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
