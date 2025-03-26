"use client"

import Link from "next/link"
import Image from "next/image"
import arrowRightIcon from '@public/svg/arrow-right-black.svg'
import arrowLeftIcon from '@public/svg/arrow-left-black.svg' 
import { useDiscountsAccounts } from "@/lib/hooks"
import { DiscountAccountCardData } from "@/types"

function DiscountAccountCard({ cardData }: { cardData: DiscountAccountCardData }) {
    const {
        name,
        image,
        url
    } = cardData

    return (
        <div className='flex flex-col items-start h-[407px] w-[326px] rounded-xl text-white md:m-0 mx-1'>
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
    const {
        accounts,
        nextPage,
        previousPage,
        getNextPageAccounts,
        getPreviousPageAccounts
    } = useDiscountsAccounts()

    return (
        <>
            <div className='flex w-[85vw] justify-between'>
                <Image onClick={getPreviousPageAccounts} className={`${previousPage ? 'cursor-pointer' : 'opacity-30'} z-50`} src={arrowLeftIcon} alt='slide to the left button' width={25} height={25}/>
                {
                    accounts.length
                    ?
                    <div className='flex overflow-x-scroll justify-around w-[78vw]'>
                        {accounts.map(a => <DiscountAccountCard key={a.name} cardData={a}/>)}
                    </div>
                    :
                    <div className='h-[407px] w-full flex items-center justify-center'>
                        <h1 className='text-xl text-black'>Cargando productos...</h1>
                    </div>
                }
                <Image onClick={getNextPageAccounts} className={`${nextPage ? 'cursor-pointer' : 'opacity-30'} z-50`} src={arrowRightIcon} alt='slide to the right button' width={25} height={25}/>
            </div>
    </>
    )
}