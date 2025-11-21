import { useState } from 'react'
import dropDown from '../../../public/arrow_drop_down.svg'
import userIcon from '../../../public/user-icon.svg'
import searchIcon from '../../../public/search-icon.svg'
import Button from '../Button/Button'
import { LogoIcon } from '../SocialIcons/SocialIcons'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const games = [
    'Grand Theft Auto V',
    'Red Dead Redemption 2',
    'Grand Theft Auto Online',
    'Max Payne 3',
    'LA Noire'
  ]

  return (
    <div className='w-full flex justify-center'>
        <div className="h-28 bg-[#020202] px-[140px] w-[1440px] flex justify-between  items-center">
            <div className='flex gap-[47px]'>
                <a href="">
                    <LogoIcon className="w-[53px] h-[54px] text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                </a> 
                <div className='flex items-center gap-6'>
                    <div className='relative'>
                        <div 
                            className='flex gap-1.5 font-medium cursor-pointer hover:text-[#FCAF17] transition-colors duration-300'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Jogos <img src={dropDown} alt="" className={`transition-transform duration-300 ${isDropdownOpen && 'rotate-180'}`} />
                        </div>
                        {isDropdownOpen && (
                            <div className='absolute top-10 left-0 bg-[#1a1a1a] border border-[#333] rounded shadow-lg min-w-[200px] z-10'>
                                {games.map((game, index) => (
                                    <div 
                                        key={index}
                                        className='px-4 py-3 text-sm text-[#B1B1B1] hover:text-[#FCAF17] hover:bg-[#252525] cursor-pointer transition-colors duration-200 first:rounded-t last:rounded-b'
                                    >
                                        {game}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='cursor-pointer hover:text-[#FCAF17] transition-colors duration-300'>Loja</div>
                    <div className='cursor-pointer hover:text-[#FCAF17] transition-colors duration-300'>Ajuda</div>
                </div>
            </div>
            <div className='flex items-center gap-10'>
                <Button font="500" w="193px" h="52px" text="Baixe o Launcher"/>
                <div className='flex gap-6'>
                    <div className='w-[49px] h-[49px] rounded-full bg-[#5A5A5A] cursor-pointer duration-200 hover:bg-[#464646] flex justify-center items-center '>
                        <img src={searchIcon} alt="" />
                    </div>
                    <div className='w-[49px] h-[49px] rounded-full bg-[#5A5A5A] cursor-pointer duration-200 hover:bg-[#464646] flex justify-center items-center'>
                        <img src={userIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header