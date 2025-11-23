import { useState } from 'react';

import gta5 from '../../../public/GTA 5.svg';
import gtaOnline from '../../../public/GTA online.svg';
import red from '../../../public/RED.svg';
import redOnline from '../../../public/RED Online.svg';

import Button from '../Button/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/scrollbar.css';

function FeaturedGames() {
  const [showMore, setShowMore] = useState(false);

  const gamesData = [
    { id: 1, src: gta5, alt: "GTA 5" },
    { id: 2, src: gtaOnline, alt: "GTA Online" },
    { id: 3, src: red, alt: "Red Dead Redemption" },
    { id: 4, src: redOnline, alt: "Red Dead Online" },
    { id: 5, src: gta5, alt: "GTA 5 Extra" },
    { id: 6, src: gtaOnline, alt: "GTA Online Extra" },
    { id: 7, src: red, alt: "RED Extra" },
    { id: 8, src: redOnline, alt: "RED Online Extra" },
  ];

  const GameCard = ({ src, alt }: { src: string, alt: string }) => (
    <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );

  return (
    <div className='flex w-full justify-center'>
      <div className='flex w-full max-w-[1440px] flex-col items-center px-4'>
        
        <div className="flex w-full flex-col xl:flex-row justify-between items-center mb-10 gap-4">
          <div className="font-extrabold text-[32px] xl:text-[48px]">Jogos em Destaque</div>
          
          <div className="flex flex-wrap justify-center gap-2 xl:gap-4">
            <div className="bg-[#606060] px-4 py-2 xl:px-6 xl:py-0 xl:h-8 flex items-center rounded-full cursor-pointer transition duration-200 hover:bg-[#464646] text-sm xl:text-base">PC</div>
            <div className="bg-[#606060] px-4 py-2 xl:px-6 xl:py-0 xl:h-8 flex items-center rounded-full cursor-pointer transition duration-200 hover:bg-[#464646] text-sm xl:text-base">Console</div>
            <div className="bg-[#606060] px-4 py-2 xl:px-6 xl:py-0 xl:h-8 flex items-center rounded-full cursor-pointer transition duration-200 hover:bg-[#464646] text-sm xl:text-base">Dispositivos Portáteis</div>
          </div>
        </div>

        <div className="hidden xl:flex flex-col items-center w-full">
          <div className="mb-16 flex gap-10 flex-wrap justify-center">
            {/* Show first 4 items */}
            {gamesData.slice(0, 4).map((game) => (
               <GameCard key={game.id} src={game.src} alt={game.alt} />
            ))}
            
            {showMore && gamesData.slice(4).map((game) => (
               <div key={game.id} className="animate-in fade-in duration-500">
                  <GameCard src={game.src} alt={game.alt} />
               </div>
            ))}
          </div>

          <button onClick={() => setShowMore(!showMore)}>
            <Button font="500" w="260px" h="63px" text={showMore ? "Ver menos" : "Ver todos os jogos"} />
          </button>
        </div>

        <div className="block xl:hidden w-full mb-10">
          <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true, hide: false }}
            spaceBetween={20}
            slidesPerView={'auto'} 
            breakpoints={{
              320: {
                slidesPerView: 1.2, 
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2.5,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3.5,
              }
            }}
            className="w-full pb-10"
          >
            {gamesData.map((game) => (
              <SwiperSlide key={game.id} className="flex justify-center">
                 <GameCard src={game.src} alt={game.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}

export default FeaturedGames;