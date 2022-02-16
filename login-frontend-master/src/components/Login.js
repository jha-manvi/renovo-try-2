import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import renovo_logo from "../images/Renovo_Black.jpg"

export default function Login() {
  return (
  <>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        {/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}
      </div>
      <div class="col-lg-6 text-center">
        <img src={renovo_logo} alt="" />
        <h4 class="blue-color mb-5 fw-bold">Welcome to the Automation of the Circular Industry</h4>
        <main class="form-signin">
            <form>
                <div class="form-floating">
                <p class="text-start fs-5">Email</p>
                <input type="email" class="form-control my-3" id="floatingInput" placeholder="name@example.com"/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
                <div class="form-floating">
                <p class="text-start fs-5">Password</p>
                <input type="password" class="form-control my-3" id="floatingPassword" placeholder="********"/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
                <p class="text-end fs-6 blue-color fw-bold" role="button">Forgot your password?</p>
                <button class="w-100 btn btn-lg mb-3 blue-bg text-white" style={{"height": "50px"}} type="submit">Login</button>
                <h4 class="fw-normal mb-3">OR</h4>
                <Link to="/create-new-account" class="signup w-100 btn btn-lg mb-3" type="submit">Create an account</Link>
            </form>
        </main>
      </div>
    </div>
  </div>
  </>)
}
