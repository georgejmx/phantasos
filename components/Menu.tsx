import { MenuProps } from "@/lib/types";
import NavigationPane from "./NavigationPane";

export default function Menu(props: MenuProps): JSX.Element {
  return (
    <>
      {props.email && (
        <p className="text-lime-600 p-2 text-center">
          You are signed in as {props.email}
        </p>
      )}
      {props.dream && props.archetypes ? (
        <NavigationPane dream={props.dream} archetypes={props.archetypes} />
      ) : (
        <p className="text-cyan-500 italic p-2 my-4">
          Error hydrating app with data
        </p>
      )}
    </>
  );
}
