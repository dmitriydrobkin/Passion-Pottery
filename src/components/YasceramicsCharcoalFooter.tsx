export function YasceramicsCharcoalFooter() {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[84rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10 text-sm">
        <div>
          <span className="font-bold text-xl tracking-[0.25em] block mb-2">
            PASSION POTTERY
          </span>
          <p className="text-white/60 text-xs font-light max-w-xs leading-relaxed">
            Khrystyna Markovska / Майстерня особливого посуду✨
          </p>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 mb-4 block">
            🛍️ КАТАЛОГ ПОСУДУ
          </span>
          <div className="flex flex-col gap-2.5 text-xs text-white/80">
            <a href="#" className="hover:text-white transition-colors">Чашки та горнятка</a>
            <a href="#" className="hover:text-white transition-colors">Тарілки та боули</a>
            <a href="#" className="hover:text-white transition-colors">Вази та декор</a>
            <a href="#" className="hover:text-white transition-colors">Подарункові набори</a>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 mb-4 block">
            📦 WORLDWIDE SHIPPING
          </span>
          <div className="flex flex-col gap-2.5 text-xs text-white/80">
            <a href="#" className="hover:text-white transition-colors">Доставка по Україні та світу</a>
            <a href="#" className="hover:text-white transition-colors">Оплата та гарантії</a>
            <a href="#" className="hover:text-white transition-colors">Догляд за керамікою</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.2em] font-semibold text-white/50 mb-8 uppercase">
            📍 МАЙСТЕРНЯ У ЛЬВОВІ
          </h4>
          <span className="text-xs text-white/80 block mb-2">
            м. Львів, Україна (Lviv, UA)
          </span>
          <div className="flex flex-col gap-2.5 text-xs text-white/80 tracking-wider mt-2">
            <a href="#" className="hover:text-white transition-colors">Instagram: @khrystyna_markovska</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
          </div>
        </div>
      </div>

      <div className="max-w-[84rem] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider font-light gap-4">
        <p>© 2026 PASSION POTTERY BY KHRYSTYNA MARKOVSKA.</p>
        <p>POTTERY & LIFESTYLE · DIGITAL FLAGSHIP STORE · LVIV UA</p>
      </div>
    </footer>
  );
}
