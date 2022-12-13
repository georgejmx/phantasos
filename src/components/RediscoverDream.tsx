import Dream from "./Dream";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RediscoverModalProps } from "../types/types";
import { getRandomDream } from "../helper";
import { Dream as DreamType } from "../types/types";

function RediscoverDream(props: RediscoverModalProps): JSX.Element {
  const [dream, setDream] = useState<DreamType>({
    id: "0",
    dreamtext: "undefined",
    date: "undefined",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getRandomDream().then((dream) => {
      setDream(dream);
    });
  }, []);

  function returnHandler() {
    props.onCancel();
  }

  function historyHandler() {
    navigate("/history");
  }

  return (
    <div className="z-50 fixed inset-2 top-12 overflow-y-auto">
      <div className="flex items-end justify-center text-center md:items-center sm:block">
        <div className="inline-block max-w-prose overflow-hidden text-left transition-all transform bg-gradient-to-br from-zinc-900 to-black font-serif 2xl:max-w-2xl xl:w-3/5">
          <div className="relative py-3 md:px-10 border border-b-4 border-purple-500 px-2">
            <h1 className="mb-3 text-purple-500 font-semibold font-xl underline-offset-1">
              An illusion from the past..
            </h1>

            <Dream key={dream.id} text={dream.dreamtext} date={dream.date} />

            <div>
              <button
                className="mr-2 rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                onClick={returnHandler}
              >
                Go back
              </button>
              <button
                className="mr-2 rounded border-2 border-purple-500 p-2 text-purple-500 bg-black"
                onClick={historyHandler}
              >
                Show full history
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RediscoverDream;
