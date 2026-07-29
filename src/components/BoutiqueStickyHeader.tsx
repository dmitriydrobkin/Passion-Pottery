import { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BoutiqueStickyHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur border-b border-[#E5E3DF] px-4 md:px-12 py-4 md:py-5">
        <div className="flex items-center justify-between max-w-[84rem] mx-auto relative h-10">
          
          {/* Left: Mobile Menu Trigger (Mobile Only) */}
          <div className="flex-1 lg:hidden flex justify-start">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[#121212] p-1 -ml-1 hover:opacity-70 transition-opacity"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Left: Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-start gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#121212]">
            <a href="#" className="hover:opacity-70 transition-opacity">Каталог</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Колекції</a>
            <a href="#" className="hover:opacity-70 transition-opacity">На замовлення</a>
          </div>
          
          {/* Center: Brand Logo (Absolutely centered on Desktop) */}
          <div className="text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <div className="font-sans font-bold text-lg md:text-2xl tracking-[0.25em] uppercase text-[#121212] whitespace-nowrap">
              PASSION POTTERY
            </div>
            <span className="text-[8px] md:text-[9px] tracking-[0.35em] text-[#6E6D6B] block text-center -mt-1 font-light uppercase">
              KHRYSTYNA MARKOVSKA · LVIV
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-1 justify-end items-center gap-4 md:gap-6 text-[#121212]">
            <a href="#" className="hidden lg:block text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity mr-2">
              Про майстерню
            </a>
            <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity hidden sm:block" strokeWidth={1.5} />
            <span className="text-xs font-light tracking-widest hidden lg:block">UAH ₴ / EUR €</span>
            <div className="relative cursor-pointer hover:opacity-70 transition-opacity p-1 -mr-1 md:m-0">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              <span className="absolute -top-0.5 -right-1 md:-top-1.5 md:-right-2 bg-[#121212] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none border border-white">
                0
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#E5E3DF]">
              <div className="font-sans font-bold text-lg tracking-[0.25em] uppercase text-[#121212]">
                МЕНЮ
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#121212] p-1 hover:opacity-70 transition-opacity"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex flex-col flex-1 px-6 py-10 gap-8 overflow-y-auto">
              <a href="#" className="font-sans font-light text-3xl uppercase tracking-wider text-[#121212]" onClick={() => setIsMobileMenuOpen(false)}>Каталог</a>
              <a href="#" className="font-sans font-light text-3xl uppercase tracking-wider text-[#121212]" onClick={() => setIsMobileMenuOpen(false)}>Колекції</a>
              <a href="#" className="font-sans font-light text-3xl uppercase tracking-wider text-[#121212]" onClick={() => setIsMobileMenuOpen(false)}>На замовлення</a>
              <a href="#" className="font-sans font-light text-3xl uppercase tracking-wider text-[#121212]" onClick={() => setIsMobileMenuOpen(false)}>Про майстерню</a>
              
              <div className="mt-auto pt-10 border-t border-[#E5E3DF]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-light tracking-widest text-[#6E6D6B]">Валюта:</span>
                  <span className="text-sm font-medium tracking-widest">UAH ₴</span>
                </div>
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-sm font-light tracking-widest text-[#6E6D6B]">Пошук виробів</span>
                  <Search className="w-5 h-5 text-[#121212]" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
