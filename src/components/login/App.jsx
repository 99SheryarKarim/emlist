import React, { useState } from "react";
import "./Login.css";
const LoginPage = () => {
  const [isLoginTabActive, setLoginTabActive] = useState(true);
  const toggleTabs = () => {
    setLoginTabActive(!isLoginTabActive);
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="tabs">
          <h3
            id="login-txt"
            className={`login-tab ${isLoginTabActive ? "active" : ""}`}
            onClick={toggleTabs}
          >
            Login
          </h3>
          <h3
            className={`signup-tab ${!isLoginTabActive ? "active" : ""}`}
            onClick={toggleTabs}
          >
            Sign Up
          </h3>
        </div>
        <div className="content">
          {isLoginTabActive ? (
            <div id="login-tab-content" className="tab-content active">
              {/* Login Form */}
              <form>
                <label>Email:</label>
                <input id="inp1" type="email" placeholder="Enter your email" />
                <label>Password:</label>
                <input
                  id="inp1"
                  type="password"
                  placeholder="Enter your password"
                />
                <button id="login-btnn" type="submit">
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div id="signup-tab-content" className="tab-content active">
              {/* Sign Up Form */}
              <form>
                <label>Email:</label>
                <input id="inp1" type="email" placeholder="Enter your email" />
                <label>Password:</label>
                <input
                  id="inp1"
                  type="password"
                  placeholder="Enter your password"
                />
                <label>Confirm Password:</label>
                <input
                  id="inp1"
                  type="password"
                  placeholder="Confirm your password"
                />
                <button id="login-btnn" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
