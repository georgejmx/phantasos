import { DreamInput } from "../types/types";

function Dream(props: DreamInput): JSX.Element {
  return (
    <div className="flex text-center flex-col p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
      <p className="italic font-semibold">{props.date}</p>
      <p className="py-1">{props.text}</p>
    </div>
  );
}

export default Dream;
