import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Setting/Setting";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Header />}></Route>
        <Route
          exact
          path="/register"
          element={user ? <Header /> : <Register />}
        ></Route>
        <Route
          exact
          path="/login"
          element={user ? <Header /> : <Login />}
        ></Route>
        <Route
          exact
          path="/write"
          element={user ? <Write /> : <Register />}
        ></Route>
        <Route
          exact
          path="/settings"
          element={user ? <Setting /> : <Register />}
        ></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </>
  );
};

export default App;
