import Link from "next/link";
import Boton from "./Boton";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between border-b border-zinc-800 h-20 px-20 text-zinc-300">
            <div className="flex items-center gap-10">
                <div>
                    <Logo href={'/'} wd={65} h={65}/>
                </div>
                {/* <div className="flex items-center gap-4">
                    <Link href={'#'}>Team</Link>
                    <Link href={'#'}>Team</Link>
                </div> */}
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <Boton href={'#'}>Buscar jugador</Boton>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-zinc-400 rounded-full text-2xl cursor-pointer">
                    <span>N</span>
                </div>
            </div>
        </div>
    )
}