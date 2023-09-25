import NavBar from "@/components/navbar";
import Image from 'next/image'
import Car from "@/assets/ford.png"

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="container mt-10 flex">
        <div className="w-1/2">
          <Image src={Car} width={500} height={500} alt="Ford"/>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h1 style={{
            fontSize: '65px',
            color: '#F2B705'
          }}>ANUNCIE JÁ</h1>
          <p className="text-[20px] md:text-base lg:text-base xl:text-base">Comprar e vender nunca foi tão fácil!</p>
          <p className="text-[20px] md:text-base lg:text-base xl:text-base">Anuncie Online</p>
          <div className="mt-4">
            <button className="bg-black text-white py-2 px-4 rounded-lg" style={{ padding: '16px 35px' }}>Publicar anúncio</button>
          </div>
        </div>
      </main>











    </>
  )
}
 

