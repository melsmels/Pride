// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
    const { puuid } = req.body;
	const { data: matchesIds } = await axios.request({
        method: 'GET',
        url: `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=20`,
        headers: {
            "X-Riot-Token": process.env.RIOT_KEY
        }
    })
    try {
        const urls = [];
        matchesIds.map(match => urls.push(`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${process.env.RIOT_KEY}`));
        Promise.all(urls.map(url => fetch(url).then(response => response.json())))
            .then(responses => {
                return res.json(responses);
            })
            .catch(err => {
                const error = new Error(err.response.data.msg);
                return res.json({ msg: error.message });
            });
    } catch (err) {
        const error = new Error(err.response.data.msg);
        return res.json({ msg: error.message });
    }
    // Promise.all(matchesIds.map(async match => {
    //     axios.request({
    //         method: 'GET',
    //         url: `https://americas.api.riotgames.com/lol/match/v5/matches/${match}`,
    //         headers: {
    //             "X-Riot-Token": process.env.RIOT_KEY
    //         }
    //     })
    // })).then( data => {
    //     return res.json(data);
    // }).catch( err => {
    //     const error = new Error(err.response.data.msg);
    //     return res.json({ msg: error.message });
    // })
}
