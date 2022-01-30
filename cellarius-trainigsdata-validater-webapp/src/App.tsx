import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import ActionButtons from "./components/actionbuttons.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" App">
      <Navbar />
      <ActionButtons />

      <div className="container px-2 pt-5 mx-auto ">
        <div className="text-left">
          <p>123/6234 Email</p>
        </div>
        <textarea className="block w-full mt-1 border-2 border-white focus:border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-0">Kunden Email</textarea>
        <textarea className="block w-full mt-1 bg-gray-300 border-2 border-gray-300 focus:border-gray-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-0">Palido Replay 1</textarea>
        <textarea className="block w-full mt-1 border-2 border-white focus:border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-0">Kunden Replay 1</textarea>
        <textarea className="block w-full mt-1 bg-gray-300 border-2 border-gray-300 focus:border-gray-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-0">Palido Replay 2</textarea>
        <textarea className="block w-full mt-1 border-2 border-white focus:border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-0">Kunden Replay 2</textarea>
        <textarea className="block w-full mt-1 bg-gray-300 border-2 border-gray-300 focus:border-gray-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-0">Palido Replay 3</textarea>
        
      </div>
    </div>
  );
}

export default App;
