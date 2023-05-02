import { DreamProps } from "../types/types";

function Dream(props: DreamProps): JSX.Element {
  return (
    <div className="flex text-center flex-col p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
      <p className="italic font-semibold">{props.date}</p>
      <p className="py-1">{props.text}</p>
      <p className="py-1 text-pink-200 font-mono ml-2">
        Archetype: {String(props.archetypeId)}
      </p>
    </div>
  );
}

export default Dream;
