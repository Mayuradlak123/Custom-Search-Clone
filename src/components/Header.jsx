import React, { Fragment, useEffect } from "react";
// import "../App.css"
import AppsIcon from "@mui/icons-material/Apps";
import {Link}  from "react-router-dom";

const Header = () => {
  var isVerify = true;
  useEffect(() => {

  }, [isVerify]);
  return (
    <React.Fragment>
      <div className="header-container">
        <ul>
          {!isVerify ? (
            <>
              
              <li>
                
                <Link> Sign In </Link>
              </li>
              <li>
                
                <Link>Sign Up </Link>
              </li>
            </>
          ) : (
            <div className="profile">
              
              <h4>Welcome </h4> <h4>Mayur Adlak</h4> 
              <Link >Logout</Link>
            </div>
          )}
          <li>
            
            <Link>
              
              <AppsIcon />
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Header;
