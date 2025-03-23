'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import arrowRightIcon from '@public/svg/arrow-right-white.svg'
import arrowLeftIcon from '@public/svg/arrow-left-white.svg'
import dotSolidIcon from '@public/svg/dot-solid.svg'
import dotHollowIcon from '@public/svg/dot-hollow.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { getPromos } from '@/lib/services'

export default function PromosSlider() {
    const [promos, setPromos] = useState<StaticImport[]>([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        getPromos().then(res => setPromos(res))
    }, [])

    function swipeRight() {
        setActiveIndex(index => (index + 1) % promos.length)
    }

    function swipeLeft() {
        setActiveIndex(index => (index - 1 + promos.length) % promos.length)
    }

    return (
        promos.length &&
        <div className="flex flex-col justify-around w-full min-h-screen px-32 relative">
            <Image src={promos[activeIndex]} fill alt='promo image' className='z-0 absolute top-0'/>
            <div className='flex justify-between mt-auto'>
                <Image onClick={swipeLeft} className='cursor-pointer z-50' src={arrowLeftIcon} alt='slide to the left button' width={35} height={35}/>
                <Image onClick={swipeRight} className='cursor-pointer z-50' src={arrowRightIcon} alt='slide to the right button' width={35} height={35}/>
            </div>
            <div className="flex gap-2 self-center mt-auto pb-14">
                {Array.from({ length: promos.length }, (_, i) => (
                    <Image onClick={() => setActiveIndex(i)} className="z-50 size-7 cursor-pointer" width={20} height={20} src={i === activeIndex ? dotSolidIcon : dotHollowIcon} key={i} alt="displayed promo dot indicator" />
                ))}
            </div>
        </div>
    )
}