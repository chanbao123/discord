import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./home";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [islogin, setLogin] = useState(false);
  const [user, setUser] = useState();
  const id_user = localStorage.getItem("id");
  const discordauth = localStorage.getItem("discordauth");
  const handlerLogin = async () => {
    const id = uuidv4();
    const reponse = await axios.get(
      `http://144.126.145.81:8888/auth/discord/${id}`
    );
    window.location.href = reponse.data.auth;
    localStorage.setItem("user", reponse.data.user);
    localStorage.setItem("id", id);
    console.log(reponse.data);
  };

  useEffect(() => {
    if (discordauth !== null) {
      try {
        const getData = async () => {
          const data = await axios.get(
            `http://144.126.145.81:8888/api/datauser/${discordauth}`
          );
          setUser(data.data);
          setLogin(true);
          console.log(data.data);
        };
        getData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [discordauth]);

  return (
    <>
      {islogin ? (
        <Home userdata={user} />
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <button
            type="submit"
            className="w-20 h-10 border rounded-lg focus:outline-none hover:border-cyan-500 duration-300"
            onClick={handlerLogin}
          >
            LOGIN
          </button>
        </div>
      )}
    </>
  );
}

export default App;
