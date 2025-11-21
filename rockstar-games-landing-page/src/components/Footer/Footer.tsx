import { RockstarIcon, TwitterIcon, YoutubeIcon, TwitchIcon, FacebookIcon, InstagramIcon } from '../SocialIcons/SocialIcons';

function Footer() {
  return (
    <div className='w-full flex justify-center pt-[95px]'>
        <div className='w-[1440px] h-[238px] bg-[#020202] px-[140px] flex items-center justify-between'>
            <div className="flex items-center gap-10">
               <a href="">
                <RockstarIcon className="w-[60px] h-14 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
               </a>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-6">
                        <div className="text-[#B1B1B1] font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">CONTATO</div>
                        <div className="text-[#B1B1B1] font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">SOBRE</div>
                        <div className="text-[#B1B1B1] font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">SUPORTE</div>
                        <div className="text-[#B1B1B1] font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">Empregos</div>
                    </div>
                    <div className="font-light text-[13px] text-[#B1B1B1]">©2023 Rockstar Games, Inc.&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;YWR Studio.</div>
                </div>
            </div>
            <div>
                <div className="flex gap-8">
                    <TwitterIcon className="w-6 h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <InstagramIcon className="w-6 h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <TwitchIcon className="w-6 h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <YoutubeIcon className="w-6 h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <FacebookIcon className="w-6 h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer