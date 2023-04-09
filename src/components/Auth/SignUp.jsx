import React, { useState } from "react";
// import {Link} from 'react-router-dom'
import "../../App.css";
import axios from "axios";
function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const submitHandler = async (e) => {
    let warning = document.getElementById("war");
    e.preventDefault();
    if (!name || !email || !phone || !password) {
      warning.innerText = "All field Required";
      return;
    }
    if (password != cpassword) {
      warning.innerText = "Password doesn't match";
      return;
    } else {
      warning.innerText = "";
    }
    const parseData = {
      name: name,
      email: email,
      contact: phone,
      password: password,
    };
    await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parseData),
    }).then((res) => {
      console.log(parseData);
      window.localStorage.setItem("email", parseData.email);
      window.localStorage.setItem("name", parseData.name);
      alert("User Registered Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
    //    await axios
    //       .post("http://localhost:3000/register", {

    //         body: parseData,
    //       })
    //       .then((res) => {
    //         console.log(parseData);
    //         alert("User Registered Successfully");
    //         window.location.reload();
    //       })
    //       .catch((er) => {
    //         alert("Failed to Register User");
    //       });
  };
  return (
    <div className="signup-container">
      <form action="" onSubmit={submitHandler}>
        <h3>Sign Up</h3>
        <span>
          Already Registered ? <a href="">Sign in</a>
        </span>
        <br />
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email"
        />
        <input
          type="number"
          name="contact"
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Your Number"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Create Password"
        />
        <input
          type="password"
          name="cpassword"
          onChange={(e) => setCpassword(e.target.value)}
          required
          placeholder="Confirm Password"
        />
        <p id="war"></p>
        <button href="">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;