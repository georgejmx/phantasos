import { useState } from "react";
import RecordDream from "../components/RecordDream";
import RediscoverDream from "../components/RediscoverDream";
import whale from "../assets/whale.png";

function MainPage(): JSX.Element {
  const [isRecordingDream, setRecordingDream] = useState(false);
  const [isRediscovering, setRediscovering] = useState(false);

  function recordHandler() {
    setRecordingDream(true);
  }

  function rediscoverHandler() {
    setRediscovering(true);
  }

  function stopRecordHandler() {
    setRecordingDream(false);
  }

  function stopRediscovering() {
    setRediscovering(false);
  }

  return (
    <div className="bg-gradient-to-br from-black to-purple-900 p-4 flex flex-col flex-wrap justify-center items-center bg-cover h-screen font-serif">
      <img src={whale} className="w-20 py-6 rounded-lg opacity-60 shadow-md" />
      <h1 className="text-3xl font-bold text-purple-500">Phantasos</h1>
      <p className="italic text-white p-2 text-center">
        "where untold memories are rediscovered..."
      </p>
      <div className="flex flex-row p-8">
        <button
          onClick={rediscoverHandler}
          className="mr-10 border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
        >
          Rediscover Dream
        </button>
        <button
          onClick={recordHandler}
          className="border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
        >
          Record Dream
        </button>
      </div>
      {isRecordingDream && (
        <RecordDream
          onCancel={stopRecordHandler}
          onConfirm={stopRecordHandler}
        />
      )}
      {isRediscovering && <RediscoverDream onCancel={stopRediscovering} />}
    </div>
  );
}

export default MainPage;
