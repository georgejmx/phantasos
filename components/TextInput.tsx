import { TextInputProps } from "@/lib/types";

export default function TextInput(props: TextInputProps): JSX.Element {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-purple-300 mr-2">{props.label}:</label>
      <input
        onInput={(e) => props.onUpdate(e.currentTarget.value)}
        type={props.isMasked ? "password" : "text"}
        className="text-purple-500 h-8 border border-purple-500 focus:border-purple-500 rounded bg-zinc-900"
      />
    </div>
  );
}
