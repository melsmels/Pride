// React
import { useEffect, useState } from 'react';
// NextJS
import Image from 'next/image';
// Components
import Header from './Header';
// Date formatter
import moment from "moment/moment";

export default function GameCollapse({game}) {
    const { gameCreation, gameVersion, teams, participants } = game.info;

    return (
        <div className=''>
            <Header props={{ gameCreation, gameVersion, teams, participants, game }} />
        </div>
    )
}