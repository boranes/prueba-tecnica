import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./routes/Login/Login";
import GlobalStyle from "./styled-components/Global/GlobalStyle";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const defaultRedirect = (path) => {
    return isLoggedIn ? path : "/login";
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to={defaultRedirect("/users")} replace />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
