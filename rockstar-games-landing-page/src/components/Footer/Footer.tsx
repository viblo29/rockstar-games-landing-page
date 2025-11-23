import { RockstarIcon, TwitterIcon, YoutubeIcon, TwitchIcon, FacebookIcon, InstagramIcon } from '../SocialIcons/SocialIcons';

function Footer() {
  return (
    <div className='w-full flex justify-center mt-16 xl:mt-[95px] bg-[#020202]'>

        <div className='w-full max-w-[1440px] min-h-[238px] py-10 xl:py-0 px-6 xl:px-[140px] flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-0'>
            
            <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-10 w-full xl:w-auto">
               <a href="">
                <RockstarIcon className="w-12 h-12 xl:w-[60px] xl:h-14 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
               </a>
                
                <div className="flex flex-col gap-4 xl:gap-2 items-center xl:items-start text-center xl:text-left">
                    <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
                        <div className="text-[#B1B1B1] text-sm xl:text-base font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">CONTATO</div>
                        <div className="text-[#B1B1B1] text-sm xl:text-base font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">SOBRE</div>
                        <div className="text-[#B1B1B1] text-sm xl:text-base font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">SUPORTE</div>
                        <div className="text-[#B1B1B1] text-sm xl:text-base font-medium uppercase cursor-pointer hover:text-amber-50 transition-colors duration-300">Empregos</div>
                    </div>
                    
                    <div className="font-light text-xs xl:text-[13px] text-[#B1B1B1] flex flex-col sm:block">
                        <span>©2023 Rockstar Games, Inc.</span>
                        <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="mt-1 sm:mt-0">YWR Studio.</span>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex gap-6 xl:gap-8">
                    <TwitterIcon className="w-5 h-5 xl:w-6 xl:h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <InstagramIcon className="w-5 h-5 xl:w-6 xl:h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <TwitchIcon className="w-5 h-5 xl:w-6 xl:h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <YoutubeIcon className="w-5 h-5 xl:w-6 xl:h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                    <FacebookIcon className="w-5 h-5 xl:w-6 xl:h-6 text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer