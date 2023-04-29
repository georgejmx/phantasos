import whale from "../assets/whale.png";
import NavigationPane from "../components/NavigationPane";

function MainPage(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-black to-purple-900 p-4 flex flex-col flex-wrap justify-center items-center bg-cover h-screen font-serif">
      <img src={whale} className="w-20 py-6 rounded-lg opacity-60 shadow-md" />
      <h1 className="text-3xl font-bold text-purple-500">Phantasos</h1>
      <p className="italic text-white p-2 text-center">
        "where untold memories are rediscovered..."
      </p>
      <NavigationPane />
    </div>
  );
}

export default MainPage;
