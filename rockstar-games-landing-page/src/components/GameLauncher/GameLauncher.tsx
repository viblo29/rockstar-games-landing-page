import bgImg from "../../../public/background-img.png";
import rockstarGamesLogo from '../../../public/rockstar-games-logo.svg'
import gamesLauncher from "../../../public/Games Launcher.svg"
import gamesLauncher2 from "../../../public/gamelauncher.png";
import Button from "../Button/Button";

function GameLauncher() {
  return (
    <div className="w-full flex justify-center mt-16 xl:mt-28 px-4 xl:px-0 mb-16">
      <div 
        className="w-full max-w-[1160px] min-h-[500px] xl:h-[535px] rounded-2xl flex flex-col-reverse xl:flex-row justify-between items-center p-8 xl:p-0 overflow-hidden relative shadow-xl"
        style={{
            backgroundImage: `url(${bgImg})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
      >
          
          <div className="text-[#020202] flex flex-col items-center xl:items-start text-center xl:text-left z-10 xl:pl-[76px] w-full xl:w-auto mt-8 xl:mt-0">
            
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-[18.24px]">
                <img src={rockstarGamesLogo} alt="Rockstar Logo" className="w-12 h-12 xl:w-auto xl:h-auto" />
                <div className="font-extrabold text-3xl xl:text-[41.57px] leading-tight">
                    Games Launcher
                </div>
            </div>
            
            <div className="w-full max-w-[326px] mt-4 xl:mt-8 mb-8 xl:mb-16 font-medium text-xl xl:text-[32px] leading-snug">
                Todos os seus jogos em um só lugar.
            </div>
            
            <div className="w-full xl:w-auto flex justify-center xl:block">
               <Button text="Download" w="260px" h="63px" font="800"/>
            </div>
          </div>

          <div className="w-[70%] max-w-[350px] xl:max-w-none xl:w-auto xl:pr-10">

            <img 
                src={gamesLauncher2} 
                alt="Games Launcher Mobile" 
                className="block xl:hidden w-full h-auto object-contain drop-shadow-2xl" 
            />

            <img 
                src={gamesLauncher} 
                alt="Games Launcher Desktop" 
                className="hidden xl:block w-full h-auto object-contain drop-shadow-2xl" 
            />
          </div>

      </div>
    </div>
  );
}

export default GameLauncher;