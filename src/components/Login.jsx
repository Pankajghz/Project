import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  document.title = "Matchup login";

  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false); // Corrected typo here
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm({});
    setSubmitted(true); // Corrected typo here
  };

  useEffect(() => {
    if (submitted) {
      navigate("/otp");
    }
  }, [submitted, navigate]);

  return (
    <div id="profile-body">
      <div className="container">
        <div className="title">Login</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Mobile Number</span>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your Number"
                  min="1000000000"
                  max="9999999999"
                  onChange={handleInputChange}
                  value={form.phone || ""} // Corrected value binding
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                  minLength="6"
                  maxLength="15"
                  onChange={handleInputChange}
                  value={form.password || ""}
                  required
                />
              </div>
            </div>
            <input type="checkbox" onClick={togglePasswordVisibility} /> Show
            Password
            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
