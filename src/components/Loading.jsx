import Image from "next/image";

export default function Loading({x, y}) {
    return(
        <div className="flex flex-col gap-3 items-center justify-center text-lg">
            <Image src={'/loading.gif'} width={x} height={y} alt="Loading Gif" />
        </div>
    )
}