import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login/Login";
import GlobalStyle from "./styled-components/Global/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
