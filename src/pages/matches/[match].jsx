// NextJS
import { useRouter } from "next/router";
// Components
import Layout from "@/components/Layout";
import MatcheSidebar from "@/components/matches/Sidebar";
import MatchDamage from "@/components/matches/Damage";
import MatchIndividualStadistics from "@/components/matches/IndividualStadistics";
import MatchObjectives from "@/components/matches/Objectives";
import MatchPings from "@/components/matches/Pings";
import MatchResume from "@/components/matches/Resume";
import MatchVision from "@/components/matches/Vision";
// Mock
import games from '../../../json/games.json';
import { useEffect, useState } from "react";

export default function MatchPage() {
    
    // Get match param from url
    const router = useRouter();
    const { match: matchQuery } = router.query;

    const [ match, setMatch ] = useState(null);

    // On component load set match to state
    useEffect(() => {
        const game = games.filter(game => game.metadata.matchId === matchQuery);
        setMatch(game[0]);
    }, [games, matchQuery]);

    const [ page, setPage ] = useState(0);
    function handleChangePage(page) {
        setPage(page);
    }

    return(
        <Layout title={matchQuery} py={0} px={5}>
            <div className="flex overflow-hidden">
                <MatcheSidebar page={page} changeState={handleChangePage} />
                <div className="overflow-y-scroll w-full py-5" style={{height: 'calc(100vh - 5rem)'}}>
                    { match && page === 0 && <MatchResume match={match} /> }
                    { match && page === 1 && <MatchObjectives match={match} /> }
                    { match && page === 2 && <MatchVision match={match} /> }
                    { match && page === 3 && <MatchDamage match={match} /> }
                    { match && page === 4 && <MatchIndividualStadistics match={match} /> }
                    { match && page === 5 && <MatchPings match={match} /> }
                </div>
            </div>
        </Layout>
    )
}