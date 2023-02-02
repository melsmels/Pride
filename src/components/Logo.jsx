import Link from "next/link"
import Image from "next/image"

export default function Logo({href, wd, h}){
    return(
        <>
            <Link href={href}><Image src={"/img/pride.webp"} width={wd} height={h} alt="Pride Logo"></Image></Link>
        </>
    )
}
