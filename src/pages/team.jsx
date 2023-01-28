import TeamPlayer from '@/components/TeamPlayer'
import axios from 'axios';
import { useEffect, useState } from 'react';
import teamData from '../../json/team.json'

export default function Team() {

    const [ players, setPlayers ] = useState([]);

    useEffect(() => {
        async function fetchTeam() {
            const { data } = await axios.post('/api/team', { players: ['Sam', 'Mels', 'Zuo', 'Miss%20Autonomy', 'Minibros'] })
            for(let i = 0; i < data.length; i++) {
                teamData[i].profileIconId = data[i].profileIconId
            }
            setPlayers(data);
        }
        fetchTeam()
    }, [])

    return(
        players.length !== 0 && (
            <div className='h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 items-center p-5 text-white'>
                {teamData.map( player => (
                    <TeamPlayer key={Math.random()} player={player} />
                ))}
            </div>
        )
    )
}