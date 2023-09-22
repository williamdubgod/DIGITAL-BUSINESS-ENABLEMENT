import Button from "@/components/button";
import NavBar from "@/components/navbar";
import { PlusIcon } from '@heroicons/react/24/solid'

export default function Anunciar() {
  return (
    <>
      <NavBar />

      <main className="container bg-slate-900 mt-10 mx-auto rounded p-4 max-w-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Vamos começar seu anúncio?</h2>
          <Button href="/criaranuncio" icon={<PlusIcon className="h-6 w-6" />}>
            Criar anúncio
          </Button>
        </div>
      </main>
    </>
  )
}
