import React, { useState } from "react";
import {Link} from "react-router-dom"
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const Warning = document.getElementById("warn");
    if (email.length === 0 || password.length === 0) {
      Warning.innerText = "Invailid credential";
    } else {
      const parseData = {
        email: email,
        password: password,
      };
      const URL = "http://localhost:3000/login";
      await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(parseData),
      }).then((response)=>{
        if(response.status===200){
          window.open("http://localhost:3001/")
        
          console.log(response);
          localStorage.setItem("isVerify","Verified"); 
          alert("Logged in Successfull")
        }
        else{
          alert("Wrong email or password")
          Warning.innerText = "Wrong email or password";
        }
      });
    }
  };
  return (
    <div className="signin-container">
      <form  onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <span>
          Create new Account <a href="">Sign Up</a>{" "}
        </span>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p id="warn"></p>
<button role="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
