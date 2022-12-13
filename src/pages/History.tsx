import Dream from "../components/Dream";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDreams } from "../helper";
import { Dream as DreamType } from "../types/types";

function HistoryPage(): JSX.Element {
  const [dreams, setDreams] = useState<DreamType[]>([]);
  const navigate = useNavigate();

  // Render list of dreams only once as [] provided as second argument
  useEffect(() => {
    getDreams().then((dreams) => {
      setDreams(dreams);
    });
  }, []);

  function homeHandler() {
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-br from-black to-purple-900 p-4 flex flex-col flex-wrap justify-center items-center bg-cover h-screen font-serif">
      <h1 className="text-xl font-bold text-purple-500 underline">
        Full History
      </h1>
      {dreams.map((dream) => (
        <Dream key={dream.id} text={dream.dreamtext} date={dream.date} />
      ))}
      <button
        onClick={homeHandler}
        className="border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
      >
        Go home
      </button>
    </div>
  );
}

export default HistoryPage;
