import axios from "axios";
// React
import { useEffect, useState } from "react";
// Components
import Logo from "@/components/Logo"
// Team PUUIDS
import teamPUUID from '../../../json/teamPuuid'


export default function MatchesPage() {

    const [ matches, setMatches ] = useState([]);

    async function fetchMatches(puuid) {
        const { data } = await axios.post('/api/playerMatches', { puuid });
        const matches = data.filter(match => {
            if(match?.info?.queueId && match.info.queueId == '440') {
                return true;
            } else {
                return false;
            }
        });
        setMatches(matches);
        
    }
    console.log(matches);

    useEffect(() => {
        fetchMatches(teamPUUID[1]);
    }, [])

    return (
        <div className="text-zinc-200">
            <div className="flex flex-col-reverse gap-4 items-center">
                <div className="text-2xl uppercase">Historial de partidas</div>
                <Logo wd={80} h={80} />
            </div>
            <div>

            </div>
        </div>
    )
}