import { MenuProps } from "../lib/types";
import NavigationPane from "./NavigationPane";
import ErrorBox from "./ErrorBox";

export default function Menu(props: MenuProps): JSX.Element {
    return (
        <>
            {props.archetypes ? (
                <NavigationPane dream={props.dream} archetypes={props.archetypes} />
            ) : (
                <ErrorBox message="Error fetching data from server" />
            )}
        </>
    );
}
