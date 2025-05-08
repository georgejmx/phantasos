import { MenuProps } from "../lib/types";
import NavigationPane from "./NavigationPane";
import ErrorBox from "./ErrorBox";
import AccountBubble from "./AccountBubble";

export default function Menu(props: MenuProps): JSX.Element {
    return (
        <>
            {props.email && <AccountBubble email={props.email} />}
            {props.archetypes ? (
                <NavigationPane dream={props.dream} archetypes={props.archetypes} />
            ) : (
                <ErrorBox message="Error fetching data from server" />
            )}
        </>
    );
}
