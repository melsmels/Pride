import axios from "axios";
// React
import { useEffect, useState } from "react";
// Components
import Logo from "@/components/Logo"
import Boton from "@/components/Boton";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
// Team PUUIDS
import teamPUUID from '../../json/teamPuuid'
// Mock
// import games from '../../json/games.json';
import Collapsible from "@/components/Collapsible/Collapsible";

export default function MatchesPage() {

    const [ loading, setLoading ] = useState(true);
    const [ games, setGames ] = useState([]);

    async function fetchMatches(puuid) {
        const { data } = await axios.post('/api/teamMatches', { puuid });
        const matches = data.filter(match => {
            if(match?.info?.queueId && match.info.queueId == '440') {
                return true;
            } else {
                return false;
            }
        });
        const sortedmatches = matches.sort((a, b) => b.info.gameCreation - a.info.gameCreation)
        setGames(sortedmatches);
        setLoading(false);
        // setTimeout(() => {
        // }, 2000)
    }

    useEffect(() => {
        fetchMatches(teamPUUID[1]);
    }, [])

    return (
        <Layout title={'Partidas del team'} py={'4rem'} maxw={'6xl'}>
            { loading ? (
                <div className="py-10">
                    <Loading x={150} y={150} />
                </div>
            ) : (
                <div className="flex flex-col justify-center gap-5 text-zinc-200 py-10">
                    <div className="flex flex-col-reverse gap-4 items-center">
                        <div className="text-4xl uppercase">Historial de partidas</div>
                        {/* <Logo href={'/'} wd={120} h={120} /> */}
                    </div>
                    {/* <div className="flex justify-center">
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-[1px] text-2xl font-bold">
                                <span className="text-green-600">100</span>
                                <span>-</span>
                                <span className="text-red-600">20</span>
                            </div>
                            <div className="text-2xl font-bold">
                                <span className="uppercase text-violet-500">{`${'80%'} winrate`}</span>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex flex-col gap-5 min-w-[62rem] mx-auto">
                        {games.map(game => (
                            <Collapsible key={Math.random().toFixed(6) * 100000} game={game} />
                        ))}
                    </div>
                    <div className="w-[10rem] mx-auto">
                        <Boton>Ver mas</Boton>
                    </div>
                </div>
            )}
        </Layout>
    )
}