import { useState } from "react";

function App() {
  const [action, setaction] = useState();
  return (
    <div className="flex flex-row h-screen w-full  text-white">
      <div className="basis-1/6 bg-[#1c1c1c] border-r">
        <div>Left Part</div>
      </div>

      <div className="overflow-hidden flex flex-col bg-[#1c1c1c] w-full">
        <div className="sticky h-[30px] z-30 t-0 r-0 flex flex-row gap-4 w-full justify-end p-10">
          <p>Settings</p>
          <p>Notification</p>
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
            <p className="hover:text-white">All Plugins</p>
            <p
              className={
                action === "PopularPlugins "
                  ? "hover:text-white cursor-pointer text-white"
                  : "hover:text-white cursor-pointer"
              }
              onClick={() => setaction("PopularPlugins")}
            >
              Popular Plugins
            </p>
            <p className="hover:text-white">Server Management</p>
            <p className="hover:text-white">Utilities</p>
            <p className="hover:text-white">Social Alerts</p>
            <p className="hover:text-white">Game & Fun</p>
            <p className="hover:text-white">MEE6 AI</p>
            <p className="hover:text-white">Monetization</p>
            <p className="hover:text-white">Wed3</p>
          </div>
          <hr />
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
        </div>
      </div>
    </div>
  );
}
export default App;
