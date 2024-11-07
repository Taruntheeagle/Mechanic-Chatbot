import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {!isVisible && (
       <>
       <div className="special" style={{ display: 'flex', alignItems: 'center' }}>
         <img
           src={`${process.env.PUBLIC_URL}/toggle.png`}
           alt="toggle"
           style={{
             height: "27px",
             width: "30px",
             marginLeft: "10px"
           }}
           onClick={toggle}
         />
         <img
           src={`${process.env.PUBLIC_URL}/newchat.png`}
           alt="newchat"
           style={{ height: "41px", width: "40px", marginLeft: "45px",marginRight:'20px' }}
           className="newchat"
         />
          <img
              src={`${process.env.PUBLIC_URL}/m1.jpg`}
              alt="logo"
              style={{ height: "53px", width: "47px", borderRadius: "30px",marginLeft:'30vw',marginRight:'30px' }}
            />
       <p className="mechanic-ai">Mechanic AI</p>
       </div>
     </>
     
      )}

      {isVisible && (
        <div className="sidebar border-end" id="toggle">
          <div className="sidebar-header border-bottom">
            <img
              src={`${process.env.PUBLIC_URL}/m1.jpg`}
              alt="logo"
              style={{ height: "53px", width: "47px", borderRadius: "30px" }}
            />
            <div className="sidebar-brand">Mechanic AI</div>
          </div>
          <div className="icons">
            <img
              src={`${process.env.PUBLIC_URL}/toggle.png`}
              alt="toggle"
              style={{ height: "27px", width: "30px" }}
              className="toggle"
              onClick={toggle}
            />
            <img
              src={`${process.env.PUBLIC_URL}/newchat.png`}
              alt="newchat"
              style={{ height: "41px", width: "40px" }}
              className="newchat"
            />
          </div>
          <ul className="sidebar-nav">
            <li className="nav_title">Previous Chats</li>
          </ul>
        </div>
      )}
    </>
  );
}
