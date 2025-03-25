import Image from "next/image"
import Link from "next/link"
import { TourismAccountCardData, BenefitProgram } from "@/types"
import arrowRightIcon from '@public/svg/arrow-right-black.svg'
import arrowLeftIcon from '@public/svg/arrow-left-black.svg'
import locationIcon from '@public/svg/location-icon.svg'
import { formatDistance } from "@/lib/utils"

function TourismAccountCard({ cardData }: { cardData: TourismAccountCardData}) {
    const {
        name,
        image,
        url,
        highestDiscounts: { [BenefitProgram.classic]: classic, [BenefitProgram.premium]: premium, [BenefitProgram.black]: black },
        nearestBranchDistance
    } = cardData

    return (
        <div className='flex flex-col items-start h-[407px] w-[326px] rounded-xl border-[1px]'>
            <div className='h-[219px] w-[326px] border-b-[1px] relative'>
                <Link href={url} target='_blank'>
                    <Image src={image} fill style={{ objectFit: "cover" }} alt='account image'/>
                </Link>
            </div>
            <div className='flex flex-col gap-3 items-start justify-end h-[188px] p-6 bg-white'>
                <Link href={url} target='_blank'>
                    <p className="text-3xl text-black">{name}</p>
                </Link>
                <div className='flex gap-3 font-bold text-3xl'>
                    <span className='text-blue-950'>{classic}%</span>
                    <span className='text-blue-800'>{premium}%</span>
                    <span className='text-blue-500'>{black}%</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <Image src={locationIcon} alt='location icon' width={25} height={25}/>
                    <span className='text-[#747474] text-sm'>A <strong>{formatDistance(nearestBranchDistance)}</strong></span>
                </div>
            </div>
        </div>
    )
}

export default function Tourism() {
    const accounts: TourismAccountCardData[] = []

    return (
        <section className='flex flex-col items-center gap-10 h-max py-24 w-full bg-white'>
            <div className='flex justify-between w-[85vw] font-bold'>
                <h1 className='text-5xl text-black'>Turismo en Buenos Aires</h1>
                <button className='text-blue-500 border-blue-500 rounded-l-full rounded-r-full px-6 py-4 w-max h-max border-[1px] text-center text-lg font-bold'>TODOS LOS BENEFICIOS</button>
            </div>
            <div className='flex w-[85vw] justify-between'>
                <Image className='cursor-pointer z-50' src={arrowLeftIcon} alt='slide to the left button' width={25} height={25}/>
                <div className='flex justify-around w-[78vw]'>
                    {accounts.map(a => <TourismAccountCard cardData={a} key={a.name}/>)}
                </div>
                <Image className='cursor-pointer z-50' src={arrowRightIcon} alt='slide to the right button' width={25} height={25}/>
            </div>
        </section>
    )
}