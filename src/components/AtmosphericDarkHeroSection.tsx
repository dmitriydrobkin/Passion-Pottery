export function AtmosphericDarkHeroSection() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#121212] px-6 py-16 lg:py-28 text-center">
      <div 
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `
            <video
              id="hero-video"
              autoplay
              loop
              muted
              playsinline
              webkit-playsinline
              x5-playsinline
              x5-video-player-type="h5"
              preload="auto"
              style="width:100%;height:100%;object-fit:cover;opacity:0.5;display:block;"
              src="/videos/hero_video.mp4"
            ></video>
            <script>
              (function() {
                var v = document.getElementById('hero-video');
                if (v) {
                  v.muted = true;
                  v.defaultMuted = true;
                  v.setAttribute('muted', '');
                  var p = v.play();
                  if (p !== undefined) { p.catch(function(){}); }
                }
              })();
            </script>
          `
        }}
      />
      
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
