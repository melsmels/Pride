import Link from "next/link";

export default function Boton({href, children}){
    return(
        href ? (
            <Link href={href}>
                <div className={`flex justify-center uppercase py-2 px-5 border border-main hover:bg-main cursor-pointer rounded text-main hover:text-white font-bold transition-colors`}>
                    <span>{children}</span>
                </div>
            </Link>
        ) : (
            <div className={`flex justify-center uppercase py-2 px-5 border border-main hover:bg-main cursor-pointer rounded text-main hover:text-white font-bold transition-colors`}>
                <span>{children}</span>
            </div>
        )
    )
}