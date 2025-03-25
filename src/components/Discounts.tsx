"use client"

import Image from "next/image"
import Link from "next/link"
import { DiscountAccountCardData } from "@/types"
import arrowRightIcon from '@public/svg/arrow-right-black.svg'
import arrowLeftIcon from '@public/svg/arrow-left-black.svg' 
import { useEffect, useState } from "react"
import { getDiscountsAccountCardsData } from "@/lib/services"

function DiscountAccountCard({ cardData }: { cardData: DiscountAccountCardData }) {
    const {
        name,
        image,
        url
    } = cardData

    return (
        <div className='flex flex-col items-start h-[407px] w-[326px] rounded-xl border text-white'>
            <div className='h-[219px] w-[326px] border-b-[1px] relative'>
                <Link href={url} target='_blank'>
                    <Image src={image} fill style={{ objectFit: "cover" }} alt='account image'/>
                </Link>
            </div>
            <div className='flex flex-col gap-3 items-start justify-end h-[188px] rounded-b-xl p-6 bg-[#0070ff] w-full'>
                <p className="text-2xl">{name}</p>
                <Link href={url} target='_blank' className='text-xl border-2 px-4 py-2 rounded-lg'>QUIERO MI CÓDIGO</Link>
            </div>
        </div>
    )
}

export default function Discounts() {
    const [accounts, setAccounts] = useState<DiscountAccountCardData[]>([])

    useEffect(() => {
        (async () => {
            const tourismAccounts = await getDiscountsAccountCardsData()
            setAccounts(tourismAccounts)
        })()
    }, [])

    return (
        <section className='flex flex-col items-center gap-10 h-max py-24 w-full bg-[#f7f7f4]'>
            <div className='flex justify-between w-[85vw] font-bold'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-5xl text-black font-bold '>Códigos de descuento</h1>
                    <h3 className='text-black font-semibold'>¿Sos socio de Club LA NACION? Descargá tu código y disfrutá beneficios exclusivos en tus marcas favoritas</h3>
                </div>
                <button className='text-blue-500 border-blue-500 rounded-l-full rounded-r-full p-4 w-max h-max border-[1px] font-bold'>TODOS LOS CÓDIGOS</button>
            </div>
            <div className='flex w-[85vw] justify-between'>
                <Image className='cursor-pointer z-50' src={arrowLeftIcon} alt='slide to the left button' width={25} height={25}/>
                <div className='flex justify-around w-[78vw]'>
                    {accounts.map(a => <DiscountAccountCard key={a.name} cardData={a}/>)}
                </div>
                <Image className='cursor-pointer z-50' src={arrowRightIcon} alt='slide to the right button' width={25} height={25}/>
            </div>
        </section>
    )
}