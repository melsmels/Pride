// NextJS
import Image from "next/image";
import { useEffect, useState } from "react";
import MatchHeader from "./Header";

export default function MatchObjectives({ match }) {
    
    const { participants: players } = match.info;
    const [ takeDownPercent, setTakeDownPercent ] = useState(0);
    const [ firstTowerKiller, setFirstTowerKiller ] = useState({});
    const [ firstTowerTime, setFirstTowerTime ] = useState(0);
    const [ fullTeamTakedown, setFullTeamTakedown ] = useState({ teamOne: 0, teamTwo: 0 })

    useEffect(() => {
        console.log(players)
        firstTowerKill();
        firstTurretKilledTime();
        teamTakeDown();
    }, []);

    function firstTowerKill() {
        const firstTowerKiller = players.filter(player => player.firstTowerKill === true);
        setFirstTowerKiller(firstTowerKiller[0]);
    }

    function firstTurretKilledTime() {
        let time;
        for(let i = 0; i < players.length; i++) {
            if(players[i].challenges.firstTurretKilledTime) {
                time = players[i].challenges.firstTurretKilledTime;
                break;
            }
        }
        setFirstTowerTime(time);
    }

    function teamTakeDown() {
        let fullTeamTakedown = { teamOne: players[0].challenges.fullTeamTakedown , teamTwo: players[6].challenges.fullTeamTakedown };
        getTakeDownPercent(players[0].challenges.fullTeamTakedown, players[6].challenges.fullTeamTakedown);
        setFullTeamTakedown(fullTeamTakedown);
    }

    function getTakeDownPercent(x, y) {
        const minValue = x > y ? y : x;
        const maxValue = x > y ? x : y;
        const percent = minValue * 100 / (maxValue + minValue);
        setTakeDownPercent(percent);
    }

    return (
        <div className="flex flex-col gap-3 px-2">
            <MatchHeader match={match.info} />
            <div className="flex flex-col gap-4 border-b pb-3 border-neutral-800">
                <div className="text-2xl uppercase">
                    <span>Primer jugador en tirar una torre</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image className="rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${firstTowerKiller.championName}.png`} width={50} height={50} alt={`${firstTowerKiller.championName} Image`} />
                        <div className="flex flex-col">
                            <span className="text-xl">{firstTowerKiller.summonerName}</span>
                            <div className="flex items-center gap-1">
                                <span>{firstTowerKiller.championName}</span>
                                <span className="">{`(${firstTowerKiller.lane})`}</span>    
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-1 uppercase text-xl">
                            <div>a los</div>
                            <span className="text-main font-black">{`${(firstTowerTime / 60).toString().split('.')[0]}:${(((firstTowerTime / 60) / 60) / 2).toFixed(2).toString().split('.')[1]}`}</span>
                            <div>minutos</div>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 border-b pb-3 border-neutral-800">
                <div className="text-2xl uppercase">
                    <span>Cantidad de derribos</span>
                </div>
                <div className="flex items-center text-lg uppercase">
                    <div className="flex justify-start py-1 px-4 bg-blue-500 rounded-l-md font-bold" style={{width: `${fullTeamTakedown.teamOne > fullTeamTakedown.teamTwo ? (100 - takeDownPercent).toFixed(0) : takeDownPercent.toFixed(0)}%`}}>
                        <span>{`(${fullTeamTakedown.teamOne}) ${fullTeamTakedown.teamOne > fullTeamTakedown.teamTwo ? (100 - takeDownPercent).toFixed(0) : takeDownPercent.toFixed(0)}%`}</span>
                    </div>
                    <div className="flex justify-end py-1 px-4 bg-red-500 rounded-r-md font-bold" style={{width: `${fullTeamTakedown.teamTwo > fullTeamTakedown.teamOne ? (100 - takeDownPercent).toFixed(0) : takeDownPercent.toFixed(0)}%`}}>
                        <span>{`(${fullTeamTakedown.teamTwo}) ${fullTeamTakedown.teamTwo > fullTeamTakedown.teamOne ? (100 - takeDownPercent).toFixed(0) : takeDownPercent.toFixed(0)}%`}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 border-b pb-3 border-neutral-800">
                <div className="text-2xl uppercase">
                    <span>Placas derribadas</span>
                </div>
                <div className="flex gap-1 uppercase">
                    <div className="flex flex-col gap-1 w-1/2">
                        {players.map(player => {
                            if(player.teamId === 100) {
                                return <div className="flex items-center justify-between gap-2 py-1 border-neutral-800 bg-neutral-800 rounded-md px-2" key={Math.random().toFixed(6) * 1000000}>
                                    <div className="flex items-center gap-2">
                                        <Image className="rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${player.championName}.png`} width={50} height={50} alt={`${player.championName} Image`} />
                                        <div className="flex flex-col">
                                            <span className="text-xl">{player.summonerName}</span>
                                            <div className="flex items-center gap-1">
                                                <span>{player.championName}</span>
                                                <span className="">{`(${player.lane})`}</span>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xl py-1 text-main font-black">{player.challenges.turretPlatesTaken} Placas</div>
                                </div>
                            }
                        })}
                    </div>
                    <div className="flex flex-col gap-1 w-1/2">
                        {players.map(player => {
                            if(player.teamId === 200) {
                                return <div className="flex items-center justify-between gap-2 py-1 border-neutral-800 bg-neutral-800 rounded-md px-2" key={Math.random().toFixed(6) * 1000000}>
                                    <div className="flex items-center gap-2">
                                        <Image className="rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${player.championName}.png`} width={50} height={50} alt={`${player.championName} Image`} />
                                        <div className="flex flex-col">
                                            <span className="text-xl">{player.summonerName}</span>
                                            <div className="flex items-center gap-1">
                                                <span>{player.championName}</span>
                                                <span className="">{`(${player.lane})`}</span>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xl py-1 text-main font-black">{player.challenges.turretPlatesTaken} Placas</div>
                                </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}