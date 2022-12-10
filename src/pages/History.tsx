import { useNavigate } from "react-router-dom";
import Dream from "../components/Dream";

function HistoryPage(): JSX.Element {
  const navigate = useNavigate();

  function homeHandler() {
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-br from-black to-purple-900 p-4 flex flex-col flex-wrap justify-center items-center bg-cover h-screen font-serif">
      <Dream
        text="doing pup play in the middle of milan grove"
        date="christmas day"
      />
      <Dream text="another one" date="today" />
      <button
        onClick={homeHandler}
        className="mr-10 border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
      >
        Go home
      </button>
    </div>
  );
}

export default HistoryPage;
