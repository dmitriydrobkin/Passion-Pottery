export function BespokeAndHorecaSection() {
  return (
    <section className="bg-white py-24 px-6 max-w-[84rem] mx-auto">
      <div className="bg-[#121212] text-white p-8 md:p-16 border border-[#121212] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4 block">
            [ BESPOKE CERAMICS ]
          </span>
          <h2 className="font-sans font-light text-3xl md:text-5xl text-white leading-tight mb-6">
            Створюємо індивідуальний посуд для ресторанів, кав'ярень та приватних колекцій
          </h2>
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-10 max-w-xl">
            Шукаєте унікальний посуд з логотипом вашого закладу або мрієте про особливий сервіз для свого дому? Христина Марковська розробить індивідуальні форми та глазурі спеціально під ваш інтер'єр.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#121212] hover:bg-white/90 px-8 py-4 font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-md">
              ОБГОВОРИТИ ЗАМОВЛЕННЯ
            </button>
            
            <button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#121212] px-8 py-4 font-semibold text-xs tracking-[0.2em] uppercase transition-all">
              ПОРТФОЛІО ДЛЯ HORECA
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/20">
            <img 
              src="/images/img_13.jpg" 
              alt="HORECA посуд"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
