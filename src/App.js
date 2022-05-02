import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./routes/Login/Login";
import NotFound from "./routes/NotFound/NotFound";
import Register from "./routes/Register/Register";
import UserDetail from "./routes/Users/UserDetail";
import UserList from "./routes/Users/UserList";
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
          <Route path="/register" element={<Register />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
