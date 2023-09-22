import Link from "next/link";

export default function NavBar() {
    return(
        <nav className=" flex items-center justify-between bg-black p-6">
          <h1 className="text-2xl text-slate-100">Auto Vulcano</h1>
          <div className="w-2/3 rounded-lg overflow-hidden">
            <ul className="flex items-center justify-center gap-14 p-3 text-slate-100 bg-zinc-900">
              <li>
                <Link href="/" className="text-yellow-500">Home</Link>
              </li>
              <li>
                <Link href="/estoque">Estoque</Link>
              </li>
              <li>
                <Link href="/anunciar">Anunciar</Link>
              </li>
            </ul>
          </div>

        {/* <div className="h-10 w-10 rounded-full overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/99343816?v=4" alt="avatar" />
        </div> */}
        <span>Sign in</span>
      </nav>
    )
}