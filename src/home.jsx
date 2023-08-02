import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  // Check IF User has already logged in identified
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id !== null) {
      const getdata = async (id) => {
        try {
          const { data, status } = await axios.get(
            `http://144.126.145.81:8888/api/datauser/${id}`
          );
          if (status === 200) {
            localStorage.setItem("id", data.access_token);
            setUser(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getdata(id);
    }
  }, []);

  // Check user isLogin
  useEffect(() => {
    const interval = setInterval(() => {
      const id = localStorage.getItem("id");
      if (id === null) {
        return navigate("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div>
      <div className="flex  pt-6 w-100%">
        <div className="bg-blue-700 w-64 h-80 text-gray-300 flex-col border-1 rounded-lg">
          <h3 className="px-20 pt-6">HOME</h3>
          <div>
            <ul className="pl-5 pt-6 space-y-4">
              <li>
                <a href="" className="hover:text-white ">
                  Option 1
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Option 2
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-700 px-8 h-20 flex-col justify-center pt-5  w-full items-center mx-8 rounded-lg border-1  ">
          <div className="flex items-center gap-20 ">
            <div>
              <h2 className="font-semibold text-2xl">TECHNOLOGY PRO</h2>
            </div>
            <div className="flex mx-8 items-center justify-center pl-40">
              <input
                type="text"
                placeholder="Search"
                className="rounded-lg border-1"
              />
              <button></button>
            </div>
            <div>
              <p>{user?.user && user?.user.global_name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center grid grid-cols-5 gap-5 ">
        {user?.guilds.length > 0 &&
          user?.guilds.map((v) => {
            return (
              <div
                className="flex flex-col border border-indigo-600 rounded-md bg-slate-600 p-8 justify-center items-center cursor-pointer"
                key={v.id}
                onClick={() => navigate(`/dashboard/${v.id}`)}
              >
                <div>
                  <img
                    src={`https://cdn.discordapp.com/icons/${v.id}/${v.icon}.png`}
                    alt={`${v.icon}`}
                  />
                </div>
                <div>
                  <a href="">
                    <p>{v.name}</p>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
