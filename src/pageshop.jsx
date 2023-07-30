import React, { useState } from "react";
import Discord from "./Shop/discord";
import Spotify from "./Shop/Spotify";
import Exitlag from "./Shop/exitlag";
import Discordbot from "./Shop/discordbot";

function pageshop() {
  const [action, setAction] = useState("discord");
  return (
    <div>
      <div className="bg-blue-700 p-8">
        <div className="flex justify-between items-center ml-auto mr-auto ">
          <div>
            <h1>LOGO_TECHNOLOGY</h1>
          </div>
          <div className="justify-between w-100 items-center flex gap-20  ">
            <div>
              <a href="" className="hover:text-white">
                HOME
              </a>
            </div>
            <div>
              <a href="" className="hover:text-white">
                PageShop
              </a>
            </div>
            <div>
              <a href="" className="hover:text-white">
                Option3
              </a>
            </div>
          </div>
          <div>
            <a href="">User_Name</a>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 w-60 h-60  text-gray-300 mt-6 border-1 rounded-lg pl-5 pt-6 space-y-4 ml-3">
        <div>
          <p
            className={
              action === "discord"
                ? "hover:text-white cursor-pointer text-white"
                : "hover:text-white cursor-pointer"
            }
            onClick={() => setAction("discord")}
          >
            Discord Nitro
          </p>
        </div>
        <div>
          <p
            className={
              action === "spotify"
                ? "hover:text-white cursor-pointer text-white"
                : "hover:text-white cursor-pointer"
            }
            onClick={() => setAction("spotify")}
          >
            Spotify
          </p>
        </div>
        <div>
          <p
            className={
              action === "exitlag"
                ? "hover:text-white cursor-pointer text-white"
                : "hover:text-white cursor-pointer"
            }
            onClick={() => setAction("exitlag")}
          >
            ExitLag
          </p>
        </div>
        <div>
          <a
            className={
              action === "discordbot"
                ? "hover:text-white cursor-pointer text-white"
                : "hover:text-white cursor-pointer"
            }
            onClick={() => setAction("discordbot")}
          >
            Discord Bot
          </a>
        </div>
      </div>
      {action === "spotify" ? (
        <Spotify />
      ) : action === "exitlag" ? (
        <Exitlag />
      ) : action === "discordbot" ? (
        <Discordbot />
      ) : (
        <Discord />
      )}
    </div>
  );
}

export default pageshop;
