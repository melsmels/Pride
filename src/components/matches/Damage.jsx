import MatchHeader from "./Header";

export default function MatchDamage({ match }) {
    return (
        <div className="flex flex-col gap-3 px-2">
            <MatchHeader match={match.info} />
            <div>Daño</div>
        </div>
    )
}