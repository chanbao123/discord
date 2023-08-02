import React from "react";

function Exitlag() {
  return (
    <div>
      <div className="  p-4 flex gap-10 flex items-center justify-center">
        <div className="w-60 h-64 hover:scale-110 cursor-pointer duration-300">
          <div className="w-250 h-400  bg-pink-100 rounded-2xl">
            <div className="h-300 p-30">
              <div className="w-auto h-250 bg-cover bg-center">
                <img src="./src/OIPLAG.jpg" alt="" className="rounded-t-2xl" />
              </div>
            </div>
            <div clas>
              <div className=" text-black m-3">
                <p className="">ExitLag Vip</p>
                <p>Free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 h-64 hover:scale-110 cursor-pointer duration-300">
          <div className="w-250 h-400  bg-pink-100 rounded-2xl">
            <div className="h-300 p-30">
              <div className="w-auto h-250 bg-cover bg-center">
                <img src="./src/OIPLAG.jpg" alt="" className="rounded-t-2xl" />
              </div>
            </div>
            <div clas>
              <div className=" text-black m-3">
                <p className="">Exit lag Normal</p>
                <p>Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exitlag;