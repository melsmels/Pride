import TeamPlayer from '@/components/TeamPlayer'
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import teamData from '../../json/team.json'
import Boton from '@/components/Boton';

export default function Team() {

    const [ players, setPlayers ] = useState([]);

    useEffect(() => {
        async function fetchTeam() {
            const { data } = await axios.post('/api/team', { players: ['Sam', 'Mels', 'Zuo', 'Miss%20Autonomy', 'Minibros'] })
            for(let i = 0; i < data.length; i++) {
                teamData[i].profileIconId = data[i].profileIconId
            }
            console.log(data);
            setPlayers(data);
        }
        fetchTeam()
    }, [])

    return(
        players.length !== 0 && (
            <div className='flex flex-col justify-center gap-5 h-screen p-5 text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 items-center'>
                    {teamData.map( player => (
                        <TeamPlayer key={Math.random()} player={player} />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Link href={'/team/matches'}>
                        <Boton>Ver partidas del team</Boton>
                    </Link>
                </div>
            </div>
        )
    )
}