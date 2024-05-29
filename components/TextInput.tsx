import type { TextInputProps } from "../lib/types";

export default function TextInput(props: TextInputProps): JSX.Element {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-purple-300 mr-2">{props.label}:</label>
            <input
                id={`${props.label.toLowerCase()}-input`}
                onChange={(e) => props.onUpdate(e.target.value)}
                type={props.isMasked ? "password" : "text"}
                className="text-purple-500 h-8 w-60 border border-purple-500 focus:border-purple-500 rounded bg-zinc-900"
            />
        </div>
    );
}
