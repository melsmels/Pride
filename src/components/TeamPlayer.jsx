import Image from 'next/image'
import { useState } from 'react'

export default function TeamPlayer({player}) {

    const [ showLineImg, setShowLineImg ] = useState(false);

    function handleShowLineImg() {
        setShowLineImg(!showLineImg);
    }

    // console.log(player)
    
    return(
        <div onMouseEnter={handleShowLineImg} onMouseLeave={handleShowLineImg} className='flex justify-center bg-[#3D3D3D] rounded-md w-full py-10 hover:bg-[#454545] transition-colors cursor-pointer' style={{minHeight: 'calc(50vh - 2.5rem)'}}>
            <div className='flex flex-col items-center gap-4 relative'>
                <div className='border-[3px] border-main rounded-full'><Image className='rounded-full' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${player.profileIconId}.png`} width={70} height={70} /></div>
                <div className='font-semibold text-2xl'>{player.username}</div>
                { showLineImg && <div className='absolute top-1/2 -translate-y-1/2 opacity-10 from-opacity'><Image className='w-48 h-48 max-w-none' src={player.line_img} width={300} height={300} /></div> }
            </div>
        </div>
    )
}