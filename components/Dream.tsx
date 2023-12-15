import Image from "next/image";

import { DreamProps } from "@/lib/types";

function Dream(props: DreamProps): JSX.Element {
  // Return correct image import
  const getCorrectThumbnail = () => {
    if (props.aspect === "ego") return "/aspect_thumbs/ego.png";
    if (props.aspect === "soul") return "/aspect_thumbs/soul.png";
    return "/aspect_thumbs/self.png";
  };

  return (
    <div className="flex text-center flex-col p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
      <p className="italic font-semibold">{props.date}</p>
      <p className="py-1">{props.text}</p>
      {props.goal && props.aspect && (
        <div className="flex">
          <Image
            src={getCorrectThumbnail()}
            alt={props.aspect + " image thumbnail"}
            className="w-9 h-9 bg-pink-200 p-0.5 rounded-full"
            width={10}
            height={10}
          />
          <p className="py-1 text-pink-200 font-montserrat italic ml-2">
            In search of {props.goal}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dream;
