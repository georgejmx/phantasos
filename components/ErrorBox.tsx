import type { ErrorBoxProps } from "../lib/types";

export default function ErrorBox(props: ErrorBoxProps): JSX.Element {
    return (
        <p className="text-cyan-500 italic p-2 my-4">{props.message || "Something went wrong"}</p>
    );
}
