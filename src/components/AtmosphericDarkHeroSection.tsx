import { useEffect, useRef } from 'react';

export function AtmosphericDarkHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play for aggressive mobile browsers (Safari/Opera)
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.warn("Autoplay prevented", e));
    }
  }, []);

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#121212] px-6 py-16 lg:py-28 text-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/prod_1.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white/70 text-xs tracking-[0.35em] uppercase mb-6 font-light">
          LVIV, UA / WORLDWIDE SHIPPING
        </span>
        
        <h1 className="font-sans font-normal text-4xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-6 tracking-tight max-w-4xl">
          Майстерня <br className="hidden md:block" />
          особливого посуду
        </h1>

        <p className="text-base md:text-lg text-white/80 font-light max-w-2xl mb-10 leading-relaxed">
          Естетика, що наповнює життя. <br className="block md:hidden" />
          Авторська кераміка ручної роботи, <br className="hidden md:block" />
          створена <br className="block md:hidden" />
          у Львові для ваших особливих моментів.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 relative z-20 w-full">
          <button className="bg-white text-[#121212] hover:bg-white/90 px-8 py-4 font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-md">
            ПЕРЕГЛЯНУТИ КАТАЛОГ
          </button>
          
          <button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#121212] px-8 py-4 font-semibold text-xs tracking-[0.2em] uppercase transition-all">
            КОЛЕКЦІЯ «WILD EARTH»
          </button>
        </div>
      </div>
    </section>
  );
}
