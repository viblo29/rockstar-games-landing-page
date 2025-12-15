import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import FeaturedGames from '../FeaturedGames/FeaturedGames'
import News from '../News/News'
import GameLauncher from '../GameLauncher/GameLauncher'
import Footer from '../Footer/Footer'
import GameGallery from '../GameGallery/GameGallery'
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper' 

const LojaPage = () => (
  <div className="w-full min-h-[50vh] flex justify-center items-center mt-28">
    <AnimationWrapper>
      <h1 className="text-white text-4xl font-bold">LOJA</h1>
    </AnimationWrapper>
  </div>
);

const AjudaPage = () => (
  <div className="w-full min-h-[50vh] flex justify-center items-center mt-28">
    <AnimationWrapper>
      <h1 className="text-white text-4xl font-bold">AJUDA</h1>
    </AnimationWrapper>
  </div>
);


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Content() {
  return (
    <>
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={
          <>
            <AnimationWrapper>
              <Banner />
            </AnimationWrapper>

            <AnimationWrapper delay={0.1}>
              <FeaturedGames />
            </AnimationWrapper>

            <AnimationWrapper delay={0.1}>
              <News />
            </AnimationWrapper>

            <AnimationWrapper>
              <GameLauncher />
            </AnimationWrapper>
          </>
        } />

        <Route path="/loja" element={<LojaPage />} />
        <Route path="/ajuda" element={<AjudaPage />} />
        
        <Route path="/gallery/:id" element={
          <AnimationWrapper>
            <GameGallery />
          </AnimationWrapper>
        } />
      </Routes>

      <AnimationWrapper>
        <Footer />
      </AnimationWrapper>
    </>
  )
}

export default Content