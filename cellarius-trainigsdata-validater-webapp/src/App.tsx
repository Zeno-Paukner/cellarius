import React from "react";
import Login from "./components/login.jsx";
import Navbar from "./components/navbar.jsx";
import ActionButtons from "./components/actionButtons.jsx";
import ShortcutPopup from "./components/shortcutPopup.jsx";
import EmailConversation from "./components/emailConversation.jsx";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <ActionButtons />
      <ShortcutPopup />
      <div className="container px-2 pt-5 mx-auto ">
        <div className="flex">
          <div className="flex-1 text-left">
            Ticket: <span className="text-gray-600">#123</span>
          </div>
          <div className="flex-1 text-right">
            Email: 123<span className="text-gray-400">/</span>6234
          </div>
        </div>
        <div className="text-left">
          <p>
            <span className=""></span>
          </p>
        </div>
        <EmailConversation />
      </div>
    </div>
  );
}

export default App;
