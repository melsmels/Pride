import Link from "next/link"
import Image from "next/image"

export default function Logo({wd, h}){
    return(
        <>
            <Link href={"/team"}><Image src={"/img/pride.webp"} width={wd} height={h} alt="Pride Logo"></Image></Link>
        </>
    )
}
