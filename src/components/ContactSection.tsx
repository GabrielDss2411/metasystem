import React from 'react';
import { MessageSquare, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Fale com nossa equipe
          </h2>
          <p className="text-lg text-gray-600">
            Fale com nossos especialistas e descubra como a MetaSystem transforma seu treinamento marítimo.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">WhatsApp Connection</h3>
            </div>
            
            <p className="text-gray-600 mb-8">
              Escaneie o QR code para falar com nossa equipe no WhatsApp. Atendimento 24h.
            </p>
            
            <div className="flex justify-center mb-8">
              {/* This is a placeholder for a QR code - in a real implementation, this would be an actual QR code */}
              <div className="w-48 h-48 bg-white p-3 shadow-sm rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="w-full h-full border-2 border-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-800 text-center p-2">
                    [WhatsApp QR Code]
                    <br />
                    Connect with our team
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-center text-gray-500">
              Prefere email? Entre em contato{' '}
              <a href="mailto:info@metasystem.ai" className="text-purple-600 hover:underline">
                contato@systemoffshore.com.br
              </a>
            </p>
          </div>
          
          <div className="flex-1 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-full">
                <Navigation className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Visite nosso espaço</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Nossa sede fica no Rio de Janeiro, Brasil. Acolhemos visitas de potenciais parceiros e clientes.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-medium text-white/80 mb-1">Endereço</h4>
                <p className="text-white">
                  Estr. dos Três Rios, 830 - 520
                  <br />
                  Freguesia, Rio de Janeiro
                  <br />
                  Brasil, 22745-005
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-white/80 mb-1">Telefone</h4>
                <p className="text-white">+55 (21) 99528-9772</p>
              </div>
              
              <div>
                <h4 className="font-medium text-white/80 mb-1">Horários</h4>
                <p className="text-white">Segunda a Sexta 8h às 18h</p>
              </div>
            </div>
            
            <a
              href="https://maps.app.goo.gl/BQP8k1R7Gf4BFYig6"
              className="inline-block px-5 py-2.5 rounded-full bg-white text-gray-900 text-sm font-medium transition-all hover:bg-gray-100"
            >
              Obter rota
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};