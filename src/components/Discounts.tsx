"use client"

import Image from "next/image"
import Link from "next/link"
import { DiscountAccountCardData } from "@/types"
import arrowRightIcon from '@public/svg/arrow-right-black.svg'
import arrowLeftIcon from '@public/svg/arrow-left-black.svg' 
import { useDiscountsAccounts } from "@/lib/hooks"

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

export default function Discounts() {
    const {
        accounts,
        nextPage,
        previousPage,
        getNextPageAccounts,
        getPreviousPageAccounts
    } = useDiscountsAccounts()

    return (
        <section className='flex flex-col items-center gap-10 h-max py-24 w-full bg-[#f7f7f4]'>
            <div className='flex justify-between w-[85vw] font-bold'>
                <div className='flex flex-col gap-2 text-[#11154b]'>
                    <h1 className='text-5xl font-bold'>Códigos de descuento</h1>
                    <h3 className='font-medium'>¿Sos socio de Club LA NACION? Descargá tu código y disfrutá beneficios exclusivos en tus marcas favoritas</h3>
                </div>
                <button className='text-blue-500 border-blue-500 rounded-l-full rounded-r-full p-4 w-max h-max border-2 font-bold'>TODOS LOS CÓDIGOS</button>
            </div>
            {
                accounts.length
                ?
                <div className='flex w-[85vw] justify-between'>
                    <Image onClick={getPreviousPageAccounts} className={`${previousPage ? 'cursor-pointer' : 'opacity-30'} z-50`} src={arrowLeftIcon} alt='slide to the left button' width={25} height={25}/>
                    <div className='flex justify-around w-[78vw]'>
                        {accounts.map(a => <DiscountAccountCard key={a.name} cardData={a}/>)}
                    </div>
                    <Image onClick={getNextPageAccounts} className={`${nextPage ? 'cursor-pointer' : 'opacity-30'} z-50`} src={arrowRightIcon} alt='slide to the right button' width={25} height={25}/>
                </div>
                :
                <div className='h-[407px] w-full flex items-center justify-center'>
                    <h1 className='text-xl text-black'>Cargando productos...</h1>
                </div>
            }

        </section>
    )
}