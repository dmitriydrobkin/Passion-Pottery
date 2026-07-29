export function EditorialLookbookSection() {
  return (
    <section className="bg-[#F8F7F4] py-24 px-6 border-y border-[#E5E3DF]">
      <div className="max-w-[84rem] mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#6E6D6B] block uppercase">
            [ LOOKBOOK 2026 ]
          </span>
          <h2 className="font-sans font-light text-3xl md:text-5xl text-[#121212] mt-2 mb-6">
            Естетика щодня. Більше, ніж просто посуд.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E5E3DF]">
              <img 
                src="/images/img_10.jpg" 
                alt="Сніданок з керамікою"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="text-xs text-[#6E6D6B] mt-3 font-light tracking-wider uppercase">
              Колекція «Morning Mist» у домашньому сервіруванні.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#E5E3DF]">
              <img 
                src="/images/img_11.jpg" 
                alt="Наливання чаю"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#E5E3DF]">
              <img 
                src="/images/img_12.jpg" 
                alt="Текстура глини"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
