import TeamPlayer from '@/components/TeamPlayer'
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import teamData from '../../json/team.json'
import Boton from '@/components/Boton';
import teamPlayers from '../../json/teamPlayers.json'

export default function Team() {

    return(
        <div className='flex flex-col justify-center gap-5 p-5 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 items-center'>
                {teamPlayers.map( player => (
                    <TeamPlayer key={Math.random()} player={player} />
                ))}
            </div>
            <div className='flex justify-center'>
                <Link href={'/matches'}>
                    <Boton>Ver partidas del team</Boton>
                </Link>
            </div>
        </div>
    )
}