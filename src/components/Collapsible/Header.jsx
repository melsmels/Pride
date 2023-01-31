// React
import { useEffect, useState } from 'react';
// NextJS
import Image from 'next/image';
// Components
import Body from './Body';
// Date formatter
import moment from 'moment';
// Mock
import teamPUUID from '../../../json/teamPuuid.json';

export default function CollapsibleHeader({props}) {
    
    const { gameCreation, gameVersion, teams, participants, game } = props;

    const [ teamId, setTeamId ] = useState(null);
    const [ teamWinner, setWinner ] = useState(null);
    const [ teamOneKills, setTeamOneKills ] = useState();
    const [ teamTwoKills, setTeamTwoKills ] = useState();

    useEffect(() => {
        for(let i = 0; i < participants.length; i++) {
            if(participants[i].puuid === teamPUUID[1]) {
                setTeamId(participants[i].teamId);
                break;
            }
        }
        for(let i = 0; i < teams.length; i++) {
            if(teams[i].teamId == teamId) {
                if(teams[i].win) {
                    setWinner(teamId);
                    break;
                }
            } else {
                if(teams[i].win) {
                    setWinner(teams[i].teamId);
                    break;
                }
            }
        }
        for(let i = 0; i < teams.length; i++) {
            if(teams[i].teamId == 100) {
                setTeamOneKills(teams[i].objectives.champion.kills);
            } else {
                setTeamTwoKills(teams[i].objectives.champion.kills);
            }
        }
    }, [])

    const [ showBody, setShowBody ] = useState(false);

    const handleShowBody = () => {
        setShowBody(!showBody);
    }

    return(
        <div>
            <div className={`flex flex-col gap-1 py-2 px-4 cursor-pointer bg-[#2C2C2B] ${showBody ? 'rounded-t-md' : 'rounded-md'} select-none`} onClick={handleShowBody}>
                <div className="flex items-center justify-between text-xs">
                    <div>{ moment(gameCreation).format('L') }</div>
                    <div className={`absolute uppercase text-lg left-1/2 -translate-x-1/2 font-bold ${teamId === teamWinner ? 'text-green-600' : 'text-red-600'}`}>{teamId === teamWinner ? 'Victoria' : 'Derrota'}</div>
                    <div className='flex items-center gap-3'>
                        <div>{`${gameVersion.split('.')[0]}.${gameVersion.split('.')[1]}`}</div>
                        <div className="text-lg"><i className="fa-regular fa-chevron-down"></i></div>
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
            { showBody && (
                <Body game={game} />
            )}
        </div>
    )
}