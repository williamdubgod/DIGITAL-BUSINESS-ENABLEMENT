import NavBar from "@/components/navbar";
import Image from 'next/image';
import Car from "@/assets/corolla-cross(1).png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Div Laranja */}
      <div className="bg-orange-400 flex items-center justify-center p-10 mt-10 rounded-xl mx-auto" style={{ maxWidth: '1000px' }}>
        <div className="flex flex-col text-white text-center w-1/2 pr-10">
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

      {/* Campo de Busca Abaixo da Div Laranja */}
      <div className="bg-black p-6 mt-6 rounded-xl mx-auto" style={{ maxWidth: '1000px' }}>
        <p className="text-white text-lg mb-2">Procure o modelo ideal:</p>
        <div className="relative mt-2 mb-8">
          <input
            type="text"
            placeholder="Escolha seu modelo favorito"
            className="w-full h-16 bg-gray-800 text-white rounded-xl pl-6 pr-20 focus:outline-none"
          />
          <button className="absolute top-0 right-0 h-full w-40 bg-orange-400 text-white font-bold rounded-tr-xl rounded-br-xl hover:bg-yellow-500">Buscar</button>
        </div>
      </div>

    </>
  )
}
