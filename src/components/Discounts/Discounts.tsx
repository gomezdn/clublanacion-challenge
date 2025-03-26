import DiscountsSlider from './DiscountsSlider'

export default function Discounts() {
    return (
        <section className='flex flex-col items-center gap-10 h-max py-24 w-full bg-[#f7f7f4]'>
            <div className='flex justify-between w-[85vw] font-bold'>
                <div className='flex flex-col gap-2 text-[#11154b]'>
                    <h1 className='text-5xl font-bold'>Códigos de descuento</h1>
                    <h3 className='font-medium'>¿Sos socio de Club LA NACION? Descargá tu código y disfrutá beneficios exclusivos en tus marcas favoritas</h3>
                </div>
                <button className='text-blue-500 border-blue-500 md:rounded-l-full md:rounded-r-full rounded-md p-4 w-max h-max border-2 font-bold'>TODOS LOS CÓDIGOS</button>
            </div>
            <DiscountsSlider />
        </section>
    )
}