import { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";

export default function MatchHeader({ match }) {
    
    const { gameCreation, gameVersion, teams, participants } = match;

    const [ teamOneKills, setTeamOneKills ] = useState();
    const [ teamTwoKills, setTeamTwoKills ] = useState();

    useEffect(() => {
        for(let i = 0; i < teams.length; i++) {
            if(teams[i].teamId == 100) {
                setTeamOneKills(teams[i].objectives.champion.kills);
            } else {
                setTeamTwoKills(teams[i].objectives.champion.kills);
            }
        }
    }, [])

    return (
        <div>
            <div className={`flex flex-col gap-1 py-2 px-4 cursor-pointer bg-[#2C2C2B] select-none rounded-lg`}>
                <div className="flex items-center justify-between">
                    <div>{ moment(gameCreation).format('L') }</div>
                    <div className='flex items-center gap-3'>
                        <div>{`${gameVersion.split('.')[0]}.${gameVersion.split('.')[1]}`}</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className='flex items-center justify-between w-full gap-4'>
                        <div className='flex items-center gap-2'>
                            { participants.map((participant, index) => (
                                index < 5 && <Image key={Math.random().toFixed(6) * 100000} className='rounded-full border-[3px] border-zinc-700' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${participant.championName}.png`} width={60} height={60} alt={`${participant.championName} Image`} />
                            ))}
                        </div>
                        <div className='flex items-center gap-3 text-zinc-300'>
                            <div className={'font-bold text-4xl'}>{ teamOneKills }</div>
                            <div className='uppercase text-xl text-zinc-500 font-bold'>vs</div>
                            <div className={'font-bold text-4xl'}>{ teamTwoKills }</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            { participants.map((participant, index) => (
                                index > 4 && <Image key={Math.random().toFixed(6) * 100000} className='rounded-full border-[3px] border-zinc-700' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${participant.championName}.png`} width={60} height={60} alt={`${participant.championName} Image`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}