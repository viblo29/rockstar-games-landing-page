import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion' // 1. Import AnimatePresence
import dropDown from '../../../public/arrow_drop_down.svg'
import userIcon from '../../../public/user-icon.svg'
import searchIcon from '../../../public/search-icon.svg'
import Button from '../Button/Button'
import { LogoIcon } from '../SocialIcons/SocialIcons'

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button 
      className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-70 relative xl:hidden" 
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className={`block h-0.5 w-8 bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}></span>
      
      <span className={`block h-0.5 w-8 bg-white rounded-full transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}></span>
      
      <span className={`block h-0.5 w-8 bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}></span>
    </button>
  );
};

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const location = useLocation();

  const games = [
    'Grand Theft Auto V',
    'Red Dead Redemption 2',
    'Grand Theft Auto Online',
    'Max Payne 3',
    'LA Noire'
  ]

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  const getLinkClass = (path: string) => {
    return location.pathname === path 
      ? "text-[#FCAF17] font-medium cursor-pointer transition-colors duration-300"
      : "text-white hover:text-[#FCAF17] font-medium cursor-pointer transition-colors duration-300";
  }

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className='w-full flex justify-center sticky top-0 z-50 bg-[#020202]'
    >
        <div className="h-20 xl:h-28 w-full max-w-[1440px] px-6 xl:px-[140px] flex justify-between items-center relative">
            
            <div className='flex gap-0 xl:gap-[47px] items-center'>
                <Link to="/">
                    <LogoIcon className="w-10 h-10 xl:w-[53px] xl:h-[54px] text-white hover:text-[#FCAF17] transition-colors duration-300 cursor-pointer" />
                </Link> 
                
                <div className='hidden xl:flex items-center gap-6'>
                    <div className='relative'>
                        <div 
                            className='flex gap-1.5 font-medium cursor-pointer text-white hover:text-[#FCAF17] transition-colors duration-300 items-center'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Jogos <img src={dropDown} alt="" className={`transition-transform duration-300 ${isDropdownOpen && 'rotate-180'}`} />
                        </div>
                        
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className='absolute top-10 left-0 bg-[#1a1a1a] border border-[#333] rounded shadow-lg min-w-[200px] z-10'
                                >
                                    {games.map((game, index) => (
                                        <div 
                                            key={index}
                                            className='px-4 py-3 text-sm text-[#B1B1B1] hover:text-[#FCAF17] hover:bg-[#252525] cursor-pointer transition-colors duration-200 first:rounded-t last:rounded-b'
                                        >
                                            {game}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    <Link to="/loja" className={getLinkClass('/loja')}>
                        Loja
                    </Link>
                    <Link to="/ajuda" className={getLinkClass('/ajuda')}>
                        Ajuda
                    </Link>
                </div>
            </div>

            <div className='hidden xl:flex items-center gap-10'>
                <Button font="500" w="193px" h="52px" text="Baixe o Launcher"/>
                <div className='flex gap-6'>
                    <div className='w-[49px] h-[49px] rounded-full bg-[#5A5A5A] cursor-pointer duration-200 hover:bg-[#464646] flex justify-center items-center '>
                        <img src={searchIcon} alt="Search" />
                    </div>
                    <div className='w-[49px] h-[49px] rounded-full bg-[#5A5A5A] cursor-pointer duration-200 hover:bg-[#464646] flex justify-center items-center'>
                        <img src={userIcon} alt="User" />
                    </div>
                </div>
            </div>

            <HamburgerButton 
                isOpen={isMobileMenuOpen} 
                onClick={toggleMenu} 
            />
        </div>

        {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-[#020202] z-60 flex flex-col p-6 animate-in slide-in-from-right duration-300 xl:hidden">
                <div className="flex justify-between items-center mb-10">
                    <LogoIcon className="w-10 h-10 text-white" />
                </div>

                <div className="flex flex-col gap-6 text-xl font-medium">
                    
                    <div>
                        <div 
                            className='flex justify-between items-center cursor-pointer text-white hover:text-[#FCAF17]'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Jogos <img src={dropDown} alt="" className={`transition-transform duration-300 ${isDropdownOpen && 'rotate-180'}`} />
                        </div>
                        
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-4 mt-4 pl-4 border-l border-[#333]">
                                        {games.map((game, index) => (
                                            <div key={index} className="text-[#B1B1B1] text-base">
                                                {game}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link 
                        to="/loja" 
                        className={getLinkClass('/loja')}
                        onClick={handleMobileLinkClick}
                    >
                        Loja
                    </Link>
                    <Link 
                        to="/ajuda" 
                        className={getLinkClass('/ajuda')}
                        onClick={handleMobileLinkClick}
                    >
                        Ajuda
                    </Link>
                </div>

                <div className="mt-auto flex flex-col gap-6">
                    <div className="flex justify-center gap-6">
                         <div className='w-12 h-12 rounded-full bg-[#5A5A5A] flex justify-center items-center'>
                            <img src={searchIcon} alt="" />
                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#5A5A5A] flex justify-center items-center'>
                            <img src={userIcon} alt="" />
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <Button font="500" w="100%" h="52px" text="Baixe o Launcher"/>
                    </div>
                </div>
            </div>
        )}
    </motion.div>
  )
}

export default Header