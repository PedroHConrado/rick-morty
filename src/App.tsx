import { Sidebar } from "./components/Sidebar";

import { GlobalStyle } from "./styles/global";

import { CharacterProvider } from "./hooks/useCharacter";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";


function App() {

  return (
    <Router >
      <CharacterProvider>
        <GlobalStyle />
        <Sidebar />
        <ToastContainer autoClose={3000} />
        <Routes />
      </CharacterProvider>
    </Router>
  );
}

export default App;
