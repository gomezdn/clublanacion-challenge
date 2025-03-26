"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@public/svg/lanacion-logo.svg'
import hamburgerIcon from '@public/svg/hamburger-menu-icon.svg'
import magnifyingIcon from '@public/svg/magnifying-glass-icon.svg'
import favouritesIcon from '@public/svg/favourites-icon.svg'
import notificationsIcon from '@public/svg/notifications-icon.svg'
import smileIcon from '@public/svg/smile-icon.svg'

export default function Header() {
    const [pageScrolled, setPageScrolled] = useState(false)

    function checkScroll() {
        setPageScrolled(window.scrollY !== 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", checkScroll)
        setPageScrolled(window.scrollY !== 0)
    
        return () => window.removeEventListener("scroll", checkScroll);
      }, [pageScrolled]);

    return (
        <header className={`${pageScrolled ? "bg-opacity-[0.8] bg-black" : "bg-white bg-opacity-[0.1]"} transition-all ease-in-out duration-500 flex justify-between items-center w-full px-10 fixed z-50`}>
            <div className="flex items-center">
                <button>
                    <Image alt='menu icon' src={hamburgerIcon} height={30} width={32}/>
                </button>
                <button>
                    <Image alt='logo de La Nacion' src={logo} height={100} width={100}/>
                </button>
            </div>

            <div className='flex gap-3 items-center w-max'>
                <form className='flex gap-3 w-100'>
                    <div>
                        <input className='w-[350px] p-3 pl-6 bg-white bg-opacity-0 rounded-l-full border-y-[1px] border-l-[1px] outline-none' name='shop' placeholder='Busca un comercio...'/>
                        <input className='w-[350px] p-3 pl-6 bg-white bg-opacity-0 rounded-r-full border-y-[1px] border-[1px] outline-none' name='location' placeholder='Ingresa una ubicación...'/>
                    </div>
                    <button className='bg-blue-600 rounded-full p-4' type='submit'>
                        <Image alt='submit search button' src={magnifyingIcon} height={17} width={17}/>
                    </button>
                </form>
            </div>

            <div className='flex gap-4 items-center'>
                <button>
                    <Image alt='notifications button' src={notificationsIcon} height={28} width={28}/>
                </button>
                <button>
                    <Image alt='favourites button' src={favouritesIcon} height={28} width={28}/>
                </button>
                <button>
                    <Image alt='smile icon' src={smileIcon} height={28} width={28}/>
                </button>
            </div>
        </header>
    )
}