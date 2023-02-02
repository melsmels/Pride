// Components
import CollapsibleBody from "../Collapsible/Body";
import MatchHeader from "./Header";

export default function MatchResume({ match }) {
    return (
        <div className="flex flex-col gap-3 px-2">
            <MatchHeader match={match.info} />
            <div className="">
                <CollapsibleBody game={match} rounded={'lg'} showButton={false} />
            </div>
        </div>
    )
}