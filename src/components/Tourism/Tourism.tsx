import TourismSlider from "./TourismSlider"

export default function Tourism() {
    return (
        <section className='flex flex-col items-center gap-10 h-max py-24 w-full bg-white'>
            <div className='flex justify-between w-[85vw] font-bold'>
                <h1 className='text-5xl text-[#11154b]'>Turismo en Buenos Aires</h1>
                <button className='text-blue-500 border-blue-500 md:rounded-l-full md:rounded-r-full rounded-md px-6 py-4 w-max h-max border-2 text-center font-bold'>TODOS LOS BENEFICIOS</button>
            </div>
            <TourismSlider />
        </section>
    )
}