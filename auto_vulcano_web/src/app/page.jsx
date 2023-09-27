import NavBar from "@/components/navbar";
import Image from 'next/image'
import Car from "@/assets/corolla-cross(1).png"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="bg-orange-400 flex items-center justify-center p-10 mt-10 rounded-xl mx-auto" style={{ maxWidth: '1000px' }}>
        <div className="flex flex-col text-white text-center">
          <h1 className="text-3xl font-semibold mb-4">
            O carro perfeito para você!
          </h1>
          <p className="text-xl mb-2">Toyota Corolla Cross XRE Direct Shift</p>
          <p className="text-xl mb-2">Ano: 2023</p>
          <p className="text-xl mb-2">Quilometragem: 0km</p>
          <p className="text-xl mb-2">Blindagem: Nível 3A</p>
          <p className="text-xl">Garantia: 10 anos</p>
        </div>
        <div className="w-1/2">
          <Image
            src={Car}
            alt="Carro"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  )
}
