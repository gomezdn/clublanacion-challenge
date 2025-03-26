"use client"

import Link from "next/link"
import Image from "next/image"
import arrowRightIcon from '@public/svg/arrow-right-black.svg'
import arrowLeftIcon from '@public/svg/arrow-left-black.svg' 
import { useDiscountsAccounts, useScroll } from "@/lib/hooks"
import { DiscountAccountCardData } from "@/types"
import { useRef } from "react"

function DiscountAccountCard({ cardData }: { cardData: DiscountAccountCardData }) {
    const {
        name,
        image,
        url
    } = cardData

    return (
        <div className='flex flex-col items-start h-[407px] w-[326px] rounded-xl text-white snap-start'>
            <div className='h-[300px] w-[326px] relative'>
                <Link href={url} target='_blank'>
                    <Image src={image} fill className='rounded-t-xl object-cover' alt='account image'/>
                </Link>
            </div>
            <div className='flex flex-col gap-3 items-start justify-end h-[188px] rounded-b-xl p-6 bg-[#0070ff] w-full'>
                <p className="text-xl">{name}</p>
                <Link href={url} target='_blank' className='border-2 px-4 py-2 rounded-lg'>QUIERO MI CÓDIGO</Link>
            </div>
        </div>
    )
}

export default function DiscountsSlider() {
    const sliderRef = useRef<HTMLDivElement | null>(null)
    
    const {
        accounts,
        nextPage,
        previousPage,
        getNextPageAccounts,
        getPreviousPageAccounts
    } = useDiscountsAccounts()

    const {
        scrollRight,
        scrollLeft
    } = useScroll({ width: 326, ref: sliderRef, requestNext: getNextPageAccounts, requestPrevious: getPreviousPageAccounts })

    return (
        <div className='flex gap-4 w-[94vw] md:w-[85vw] justify-between'>
            <Image onClick={scrollLeft} className={`${previousPage ? 'cursor-pointer' : 'md:opacity-30'} cursor-pointer z-50`} src={arrowLeftIcon} alt='slide to the left button' width={25} height={25}/>
            {
                accounts.length
                ?
                <div ref={sliderRef} className='flex overflow-x-auto scroll-smooth snap-mandatory snap-x justify-around w-[78vw]'>
                    {accounts.map(a => <DiscountAccountCard key={a.name} cardData={a}/>)}
                </div>
                :
                <div className='h-[407px] w-full flex items-center justify-center'>
                    <h1 className='text-xl text-black'>Cargando productos...</h1>
                </div>
            }
            <Image onClick={scrollRight} className={`${nextPage ? '' : 'md:opacity-30'} cursor-pointer z-50`} src={arrowRightIcon} alt='slide to the right button' width={25} height={25}/>
        </div>
    )
}