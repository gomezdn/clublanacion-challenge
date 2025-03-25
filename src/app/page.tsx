import Promos from "@/components/Promos"
import Tourism from "@/components/Tourism"

export default function Home() {
  return (
    <div className='w-full'>
      <main className='flex flex-col'>
        <Promos />
        <Tourism />
      </main>       
    </div>
  )
}
