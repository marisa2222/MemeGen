import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useLocation, useParams } from "react-router-dom";

const CreateMeme = () => {
  const params = useParams(); // { templateId:6565 }
  const location = useLocation();
  const [imgUrl] = useState(location.state.imgUrl);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [memUrl, setMemUrl] = useState("");


  const handleClick = () => {
    let data = new FormData();
    data.append("template_id", params.templateId);
    data.append("text0", text1);
    data.append("username", "MaryamSharifi");
    data.append("password", "161Ui49DUp*K");
    data.append("text1", text2);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.imgflip.com/caption_image",
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        if (response.data.success === true) {
            setMemUrl(response.data.data.url);
        } else {
          alert(response.data.error_message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange1 = (e) => {
    setText1(e.target.value);
  };

  const onChange2 = (e) => {
    setText2(e.target.value);
  };

  return (
    <div>
      <br />
      <br />
      <div>
        <p>Text1</p>
        <input type="text" onChange={onChange1} value={text1}></input>
      </div>
      <div>
        <p>Text2</p>
        <input type="text" onChange={onChange2} value={text2}></input>
      </div>
      <div>
        <button onClick={handleClick}>Post information</button>
        <div style={{ display: "flex", flexDirection: "row", width: "300px" }}>
          <img src={imgUrl} width="300px" />
          <img src={memUrl} width="300px" />
        </div>
      </div>
    </div>
  );
};

export default CreateMeme;
