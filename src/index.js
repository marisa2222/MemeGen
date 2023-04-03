import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Memes from "./Memes";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Route,Routes,NavLink } from "react-router-dom";
import CreateMeme from "./CreateMeme";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <nav>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/memes">Memes List</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/memes/:templateId" element={<CreateMeme />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
