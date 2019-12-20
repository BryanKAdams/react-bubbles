import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const CTA = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth().get("http://localhost:5000/api/colors")
      .then(res => {
        console.log(res.data);
        setColorList(res.data);
      })
  }, [])
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 Auto"
}
  return (
    <div style={divStyle}>
    <h1>
      Login to Our App to modify or add new bubbles!
    </h1>
      <Bubbles colors={colorList} />
    </div>
  );
};

export default CTA;
