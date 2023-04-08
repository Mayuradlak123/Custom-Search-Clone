
import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const submitHandler = (e) => {
    const Warning = document.getElementById("warn");
    if (email.length === 0 || password.length === 0) {
      Warning.innerText = "Invailid credential";
    }
    else{
      Warning.innerText="";
    }
    e.preventDefault();
  };
  return (
    <div className="signin-container">
      <form action="" onSubmit={submitHandler}>
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
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
