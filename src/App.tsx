import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, 
  Sparkles, 
  Coffee, 
  Instagram, 
  Phone, 
  Menu,
  X 
} from 'lucide-react';
import { useState } from 'react';

// --- Componentes de Apoio ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* LOGO - Hall Concept (Estilo Âmbar Suave) */}
        <div className="flex flex-col items-start leading-none group cursor-pointer">
          <span className="text-white text-lg md:text-xl tracking-[0.4em] font-light uppercase">
            Hall
          </span>
          <span className="text-amber-200/80 text-xl md:text-2xl font-serif italic -mt-1 ml-4 tracking-wider transition-colors group-hover:text-amber-200">
            Concept
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 lg:space-x-16 text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium">
          <a href="#home" className="hover:text-amber-200 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-amber-200 transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-amber-200 transition-colors">O Especialista</a>
          <a href="#contato" className="hover:text-amber-200 transition-colors">Contato</a>
        </div>

        {/* Botão de Agendamento Desktop */}
        <button className="hidden md:block border border-amber-200/30 text-amber-100 px-8 py-2.5 text-[10px] uppercase tracking-[0.2em] hover:bg-amber-200 hover:text-black transition-all duration-500 font-bold">
          Agendar
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 p-8 md:hidden flex flex-col space-y-6 text-center"
          >
            <a href="#home" onClick={() => setIsOpen(false)} className="uppercase tracking-widest text-xs text-white">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="uppercase tracking-widest text-xs text-white">Serviços</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="uppercase tracking-widest text-xs text-white">Contato</a>
            <button className="bg-amber-200 text-black py-4 uppercase text-xs tracking-widest font-bold">Agendar</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, price, desc, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className="group p-8 md:p-10 bg-stone-900/40 border border-white/5 hover:border-amber-200/20 transition-all duration-700 relative overflow-hidden backdrop-blur-sm"
  >
    <div className="absolute top-0 left-0 w-[1px] h-0 bg-amber-200 group-hover:h-full transition-all duration-700" />
    <Icon className="w-5 h-5 text-amber-200/50 mb-8 group-hover:text-amber-200 transition-colors duration-500" />
    <h3 className="text-lg font-light mb-4 text-white uppercase tracking-wider">{title}</h3>
    <p className="text-stone-500 text-sm mb-6 leading-relaxed font-light">{desc}</p>
    <div className="flex justify-between items-center border-t border-white/5 pt-6">
      <span className="text-[9px] uppercase tracking-widest text-stone-600 font-bold">Premium Choice</span>
      <span className="text-amber-100/80 font-light text-sm tracking-widest">{price}</span>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-stone-300 selection:bg-amber-200 selection:text-black scroll-smooth overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[100svh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full opacity-50" />
          <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-purple-900/5 blur-[120px] rounded-full opacity-30" />
          
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }} 
            transition={{ duration: 2.5 }}
            src="/luxo.png" 
            alt="luxo" 
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] brightness-50"
            style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }}
          />
          
          {/* Overlay gradiente clareado para destacar o rosto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>
        
        <div className="relative z-30 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-amber-200/50 uppercase tracking-[0.6em] md:tracking-[0.8em] text-[9px] md:text-[10px] mb-8 block font-medium">
              Hair Expert • Visagismo • Estilo
            </span>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-12 leading-[1.1] md:leading-[1] uppercase">
              Onde a beleza <br /> 
              <span className="italic font-extralight text-stone-400">Ganha Vida</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <button className="w-full md:w-auto group relative overflow-hidden bg-white text-black px-12 py-5 uppercase text-[10px] tracking-[0.4em] font-bold transition-all duration-700 hover:bg-stone-200">
                Agendar Agora
              </button>
              <button className="w-full md:w-auto border border-white/10 px-12 py-5 uppercase text-[10px] tracking-[0.4em] font-light text-white hover:bg-white/5 transition-all duration-700">
                Conhecer Serviços
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section>
        <h5 className="text-[15px] text-center uppercase tracking-[0.4em] text-amber-200/70 font-bold mt-20">Nossos Serviços</h5>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 md:py-48 px-6 relative">
        <div className="absolute inset-0 z-0 opacity-20 -mt-30">
          <img 
            src="/image2.jpeg" 
            alt="Textura de fundo" 
            className="w-full h-full object-cover"
            style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ServiceCard index={1} icon={Scissors} title="Corte Visagista" price="R$ 250" desc="Um estudo profundo das suas linhas faciais para revelar sua melhor versão." />
            <ServiceCard index={2} icon={Sparkles} title="Cor & Identidade" price="Consultar" desc="Técnicas de iluminação que respeitam a saúde capilar e o seu contraste natural." />
            <ServiceCard index={3} icon={Coffee} title="Barba Concept" price="R$ 150" desc="O ritual clássico com toalha quente e finalização com produtos premium." />
          </div>
        </div>
      </section>

      {/* Footer / Contato */}
      <footer id="contato" className="bg-black border-t border-white/5 pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/image.jpeg" 
            alt="Fundo Contato" 
            className="w-full h-full object-cover object-[center_20%] brightness-110"
            style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-20 mb-24">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 w-full max-w-4xl">
              <div className="space-y-6">
                <h5 className="text-[10px] uppercase tracking-[0.4em] text-amber-200/70 font-bold">Contato</h5>
                <div className="space-y-4 text-sm md:text-base text-stone-400 font-light">
                  <a href="#" className="flex items-center justify-center gap-4 hover:text-white transition-colors group">
                    <Instagram size={18} className="group-hover:text-amber-200 transition-colors" /> 
                    <span>@hallconcept.oficial</span>
                  </a>
                  <p className="flex items-center justify-center gap-4">
                    <Phone size={18} /> 
                    <span>(19) 99752-7234</span>
                  </p>
                  <p className="flex items-center justify-center gap-4">
                    <Phone size={18} /> 
                    <span>(19) 99825-3828</span>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] uppercase tracking-[0.4em] text-amber-200/70 font-bold">Onde Estamos</h5>
                <div className="text-sm md:text-base text-stone-400 font-light leading-relaxed">
                  <p>Pedreira, SP</p>
                  <p>Jaguariúna, SP</p>
                  <span className="text-amber-200/40 mt-2 block italic text-xs tracking-wider">
                    Atendimento em endereço exclusivo
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 text-center">
            <span className="text-[9px] text-stone-700 uppercase tracking-[0.5em] font-medium">
              © 2026 Hall Concept • Design Privativo
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}