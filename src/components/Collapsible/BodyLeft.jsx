// NextJS
import Image from "next/image";
// Hooks
import thousandFormatter from '../../hooks/thousandFormatter';
// Tooltips
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function CollapsibleBodyLeft({ props }) {
    
    const { game, handleOrderItems, getChampionNameById } = props;

    return(
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
                    <div key={Math.random().toFixed(6) * 100000}>
                        <Image className='rounded-full border-[3px] border-zinc-700' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${getChampionNameById(ban.championId)}.png`} width={35} height={35} alt={`Champion Image`} />
                    </div>
                ))}
            </div>
        </div>
    )
}