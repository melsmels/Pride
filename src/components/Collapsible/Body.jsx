// React
import { useEffect, useState } from "react";
// Components
import Loading from "../Loading";
import CollapsibleBodyHeader from "./BodyHeader";
import CollapsibleBodyLeft from "./BodyLeft";
import CollapsibleBodyRight from "./BodyRight";
// Mock
import champion from '../../../json/champion.json'
import queue from '../../../json/queue.json';

export default function CollapsibleBody({ game, rounded, showButton }) {
    
    const [ loading, setLoading ] = useState(true);
    const teamOne = game.info.teams[0];
    const teamTwo = game.info.teams[1];
    const [ gameType, setGameType ] = useState({});
    const [ kills, setKills ] = useState({ teamOne: 0, teamTwo: 0 });
    const [ death, setDeath ] = useState({ teamOne: 0, teamTwo: 0 });
    const [ assist, setAssist ] = useState({ teamOne: 0, teamTwo: 0 });

    useEffect(() => {
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
        setLoading(false);
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
        loading ? (
            <Loading x={150} y={150} />
        ) : (
            <div className={`flex flex-col bg-[#2C2C2B] rounded-${rounded}`}>
                <CollapsibleBodyHeader props={{ game, kills, death, assist, teamOne, teamTwo, gameType }}/>
                <div className="flex justify-between py-2 px-4 gap-5">
                    <CollapsibleBodyLeft props={{ game, handleOrderItems, getChampionNameById }} />
                    <CollapsibleBodyRight props={{ game, handleOrderItems, getChampionNameById }} />
                </div>
                { showButton && (
                    <div className="flex justify-center py-2 text-xl bg-violet-900 hover:bg-violet-800 cursor-pointer transition-colors rounded-b-md">
                        <span className="">Ver partida</span>
                    </div>
                )}
            </div>
        )
    )
}