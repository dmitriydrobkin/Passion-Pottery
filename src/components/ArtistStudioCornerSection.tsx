export function ArtistStudioCornerSection() {
  return (
    <section className="bg-[#F8F7F4] py-24 px-6 border-t border-[#E5E3DF]">
      <div className="max-w-[84rem] mx-auto">
        <div className="bg-white border border-[#E5E3DF] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden border border-[#E5E3DF]">
              <img 
                src="/images/img_14.jpg" 
                alt="Христина Марковська за роботою"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <p className="font-sans font-light text-xl md:text-2xl text-[#121212] italic leading-relaxed mb-6">
              «Для мене кераміка — це спосіб зупинити час. Коли ви берете в руки мою чашку вранці, я хочу, щоб ви відчули тепло ручної роботи та дозволили собі 15 хвилин спокою перед початком дня.»
            </p>
            <a 
              href="#" 
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#121212] border-b border-[#121212] pb-1 inline-block hover:opacity-70 transition-opacity"
            >
              @khrystyna_markovska / Майстерня особливого посуду
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
