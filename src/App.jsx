import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  const navigate = useNavigate();
  const handlerLogin = async () => {
    const id = uuidv4();
    const reponse = await axios.get(
      `http://144.126.145.81:8888/auth/discord/${id}`
    );
    localStorage.setItem("id", id);
    window.location.href = reponse.data.auth;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const id_user = localStorage.getItem("id");
      if (id_user !== null) {
        return navigate("/home");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <button
          type="submit"
          className="w-20 h-10 border rounded-lg focus:outline-none hover:border-cyan-500 duration-300"
          onClick={handlerLogin}
        >
          LOGIN
        </button>
      </div>
    </>
  );
}

export default App;
