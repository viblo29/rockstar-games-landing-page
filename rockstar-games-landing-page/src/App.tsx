import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import FeaturedGames from './components/FeaturedGames/FeaturedGames'
import News from './components/News/News'
import GameLauncher from './components/GameLauncher/GameLauncher'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <FeaturedGames />
      <News />
      <GameLauncher />
      <Footer />
    </>
  )
}

export default App
