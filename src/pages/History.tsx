import Dream from "../components/Dream";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDreams } from "../helper";
import { Dream as DreamType } from "../types/types";

function HistoryPage(): JSX.Element {
  const [dreams, setDreams] = useState<DreamType[] | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("Loading..");
  const navigate = useNavigate();

  useEffect(() => {
    getDreams()
      .then((dreams) => {
        setDreams(dreams);
      })
      .catch((error) => {
        console.error(error);
        setAlertMessage(error.message || "Error.");
      });
  }, []);

  function homeHandler() {
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-br from-black to-purple-900 p-4 flex flex-col justify-center items-center bg-cover h-screen font-serif">
      <h1 className="text-xl font-bold text-purple-500 underline">
        Full History
      </h1>
      {dreams ? (
        <div className="overflow-auto">
          {dreams.map((dream) => (
            <Dream
              key={dream.id}
              text={dream.dreamtext}
              date={dream.date}
              archetypeId={dream.archetypeId}
            />
          ))}
        </div>
      ) : (
        <p className="text-cyan-500 italic p-2 my-4">{alertMessage}</p>
      )}
      <button
        onClick={homeHandler}
        className="border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900 mt-2"
      >
        Go home
      </button>
    </div>
  );
}

export default HistoryPage;
