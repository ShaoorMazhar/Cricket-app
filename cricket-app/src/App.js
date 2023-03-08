import "./App.css";
import LeaderBoardPage from "./pages/leaderBoardPage";
import ButtonAppBar from "./components/header";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "primary.light" }}>
      <ButtonAppBar />
      <LeaderBoardPage />
    </div>
  );
}

export default App;
