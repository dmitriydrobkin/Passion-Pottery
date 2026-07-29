import { BoutiqueStickyHeader } from './components/BoutiqueStickyHeader';
import { AtmosphericDarkHeroSection } from './components/AtmosphericDarkHeroSection';
import { MinimalistValueMarqueeStrip } from './components/MinimalistValueMarqueeStrip';
import { InteractiveBoutiqueCatalogSection } from './components/InteractiveBoutiqueCatalogSection';
import { EditorialLookbookSection } from './components/EditorialLookbookSection';
import { BespokeAndHorecaSection } from './components/BespokeAndHorecaSection';
import { ArtistStudioCornerSection } from './components/ArtistStudioCornerSection';
import { YasceramicsCharcoalFooter } from './components/YasceramicsCharcoalFooter';

function App() {
  return (
    <div className="min-h-screen font-sans bg-[#FFFFFF] overflow-x-clip">
      <BoutiqueStickyHeader />
      <main>
        <AtmosphericDarkHeroSection />
        <MinimalistValueMarqueeStrip />
        <InteractiveBoutiqueCatalogSection />
        <EditorialLookbookSection />
        <BespokeAndHorecaSection />
        <ArtistStudioCornerSection />
      </main>
      <YasceramicsCharcoalFooter />
    </div>
  );
}

export default App;
