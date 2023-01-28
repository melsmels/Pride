// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
	Promise.all([
		axios(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/Sam?api_key=${process.env.RIOT_KEY}`),
		axios(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/Mels?api_key=${process.env.RIOT_KEY}`),
		axios(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/Zuo?api_key=${process.env.RIOT_KEY}`),
		axios(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/MissMakima?api_key=${process.env.RIOT_KEY}`),
		axios(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/Minibros?api_key=${process.env.RIOT_KEY}`)
	])
		.then(data => {
			let response = [];
			data.map(summoner => {
				response.push(summoner.data);
			})
			return res.json(response);
		})
		.catch(err => {
			return res.json(err);
		})
}
