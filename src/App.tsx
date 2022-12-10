import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import HistoryPage from "./pages/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
