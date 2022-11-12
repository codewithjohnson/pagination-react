import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/users");
  }, []);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
