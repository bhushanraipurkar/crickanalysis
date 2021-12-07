import React from 'react';
import "./CSS/preview.css";
import img1 from "../images/collage.png";

const Cool_preview = () => {
    return (
      <>
        <div className="container">
  <img src={img1} alt="Norway" style={{width:'85%',height:'500px',marginLeft:'-10%'}}/>
  <div className="wrapper">
  <div className="animated-title">
  <div className="text-top">
    <div>
      <span>Find your</span>
      <span>and do hardwork for that</span>
    </div>
  </div>
  <div className="text-bottom">
    <div>dream</div>
  </div>
</div>
</div>
</div>

</>
    )
}

export default Cool_preview;
