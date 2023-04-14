import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import style from "../../App.css";
import GithubButton from "react-github-login-button";
import AppleLogin from "react-apple-login";
import axios from "axios";
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
        method: "POST",
        body: JSON.stringify(parseData),
        headers: { "Content-Type": "application/json" },
      }).then(async (res) => {
        if (res.status == 200) {
          const url = `http://localhost:3000/read/${email}`;
          const userData = await axios.get(url);
          alert(userData.data.name);
          console.log(userData.data);
          localStorage.setItem("name",userData.data.name)
          localStorage.setItem("isVerify","Verified");
          setTimeout(() => {
            window.open('http://localhost:3001')
            
          }, 1000);
        }
      });
    }
  };
  return (
    <div className={"signin-container"}>
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <span>
          Create new Account <Link href="/signup">Sign Up</Link>{" "}
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
