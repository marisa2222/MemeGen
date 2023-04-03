import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Memes() {
  const [memes, setMemes] = useState([]);

  useEffect(function () {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(function (response) {
        if (response.data.success) {
          setMemes(response.data.data.memes);
        }
      })
      .catch(function (error) {
        alert(error);
      })
      .finally(function () {
        // always executed
      });
  });

  return (
    <div className="App">
      {memes.map(function (mem) {
        return (
          <div key={mem.id}>
            <p>Name :{mem.name}</p>
            <p>ID :{mem.id}</p>
            <img src={mem.url} width="150" height="150" />
            <div>
              <NavLink to={"/memes/" + mem.id} state={{ imgUrl: mem.url }}>
                Create Meme
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Memes;
