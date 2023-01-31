// React
import { useEffect, useState } from "react";
// NextJS
import Image from "next/image";
// Mock
import champion from '../../../json/champion.json'
import queue from '../../../json/queue.json';
// Hooks
import thousandFormatter from '../../hooks/thousandFormatter';
// Tooltip
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function CollapsibleBody({ game }) {
    
    const teamOne = game.info.teams[0];
    const teamTwo = game.info.teams[1];
    const [ gameType, setGameType ] = useState({});
    const [ kills, setKills ] = useState({ teamOne: 0, teamTwo: 0 });
    const [ death, setDeath ] = useState({ teamOne: 0, teamTwo: 0 });
    const [ assist, setAssist ] = useState({ teamOne: 0, teamTwo: 0 });

    useEffect(() => {
        console.log(game);
        const players = game.info.participants;
        let kills = { teamOne : 0, teamTwo : 0 };
        let deaths = { teamOne : 0, teamTwo : 0 };
        let assists = { teamOne : 0, teamTwo : 0 };
        players.map((player, index) => {
            if(index < 4) {
                kills = { teamOne : kills.teamOne + player.kills, teamTwo: kills.teamTwo };
                deaths = { teamOne : deaths.teamOne + player.deaths, teamTwo: deaths.teamTwo };
                assists = { teamOne : assists.teamOne + player.assists, teamTwo: assists.teamTwo };
            } else {
                kills = { teamOne: kills.teamOne, teamTwo : kills.teamTwo + player.kills };
                deaths = { teamOne: deaths.teamOne, teamTwo : deaths.teamTwo + player.deaths };
                assists = { teamOne: assists.teamOne, teamTwo : assists.teamTwo + player.assists };
            }
        })
        setKills(kills);
        setDeath(deaths);
        setAssist(assists);
        for(let i = 0; i < queue.length; i++) {
            if(queue[i].queueId === game.info.queueId) {
                setGameType(queue[i]);
                break;
            }
        }
    }, []);

    function handleOrderItems(items) {
        let newItems = [];
        items.map(item => {
            if(item !== 0) {
                newItems.push(item);
            }
        });
        items.map(item => {
            if(item === 0) {
                newItems.push(0)
            }
        });
        return newItems
    }

    function getChampionNameById(id) {
        for(let champ in champion.data) {
            if(champion.data[champ].key == id) {
                return champion.data[champ].id;
            }
        }
    }

    return(
        <div className="flex flex-col bg-[#2C2C2B] rounded-b-md">
            <div className="flex items-center justify-between gap-8 border-b border-zinc-700 py-2 px-4">
                <div className="flex items-center gap-3 text-zinc-400">
                    <div className={`text-lg ${game.info.teams[0].win ? 'text-green-600' : 'text-red-600'} font-bold`}><span>{game.info.teams[0].win ? 'Victoria' : 'Derrota'}</span></div>
                    <div className="flex items-center">
                        <span>{`${kills.teamOne}/${death.teamOne}/${assist.teamOne}`}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/baron.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamOne.objectives.tower.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/nexo.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamOne.objectives.inhibitor.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/heraldo.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamOne.objectives.riftHerald.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/dragon.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamOne.objectives.dragon.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/baron.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamOne.objectives.baron.kills}</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <span>{gameType.description}</span>
                    <span>{`(${(game.info.gameDuration / 60).toString().split('.')[0]}:${(((game.info.gameDuration / 60) / 60) / 2).toFixed(2).toString().split('.')[1]})`}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/baron.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamTwo.objectives.tower.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/nexo.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamTwo.objectives.inhibitor.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/heraldo.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamTwo.objectives.riftHerald.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/dragon.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamTwo.objectives.dragon.kills}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={'/img/objectives/baron.png'} width={15} height={15} alt={'Objective Image'} />
                        <span>{teamTwo.objectives.baron.kills}</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                    <div className="flex items-center">
                        <span>{`${kills.teamTwo}/${death.teamTwo}/${assist.teamTwo}`}</span>
                    </div>
                    <div className={`text-lg ${game.info.teams[1].win ? 'text-green-600' : 'text-red-600'} font-bold`}><span>{game.info.teams[1].win ? 'Victoria' : 'Derrota'}</span></div>
                </div>
            </div>
            <div className="flex justify-between py-2 px-4 gap-5">
                <div className="flex flex-col gap-4 w-1/2">
                    { game.info.participants.map((participant, index) => {
                        if(index < 5) {
                            return <div key={Math.random().toFixed(6) * 1000000}>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-1 w-[9rem]">
                                        <div className="relative">
                                            <Image className='rounded-full border-[3px] border-zinc-700' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${participant.championName}.png`} width={50} height={50} alt={`${participant.championName} Image`} />
                                            <div className="absolute flex items-center justify-center right-0 bottom-0 bg-zinc-900 rounded-full w-5 h-5 text-xs border border-zinc-500">
                                                <span className="">{participant.champLevel}</span>
                                            </div>
                                        </div>
                                        <div className="max-w-[5rem] break-words">{participant.summonerName}</div>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-col text-center">
                                            <div className="flex gap-1 items-center font-semibold w-fit mx-auto">
                                                <span className="text-green-600">{participant.kills}</span>
                                                <span>/</span>
                                                <span className="text-red-600">{participant.deaths}</span>
                                                <span>/</span>
                                                <span className="text-yellow-600">{participant.assists}</span>
                                            </div>
                                            <div className="flex flex-col items-center text-zinc-400 gap-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`farm${index}`} data-tooltip-content="Farm">
                                                        <ReactTooltip anchorId={`farm${index}`} />
                                                        <span>{participant.totalMinionsKilled}</span>
                                                        <Image src={'/img/extras/minion.png'} width={15} height={15} alt={'Minion Image'} />
                                                    </div>
                                                    <span>|</span>
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`oro${index}`} data-tooltip-content="Oro">
                                                        <ReactTooltip anchorId={`oro${index}`} />
                                                        <span>{thousandFormatter(participant.goldEarned)}</span>
                                                        <Image src={'/img/extras/oro.png'} width={15} height={15} alt={'Oro Image'} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`totalDamage${index}`} data-tooltip-content="Daño total">
                                                        <ReactTooltip anchorId={`totalDamage${index}`} />
                                                        <span>{thousandFormatter(participant.totalDamageDealtToChampions)}</span>
                                                        <Image src={'/img/extras/participacion.png'} width={14} height={14} alt={'Kills Image'} />
                                                    </div>
                                                    <span>|</span>
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`wards${index}`} data-tooltip-content="Puntos de visión, Pinks comprados">
                                                        <ReactTooltip anchorId={`wards${index}`} />
                                                        <span>{participant.visionScore},</span>
                                                        <span className=" text-fuchsia-400">{participant.visionWardsBoughtInGame}</span>
                                                        <Image src={'/img/extras/ward.png'} width={18} height={18} alt={'Wards Image'} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-[2px]">
                                        { handleOrderItems([participant.item0, participant.item1, participant.item2, participant.item3, participant.item4, participant.item5, participant.item6]).map( item => {
                                            if(item != 0) {
                                                return <Image key={Math.random().toFixed(6) * 100000} className='rounded' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${item}.png`} width={32} height={32} alt={`${participant.championName} Image`} />
                                            } else {
                                                return <div key={Math.random().toFixed(6) * 100000} className="rounded w-8 h-8 bg-zinc-800 opacity-40"></div>
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    })}
                    <div className="flex items-center gap-1 w-fit mx-auto py-4">
                        <div className="text-zinc-400">Bans:</div>
                        { game.info.teams[0].bans.map((ban, index) => (
                            <div>
                                <Image className='rounded-full border-[3px] border-zinc-700' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${getChampionNameById(ban.championId)}.png`} width={35} height={35} alt={`Champion Image`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/2">
                    { game.info.participants.map((participant, index) => {
                        if(index > 4) {
                            return <div key={Math.random().toFixed(6) * 1000000}>
                                <div className="flex flex-row-reverse items-center justify-between gap-3">
                                    <div className="flex flex-row-reverse items-center gap-1 w-[9rem]">
                                        <div className="relative">
                                            <Image className='rounded-full border-[3px] border-zinc-700' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${participant.championName}.png`} width={50} height={50} alt={`${participant.championName} Image`} />
                                            <div className="absolute flex items-center justify-center right-0 bottom-0 bg-zinc-900 rounded-full w-5 h-5 text-xs border border-zinc-500">
                                                <span className="">{participant.champLevel}</span>
                                            </div>
                                        </div>
                                        <div className="max-w-[5rem] break-words">{participant.summonerName}</div>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-col text-center">
                                            <div className="flex gap-1 items-center font-semibold w-fit mx-auto">
                                                <span className="text-green-600">{participant.kills}</span>
                                                <span>/</span>
                                                <span className="text-red-600">{participant.deaths}</span>
                                                <span>/</span>
                                                <span className="text-yellow-600">{participant.assists}</span>
                                            </div>
                                            <div className="flex flex-col items-center text-zinc-400 gap-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`farm${index}`} data-tooltip-content="Farm">
                                                        <ReactTooltip anchorId={`farm${index}`} />
                                                        <span>{participant.totalMinionsKilled}</span>
                                                        <Image src={'/img/extras/minion.png'} width={15} height={15} alt={'Minion Image'} />
                                                    </div>
                                                    <span>|</span>
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`oro${index}`} data-tooltip-content="Oro">
                                                        <ReactTooltip anchorId={`oro${index}`} />
                                                        <span>{thousandFormatter(participant.goldEarned)}</span>
                                                        <Image src={'/img/extras/oro.png'} width={15} height={15} alt={'Oro Image'} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`totalDamage${index}`} data-tooltip-content="Daño total">
                                                        <ReactTooltip anchorId={`totalDamage${index}`} />
                                                        <span>{thousandFormatter(participant.totalDamageDealtToChampions)}</span>
                                                        <Image src={'/img/extras/participacion.png'} width={14} height={14} alt={'Kills Image'} />
                                                    </div>
                                                    <span>|</span>
                                                    <div className="flex items-center gap-1 cursor-pointer" id={`wards${index}`} data-tooltip-content="Puntos de visión, Pinks comprados">
                                                        <ReactTooltip anchorId={`wards${index}`} />
                                                        <span>{participant.visionScore},</span>
                                                        <span className=" text-fuchsia-400">{participant.visionWardsBoughtInGame}</span>
                                                        <Image src={'/img/extras/ward.png'} width={18} height={18} alt={'Wards Image'} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-[2px]">
                                        { handleOrderItems([participant.item0, participant.item1, participant.item2, participant.item3, participant.item4, participant.item5, participant.item6]).map( item => {
                                            if(item != 0) {
                                                return <Image key={Math.random().toFixed(6) * 100000} className='rounded' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${item}.png`} width={32} height={32} alt={`${participant.championName} Image`} />
                                            } else {
                                                return <div key={Math.random().toFixed(6) * 100000} className="rounded w-8 h-8 bg-zinc-800 opacity-40"></div>
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    })}
                    <div className="flex items-center gap-1 w-fit mx-auto py-4">
                        <div className="text-zinc-400">Bans:</div>
                        { game.info.teams[1].bans.map((ban, index) => (
                            <div>
                                <Image className='rounded-full border-[3px] border-zinc-700' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${getChampionNameById(ban.championId)}.png`} width={35} height={35} alt={`Champion Image`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2 text-xl bg-violet-900 hover:bg-violet-800 cursor-pointer transition-colors rounded-b-md">
                <span className="">Ver partida</span>
            </div>
        </div>
    )
}