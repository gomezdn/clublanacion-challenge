"use client"

import Image from "next/image"
import Link from "next/link"
import { TourismAccountCardData, BenefitProgram } from "@/types"
import arrowRightIcon from '@public/svg/arrow-right-black.svg'
import arrowLeftIcon from '@public/svg/arrow-left-black.svg'
import locationIcon from '@public/svg/location-icon.svg'
import { formatDistance } from "@/lib/account"
import { useTourismAccounts } from "@/lib/hooks"

function TourismAccountCard({ cardData }: { cardData: TourismAccountCardData}) {
    const {
        name,
        image,
        url,
        highestDiscounts: { [BenefitProgram.classic]: classic, [BenefitProgram.premium]: premium, [BenefitProgram.black]: black },
        nearestBranchDistance
    } = cardData

    return (
        <div className='flex flex-col items-start h-[407px] w-[326px] rounded-xl border-[1px] bg-white md:m-0 mx-1'>
            <div className='h-[219px] w-[326px] relative'>
                <Link href={url} target='_blank'>
                    <Image src={image} fill className='rounded-t-xl object-cover' alt='account image'/>
                </Link>
            </div>
            <div className='flex flex-col gap-3 items-start justify-end h-[188px] p-6 w-[326px]'>
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
    const {
        accounts,
        nextPage,
        previousPage,
        getNextPageAccounts,
        getPreviousPageAccounts
    } = useTourismAccounts()

    return (
        <>
            <div className='flex gap-4 w-[85vw] md:justify-between'>
                <Image onClick={getPreviousPageAccounts} className={`${previousPage ? 'cursor-pointer' : 'opacity-30'} z-50`} src={arrowLeftIcon} alt='slide to the left button' width={25} height={25}/>
                {
                    accounts.length
                    ?
                    <div className='flex overflow-x-scroll justify-around w-[78vw]'>
                        {accounts.map(a => <TourismAccountCard cardData={a} key={a.name}/>)}
                    </div>
                    :
                    <div className='h-[407px] w-full flex items-center justify-center'>
                        <h1 className='text-xl text-black'>Obteniendo productos...</h1>
                    </div>
                }
                <Image onClick={getNextPageAccounts} className={`${nextPage ? 'cursor-pointer' : 'opacity-30'} z-50`} src={arrowRightIcon} alt='slide to the right button' width={25} height={25}/>
            </div>
        </>
    )
}