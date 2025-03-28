import Promos from "@/components/Promos"
import Tourism from "@/components/Tourism/Tourism"
import Discounts from "@/components/Discounts/Discounts"

export default function Home() {
  return (
    <div className='w-full'>
      <main className='flex flex-col'>
        <Promos />
        <Tourism />
        <Discounts />
      </main>       
    </div>
  )
}
