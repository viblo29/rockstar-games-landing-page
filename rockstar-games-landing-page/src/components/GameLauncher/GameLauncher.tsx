import bgImg from "../../../public/background-img.png";
import rockstarGamesLogo from '../../../public/rockstar-games-logo.svg'
import gamesLauncher from "../../../public/Games Launcher.svg"
import Button from "../Button/Button";

function GameLauncher() {
  return (
    <>
    <div className="w-full flex justify-center mt-28">
      <div className="w-[1160px] h-[535px]">
        <div className="rounded-2xl flex justify-between items-center"
            style={{
            backgroundImage: `url(${bgImg})`, 
            width: "100%",
            height: "100%",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
        >
          <div className="pl-[76px] text-[#020202]">
            <div className="flex gap-[18.24px]">
                <img src={rockstarGamesLogo} alt="" />
                <div className="w-[186px] font-extrabold text-[41.57px]">Games Launcher</div>
            </div>
            <div className="w-[326px] mt-8 mb-16 font-medium text-[32px]">Todos os seus jogos em um só lugar.</div>
            <Button text="Download" w="260px" h="63px" font="800"/>
          </div>
          <div>
            <img src={gamesLauncher} alt="" />
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default GameLauncher;
