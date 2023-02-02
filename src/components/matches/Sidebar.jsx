import { useState } from "react"

export default function MatcheSidebar({ page, changeState }) {

    return(
        <div className="flex flex-col w-[18rem] px-4 py-5" style={{height: 'calc(100vh - 5rem)'}}>
            <div className="flex flex-col gap-1 text-lg">
                <span className={`cursor-pointer transition-colors rounded-lg px-3 py-2 ${page === 0 && 'bg-[#2C2C2B] transition-colors'} hover:bg-[#2C2C2B]`} onClick={() => changeState(0)}>Resumen</span>
                <span className={`cursor-pointer transition-colors rounded-lg px-3 py-2 ${page === 1 && 'bg-[#2C2C2B] transition-colors'} hover:bg-[#2C2C2B]`} onClick={() => changeState(1)}>Objetivos</span>
                <span className={`cursor-pointer transition-colors rounded-lg px-3 py-2 ${page === 2 && 'bg-[#2C2C2B] transition-colors'} hover:bg-[#2C2C2B]`} onClick={() => changeState(2)}>Visión</span>
                <span className={`cursor-pointer transition-colors rounded-lg px-3 py-2 ${page === 3 && 'bg-[#2C2C2B] transition-colors'} hover:bg-[#2C2C2B]`} onClick={() => changeState(3)}>Daños</span>
                <span className={`cursor-pointer transition-colors rounded-lg px-3 py-2 ${page === 4 && 'bg-[#2C2C2B] transition-colors'} hover:bg-[#2C2C2B]`} onClick={() => changeState(4)}>Estadisitca individual</span>
                <span className={`cursor-pointer transition-colors rounded-lg px-3 py-2 ${page === 5 && 'bg-[#2C2C2B] transition-colors'} hover:bg-[#2C2C2B]`} onClick={() => changeState(5)}>Pings</span>
            </div>
        </div>
    )
}