import React from "react";

function Home({ userdata }) {
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
              <p>{userdata.user.global_name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center grid grid-cols-5 gap-5 ">
        {userdata.guilds.map((v) => {
          return (
            <div
              className="flex flex-col border border-indigo-600 rounded-md bg-slate-600 p-8 justify-center items-center"
              key={v.id}
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
      <div className="justify-center items-center flex w-full h-96 gap-20 ">
        <div className="flex w-250 h-400 flex-col border border-indigo-600 rounded-md bg-slate-600 px-8">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <a href="">
              <p>AAA</p>
            </a>
            <a href="">
              <p>2000$</p>
            </a>
          </div>
          <div className="gap-5 flex">
            <div>
              <button>BUY</button>
            </div>
            <div>
              <button>ADD</button>
            </div>
          </div>
        </div>
        <div className="flex w-250 h-400 flex-col border border-indigo-600 rounded-md bg-slate-600 px-8">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <a href="">
              <p>AAA</p>
            </a>
            <a href="">
              <p>2000$</p>
            </a>
          </div>
          <div className="gap-5 flex">
            <div>
              <button>BUY</button>
            </div>
            <div>
              <button>ADD</button>
            </div>
          </div>
        </div>
        <div className="flex w-250 h-400 flex-col border border-indigo-600 rounded-md bg-slate-600 px-8">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <a href="">
              <p>AAA</p>
            </a>
            <a href="">
              <p>2000$</p>
            </a>
          </div>
          <div className="gap-5 flex">
            <div>
              <button>BUY</button>
            </div>
            <div>
              <button>ADD</button>
            </div>
          </div>
        </div>
        <div className="flex w-250 h-400 flex-col border border-indigo-600 rounded-md bg-slate-600 px-8">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <a href="">
              <p>AAA</p>
            </a>
            <a href="">
              <p>2000$</p>
            </a>
          </div>
          <div className="gap-5 flex">
            <div>
              <button>BUY</button>
            </div>
            <div>
              <button>ADD</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-6 w-100% h-auto gap-16">
        <div className=" w-50% h-40 float-left block ml-4">
          <h3 className="font-semibold text-2xl">TECHNOLOGY PRO 16</h3>
          <p className="block">
            Data transmission has three aspects: transmission, propagation,
            <br />
            and reception.It can be broadly categorized as broadcasting,
            <br /> in which information is transmitted unidirectionally
            downstream,
            <br /> or telecommunications, with bidirectional upstream and
            downstream channels. <br />
            XML has been increasingly employed as a means of data interchange
            since the early 2000s,
            <br />
            particularly for machine-oriented interactions such as those
            involved in web-oriented protocols such as SOAP,
            <br />
            describing "data-in-transit rather than... data-at-rest".
          </p>
        </div>
        <div className=" w-50% float-right ml-4 justify-center items-center h-40 pl-40">
          <h3>dsfsdf</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
