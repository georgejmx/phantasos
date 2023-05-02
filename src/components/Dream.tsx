import { DreamProps } from "../types/types";
import ego from "../assets/aspect_thumbs/ego.png";
import soul from "../assets/aspect_thumbs/soul.png";
import self from "../assets/aspect_thumbs/self.png";

function Dream(props: DreamProps): JSX.Element {
  // Return correct image import in JSX
  const getCorrectThumbnail = () => {
    if (props.aspect === "ego") return ego;
    if (props.aspect === "soul") return soul;
    return self;
  };

  return (
    <div className="flex text-center flex-col p-2 my-4 rounded opacity-75 bg-gradient-to-br from-pink-700 to-purple-700">
      <p className="italic font-semibold">{props.date}</p>
      <p className="py-1">{props.text}</p>
      {props.goal && props.aspect && (
        <div className="flex">
          <img
            className="w-9 h-9 bg-pink-200 p-0.5 rounded-full"
            src={getCorrectThumbnail()}
            alt={props.aspect + " image thumbnail"}
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
