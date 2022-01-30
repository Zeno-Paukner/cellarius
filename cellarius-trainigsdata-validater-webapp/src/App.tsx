import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="container px-2 pt-5 mx-auto">
      <button type="button" className="flex items-center px-5 py-2.5 text-lg font-medium tracking-wide text-white capitalize transition duration-300 ease-in-out transform bg-green-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 active:scale-95">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                     <span className="pl-2 mx-1">Save</span>
                  </button>
        <textarea className="block w-full mt-1 border-2 border-gray-300 focus:border-gray-800 focus:ring focus:ring-indigo-200 focus:ring-opacity-0"></textarea>
      </div>
    </div>
  );
}

export default App;
