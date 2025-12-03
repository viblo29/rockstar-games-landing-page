import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import FeaturedGames from "./components/FeaturedGames/FeaturedGames";
import News from "./components/News/News";
import GameLauncher from "./components/GameLauncher/GameLauncher";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Loja from "./components/Header/Loja";
import Ajuda from "./components/Header/Ajuda";
import GameGallery from "./components/GameGallery/GameGallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <FeaturedGames />
              <News />
              <GameLauncher />
            </>
          }
        />
        <Route path="/loja" element={<Loja />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/gallery/:id" element={<GameGallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
