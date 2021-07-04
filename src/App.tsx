import { Sidebar } from "./components/Sidebar";
import { Search } from "./components/Search";
import { GlobalStyle } from "./styles/global";
import { CharacterProvider } from "./hooks/useCharacter";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <CharacterProvider>
      <GlobalStyle />
      <Sidebar />
      <Search />
      <Dashboard />
    </CharacterProvider>
  );
}

export default App;
