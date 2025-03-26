"use client"

import Image from "next/image"
import Link from "next/link"
import { TourismAccountCardData, BenefitProgram } from "@/types"
import arrowRightIcon from '@public/svg/arrow-right-black.svg'
import arrowLeftIcon from '@public/svg/arrow-left-black.svg'
import locationIcon from '@public/svg/location-icon.svg'
import { formatDistance } from "@/lib/account"
import { useScroll, useTourismAccounts } from "@/lib/hooks"
import { useRef } from "react"

function TourismAccountCard({ cardData }: { cardData: TourismAccountCardData}) {
    const {
        name,
        image,
        url,
        highestDiscounts: { [BenefitProgram.classic]: classic, [BenefitProgram.premium]: premium, [BenefitProgram.black]: black },
        nearestBranchDistance
    } = cardData

    return (
        <div className='flex flex-col items-start h-[407px] w-[325px] rounded-xl border bg-white snap-start relative'>
            <div className='h-[219px] w-[324px] relative'>
                <Link href={url} target='_blank'>
                    <Image src={image} fill className='rounded-t-xl object-cover' alt='account image'/>
                </Link>
            </div>
            <div className='flex flex-col gap-3 items-start justify-end h-[188px] p-6 w-[324px]'>
                <Link href={url} target='_blank'>
                    <p className="text-xl text-black">{name}</p>
                </Link>
                <div className='flex gap-3 font-bold text-xl'>
                    {classic ? <span className='text-blue-950'>{classic}% <span className='text-[#747474] opacity-15 font-thin'>|</span></span> : ''}
                    {premium ? <span className='text-blue-800'>{premium}% <span className='text-[#747474] opacity-15 font-thin'>|</span></span> : ''}
                    {black ? <span className='text-blue-500'>{black}%</span> : ''}
                </div>
                <div className='flex gap-2 items-center'>
                    <Image src={locationIcon} alt='location icon' width={25} height={25}/>
                    <span className='text-[#747474] text-sm'>A <strong>{formatDistance(nearestBranchDistance)}</strong></span>
                </div>
            </div>
        </div>
    )
}

export default function TourismSlider() {
    const sliderRef = useRef<HTMLDivElement | null>(null)
    
    const {
        accounts,
        nextPage,
        previousPage,
        getNextPageAccounts,
        getPreviousPageAccounts
    } = useTourismAccounts()

    const {
        scrollRight,
        scrollLeft
    } = useScroll({ width: 326, ref: sliderRef, requestNext: getNextPageAccounts, requestPrevious: getPreviousPageAccounts })

    return (
        <div className='flex gap-4 w-[94vw] md:w-[85vw] md:justify-between'>
            <Image onClick={scrollLeft} className={`${previousPage ? '' : 'md:opacity-30'} z-50 cursor-pointer`} src={arrowLeftIcon} alt='slide to the left button' width={25} height={25}/>
            {
                accounts.length
                ?
                <div ref={sliderRef} className='flex overflow-x-auto scroll-smooth snap-mandatory snap-x justify-around w-[78vw]'>
                    {accounts.map(a => <TourismAccountCard cardData={a} key={a.name}/>)}
                </div>
                :
                <div className='h-[407px] w-full flex items-center justify-center'>
                    <h1 className='text-xl text-black'>Obteniendo productos...</h1>
                </div>
            }
            <Image onClick={scrollRight} className={`${nextPage ? '' : 'md:opacity-30'} z-50 cursor-pointer`} src={arrowRightIcon} alt='slide to the right button' width={25} height={25}/>
        </div>
    )
}