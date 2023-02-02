// NextJS
import Image from "next/image";

export default function CollapsibleBodyHeader({ props }) {

    const { game, kills, death, assist, teamOne, teamTwo, gameType } = props;

    return(
        <div className="flex items-center justify-between gap-8 border-b border-zinc-700 py-2 px-4">
            <div className="flex items-center gap-3 text-zinc-400">
                <div className={`text-lg ${game.info.teams[0].win ? 'text-green-600' : 'text-red-600'} font-bold`}><span>{game.info.teams[0].win ? 'Victoria' : 'Derrota'}</span></div>
                <div className="flex items-center">
                    <span>{`${kills.teamOne}/${death.teamOne}/${assist.teamOne}`}</span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                    <Image src={'/img/objectives/torre.png'} width={15} height={15} alt={'Objective Image'} />
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
                    <Image src={'/img/objectives/torre.png'} width={15} height={15} alt={'Objective Image'} />
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
    )
}