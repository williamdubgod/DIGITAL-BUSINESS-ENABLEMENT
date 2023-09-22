import NavBar from "@/components/navbar";
import Car from "../assets/ford.png"

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="container bg-zinc-900 mt-10 mx-auto rounded p-4">
        <div>
          <img src={Car} alt="ford"/>
        </div>
      </main>
    </>
  )
}
 

