import React, { Fragment, useEffect, useState } from "react";
// import "../App.css"
// import AppsIcon from "@mui/icons-material/Apps";
import {Link}  from "react-router-dom";

const Header = () => {
  const [name,setName]=useState();
  const [isVerify,setIsVerify]=useState(false);
  useEffect(() => {
    const check=window.localStorage.getItem("isVerify");
    if(check==="Verified" && name){
      setIsVerify(true)
       var name=localStorage.getItem("name");
       setName(name);

    }
  }, [isVerify]);
  const Logout=()=>{
     localStorage.clear();
     window.location.reload();
  }
  return (
    <React.Fragment>
      <div className="header-container">
        <ul>
          {!isVerify ? (
            <>
              
              <li>
                
                <Link to="/signin"> Sign In </Link>
              </li>
              <li>
                
                <Link to="/signup">Sign Up </Link>
              </li>
            </>
          ) : (
            <div className="profile">
              
              <h4>Welcome </h4> <h4>{name}</h4> 
              <Link onClick={Logout}>Logout</Link>
            </div>
          )}
          <li>
            
            <Link>
              
     
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Header;
