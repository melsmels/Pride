// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
    try {
        const { data } = await axios.get(`${process.env.SERVER_URL}/team/matches`);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ success: false })
    }
}
