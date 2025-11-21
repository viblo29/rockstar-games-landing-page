import { useState } from 'react'
import gta5 from '../../../public/GTA 5.svg'
import gtaOnline from '../../../public/GTA online.svg'
import red from '../../../public/RED.svg'
import redOnline from '../../../public/RED Online.svg'
import Button from '../Button/Button'

function FeaturedGames() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
        <div className='flex flex-col items-center mx-[140px]'>
            <div className="flex gap-[296px] justify-between items-center">
                <div className="font-extrabold text-[48px] ">Jogos em Destaque</div>
                <div className="flex h-8 gap-4">
                    <div className="bg-[#606060] px-6 flex items-center rounded-full cursor-pointer transition duration-200 hover:bg-[#464646]">PC</div>
                    <div className="bg-[#606060] px-6 flex items-center rounded-full cursor-pointer transition duration-200 hover:bg-[#464646]">Console</div>
                    <div className="bg-[#606060] px-6 flex items-center rounded-full cursor-pointer transition duration-200 hover:bg-[#464646]">Dispositivos Portáteis</div>
                </div>
            </div>
            <div className="mt-10 mb-16 flex gap-10 ">
                <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img src={gta5} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img src={gtaOnline} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img src={red} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img src={redOnline} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            {showMore && (
                <div className="mb-16 flex gap-10 animate-in fade-in duration-500">
                    <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <img src={gta5} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <img src={gtaOnline} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <img src={red} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[260px] h-[315px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <img src={redOnline} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            )}
            <button onClick={() => setShowMore(!showMore)}>
                <Button font="500" w="260px" h="63px" text={showMore ? "Ver menos" : "Ver todos os jogos"}/>
            </button>
        </div>
    </>
  )
}

export default FeaturedGames