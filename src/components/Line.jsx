import Link from "next/link"
import Image from "next/image"

export default function Line({url, img, wd, h}){
    return(
        <>
            <Link className="hover:bg-[#FBA000]" href={url}><Image src={img} width={wd} height={h}></Image></Link>
        </>
    )
}

