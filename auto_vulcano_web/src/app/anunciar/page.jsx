"use client";
import NavBar from "@/components/navbar";
import React, { useState } from 'react';
import Image from 'next/image'
import componente from '@/assets/componente.png'

export default function Anunciar() {

  const [anoModelo, setAnoModelo] = useState(null);
  const [anoFabricacao, setAnoFabricacao] = useState(null);

  const generateYearOptions = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const yearsModelo = generateYearOptions(1900, 2024); 
  const yearsFabricacao = generateYearOptions(1900, 2023);

  return (
    <>
      <NavBar />

      <div className="flex-col flex items-center justify-center">
      <Image src={componente} alt="Ford"/>
      <div className="p-8 rounded-lg shadow-lg w-96 bg-slate-200">
        <h1 className="text-2xl font-semibold text-center mb-4 text-gray-700 ">Vamos começar seu anúncio?</h1>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-700">Marca:</label>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 text-gray-700">
          <option value="ASTON MARTIN">Selecione a marca</option>
            <option value="ASTON MARTIN">ASTON MARTIN</option>
            <option value="AUDI">AUDI</option>
            <option value="BMW">BMW</option>
            <option value="BYD">BYD</option>
            <option value="CAOA CHERY">CAOA CHERY</option>
            <option value="CHEVROLET">CHEVROLET</option>
            <option value="CITROËN">CITROËN</option>
            <option value="FERRARI">FERRARI</option>
            <option value="FIAT">FIAT</option>
            <option value="FORD">FORD</option>
            <option value="GWM">GWM</option>
            <option value="HONDA">HONDA</option>
            <option value="HYUNDAI">HYUNDAI</option>
            <option value="JAC">JAC</option>
            <option value="JAGUAR">JAGUAR</option>
            <option value="JEEP">JEEP</option>
            <option value="KIA">KIA</option>
            <option value="LAMBORGHINI">LAMBORGHINI</option>
            <option value="LAND ROVER">LAND ROVER</option>
            <option value="LEXUS">LEXUS</option>
            <option value="MASERATI">MASERATI</option>
            <option value="MCLAREN">MCLAREN</option>
            <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
            <option value="MINI">MINI</option>
            <option value="MITSUBISHI">MITSUBISHI</option>
            <option value="NISSAN">NISSAN</option>
            <option value="PEUGEOT">PEUGEOT</option>
            <option value="PORSCHE">PORSCHE</option>
            <option value="RAM">RAM</option>
            <option value="RENAULT">RENAULT</option>
            <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
            <option value="SERES">SERES</option>
            <option value="SUBARU">SUBARU</option>
            <option value="SUZUKI">SUZUKI</option>
            <option value="TOYOTA">TOYOTA</option>
            <option value="TROLLER">TROLLER</option>
            <option value="VOLKSWAGEN">VOLKSWAGEN</option>
            <option value="VOLVO">VOLVO</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Modelo:</label>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500">
            {/* Opções do modelo */}
          </select>
        </div>

        <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ano do Modelo:</label>
          <select
            value={anoModelo}
            onChange={(e) => setAnoModelo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 text-gray-700"
          >
            <option value="">Ano do Modelo</option>
            {yearsModelo.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ano de Fabricação:</label>
          <select
            value={anoFabricacao}
            onChange={(e) => setAnoFabricacao(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 text-gray-700"
          >
            <option value="">Ano de Fabricação</option>
            {yearsFabricacao.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Versão:</label>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500">
            {/* Opções da versão */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cor:</label>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500">
            {/* Opções de cor */}
          </select>
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" id="blindado" className="mr-2" />
          <label htmlFor="blindado" className="text-gray-700 text-sm">Blindado</label>
        </div>


        <div className="bg-yellow-500 text-white p-4 rounded-lg mb-4">
          ATENÇÃO: Você não poderá alterar a marca, modelo e versão do veículo após criar o anúncio. Preencha corretamente! ;)
        </div>

        <div className="flex justify-between">
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100 focus:outline-none flex-1 mr-4">
            Voltar
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none flex-1">
            Publicar
          </button>
        </div>


      </div>
    </div>
    </>
  )
}
