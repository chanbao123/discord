import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  ChevronDownIcon,
  Squares2X2Icon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
export default function Tool() {
  const [action, setAction] = useState([]);
  const handleOpen = (e, type) => {
    e.preventDefault();
    const Check = action.filter((v) => v.name === type);
    if (Check.length > 0) {
      return setAction(action.filter((v) => v.name !== type));
    } else {
      return setAction([...action, { name: type, status: true }]);
    }
  };
  return (
    <div className="basis-[20%] border-r border-white bg-black bg-opacity-[0.85]">
      <div className="flex flex-row justify-center items-center">
        <p>Logo</p>
        <p>name</p>
      </div>
      <div className="flex justify-center items-center p-8">
        <div className="text-right w-full">
          <Menu as="div" className="relative inline-block w-full">
            {({ open }) => (
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Change Me
                  <ChevronDownIcon
                    className={`${
                      open ? " rotate-180" : "rotate-0"
                    } ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100 duration-300`}
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right rounded-md bg-black bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-500 bg-opacity-20 text-white"
                              : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-500 bg-opacity-20 text-white"
                              : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-500 bg-opacity-20 text-white"
                              : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Archive
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-500 bg-opacity-20 text-white"
                              : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Move
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-500 bg-opacity-20 text-white"
                              : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        </div>
      </div>
      <div className="flex flex-col p-8 text-gray-500">
        <div className="flex flex-row gap-4 hover:bg-black hover:bg-opacity-20 p-2 rounded-md items-center">
          <Squares2X2Icon className="h-5 w-5 " />
          Dashboard
        </div>
        <div className="flex flex-row gap-4 hover:bg-black hover:bg-opacity-20 p-2 rounded-md items-center">
          <TrophyIcon className="h-5 w-5 " />
          Leaderboard
        </div>
      </div>
      <div className="flex flex-col p-8 text-white">
        <div className="flex flex-col gap-4  p-2 rounded-md items-center justify-between uppercase text-xs font-bold">
          <div
            className="flex flex-row w-full justify-between"
            onClick={(e) => handleOpen(e, "sv_mn")}
          >
            <p>server management</p>
            <ChevronDownIcon
              className={`h-5 w-5 ${
                action.filter((v) => v.name === "sv_mn").length > 0
                  ? "rotate-180"
                  : "rotate-0"
              } duration-300`}
            />
          </div>
          {action.filter((v) => v.name === "sv_mn").length > 0 && (
            <div className="w-full text-gray-500">
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Automations</p>
              </div>
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Black List</p>
              </div>
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Text To Speak</p>
              </div>
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Join To Create</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4  p-2 rounded-md items-center justify-between uppercase text-xs font-bold">
          <div
            className="flex flex-row w-full justify-between"
            onClick={(e) => handleOpen(e, "leaderboard")}
          >
            <p>Leaderboard</p>
            <ChevronDownIcon
              className={`h-5 w-5 ${
                action.filter((v) => v.name === "leaderboard").length > 0
                  ? "rotate-180"
                  : "rotate-0"
              } duration-300`}
            />
          </div>
          {action.filter((v) => v.name === "leaderboard").length > 0 && (
            <div className="w-full text-gray-500">
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Option1</p>
              </div>
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Option2</p>
              </div>
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Option3</p>
              </div>
              <div className="flex flex-row gap-4 items-center hover:bg-black hover:bg-opacity-20 p-2 rounded-lg cursor-pointer hover:text-white ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-500 "></div>
                <p>Option4</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
