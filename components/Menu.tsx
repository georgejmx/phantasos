import { MenuProps } from "@/lib/types";
import NavigationPane from "./NavigationPane";
import ErrorBox from "./ErrorBox";

export default function Menu(props: MenuProps): JSX.Element {
    return (
        <>
            {props.email && (
                <p className="text-lime-600 p-2 text-center">
                    You are signed in as {props.email}
                </p>
            )}
            {props.archetypes ? (
                <NavigationPane dream={props.dream} archetypes={props.archetypes} />
            ) : (
                <ErrorBox />
            )}
        </>
    );
}
