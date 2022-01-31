import React from "react";
import ShortcutPopup from "./shortcutpopup.jsx";
export default function ActionButtons() {
  return (
    <div className="min-h-full ">
      <div className="bg-white">
        <div className="container flex items-center justify-between h-16 px-2 mx-auto">
          <div className="flex items-center">
            <div className="md:block">
              <div className="flex items-baseline space-x-3">
                {/* Undo */}
                <button
                  type="button"
                  title="STRG + Z"
                  className="flex items-center  px-3 py-2.5 text-base text-gray-800 font-medium tracking-wide bg-gray-200 capitalize transition duration-100 ease-in-out transform  rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:scale-95"
                >
              
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
                  </svg>
                </button>
                {/* Redo */}
                <button
                  type="button"
                  title="STRG + Y"
                  className="flex items-center px-3 py-2.5 text-base text-gray-800 font-medium tracking-wide bg-gray-200 capitalize transition duration-100 ease-in-out transform  rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" />
                  </svg>
                </button>
                {/* Letzte Email */}
                <button
                  type="button"
                  title="Linke Pfeiltaste"
                  className="flex items-center px-3 py-2.5 text-base text-gray-800 font-medium tracking-wide bg-gray-200 capitalize transition duration-100 ease-in-out transform  rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                  <span className="hidden pl-2 mx-1 md:block">Zurück</span>
                </button>
                {/* Löschen/Nächstes */}
                <button
                  type="button"
                  title="Pfeiltaste nach Unten"
                  className="flex items-center px-3 py-2.5 text-base text-gray-800 font-medium tracking-wide bg-gray-200 capitalize transition duration-100 ease-in-out transform  rounded-md hover:bg-red-200 focus:outline-none focus:bg-red-300 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M8 9h8v10H8z" opacity=".3"></path>
                    <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                  </svg>
                  <span className="hidden pl-2 mx-1 md:block">Löschen/Nächstes</span>
                </button>

                <button
                  type="button"
                  title="Leertaste"
                  className="flex items-center px-3 py-2.5 text-base text-gray-800 font-medium tracking-wide bg-gray-200 capitalize transition duration-100 ease-in-out transform  rounded-md hover:bg-green-200 focus:outline-none focus:bg-green-300 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                  </svg>
                  <span className="hidden pl-2 mx-1 md:block">Speichern/Nächstes</span>
                </button>
              </div>
            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 ">

              <button
                type="button"
                title="Tastatur Kurzbefehle"
                className="flex items-center px-3 py-2.5 text-base text-gray-800 font-medium tracking-wide bg-gray-200 capitalize transition duration-100 ease-in-out transform  rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </button>
              
            
          </div>
        </div>
      </div>
    </div>
  );
}
