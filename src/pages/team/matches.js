import axios from "axios";
// React
import { useEffect, useState } from "react";
// Components
import Logo from "@/components/Logo"
import Boton from "@/components/Boton";
// Team PUUIDS
import teamPUUID from '../../../json/teamPuuid'
// Mock
import games from '../../../json/games.json';
import Collapsible from "@/components/Collapsible/Collapsible";

export default function MatchesPage() {

    async function fetchMatches(puuid) {
        const { data } = await axios.post('/api/playerMatches', { puuid });
        const matches = data.filter(match => {
            if(match?.info?.queueId && match.info.queueId == '440') {
                return true;
            } else {
                return false;
            }
        });
        
    }

    useEffect(() => {
        // fetchMatches(teamPUUID[1]);
    }, [])

    return (
        <div className="flex flex-col justify-center gap-5 text-zinc-200">
            <div className="flex flex-col-reverse gap-4 items-center">
                <div className="text-4xl uppercase">Historial de partidas</div>
                <Logo wd={120} h={120} />
            </div>
            <div className="flex flex-col gap-5 min-w-[62rem] mx-auto">
                {games.map(game => (
                    <Collapsible key={Math.random().toFixed(6) * 100000} game={game} />
                ))}
            </div>
            <div>
                <Boton>Ver mas</Boton>
            </div>
        </div>
    )
}