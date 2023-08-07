import React, { useState } from "react";
import Gameandfun from "./plugin/Gameandfun";
import Web3 from "./plugin/Web3";
import Mee6ai from "./plugin/Mee6ai";
import Monetization from "./plugin/Monetization";
import Popularplugins from "./plugin/Popularplugins";
import Servermanagement from "./plugin/Servermanagement";
import Socialalerts from "./plugin/Socialalerts";
import Utilities from "./plugin/Utilities";
import Compoment from "./Composment/Compoment";

function App() {
  const [action, setaction] = useState("allplugins");
  return (
    <div className="flex flex-row h-screen w-full  text-white">
      <div className="basis-1/6 bg-[#1c1c1c] border-r">
        <div>Left Part</div>
      </div>

      <div className="overflow-hidden flex flex-col bg-[#1c1c1c] w-full">
        <div className="sticky h-[30px] z-30 t-0 r-0 flex flex-row gap-4 w-full justify-end p-10">
          <p>Settings</p>
          <p>Notification</p>
          <Compoment />
          <p>User_Name</p>
        </div>
        <div className="bg-[#26292f] h-screen overflow-y-auto">
          <div className=" m-4 rounded-md bg-[#891a5d] p-20">
            <p>Set img or video</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl m-4">Plugins</h1>
          </div>
          <div className="m-4 flex flex-row gap-6">
            <p
              className={
                action === "allplugins"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("allplugins")}
            >
              All Plugins
            </p>
            <p
              className={
                action === "popularPlugins"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("popularPlugins")}
            >
              Popular Plugins
            </p>
            <p
              className={
                action === "Servermanagement"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("Servermanagement")}
            >
              Server Management
            </p>
            <p
              className={
                action === "Utilities"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("Utilities")}
            >
              Utilities
            </p>
            <p
              className={
                action === "Socialalerts"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("Socialalerts")}
            >
              Socialalerts
            </p>
            <p
              className={
                action === "gameandfun"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("gameandfun")}
            >
              Game & Fun
            </p>
            <p
              className={
                action === "mee6ai"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("mee6ai")}
            >
              MEE6 AI
            </p>
            <p
              className={
                action === "monetization"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("monetization")}
            >
              Monetization
            </p>
            <p
              className={
                action === "web3"
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer text-white/80"
              }
              onClick={() => setaction("web3")}
            >
              Web3
            </p>
          </div>
          <hr />
          {action === "gameandfun" ? (
            <Gameandfun />
          ) : action === "mee6ai" ? (
            <Mee6ai />
          ) : action === "monetization" ? (
            <Monetization />
          ) : action === "web3" ? (
            <Web3 />
          ) : action === "popularplugins" ? (
            <Popularplugins />
          ) : action === "Socialalerts" ? (
            <Socialalerts />
          ) : action === "Utilities" ? (
            <Utilities />
          ) : action === "Servermanagement" ? (
            <Servermanagement />
          ) : (
            <div className="m-4 grid-cols-4 grid gap-6">
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="bg-[#131417] hover:opacity-[1] opacity-[.8] duration-300 w-64 h-52 rounded-md "
              >
                <div className="m-2 flex flex-col gap-4">
                  <div className="bg-[#011f4b] w-10 h-10 m-4 rounded-md">
                    <p> </p>
                  </div>
                  <div className="font-bold">
                    <p>Server Discovery</p>
                  </div>
                  <div>
                    <p>Grow your community for free</p>
                  </div>
                  <div>
                    <button className="rounded-sm bg-[#a7adba] w-20">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
