import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

const Preference = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Thik hai");
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted === true) {
      navigate("/");
    }
  }, [submitted, navigate]);

  return (
    <>
      <div id="profile-body">
        <div className="container">
          <div className="title">List your crush</div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name1"
                    placeholder="Enter name"
                    maxLength="25"
                    required
                  />
                  <span className="details">Phone Number</span>
                  <input
                    type="number"
                    name="phone1"
                    placeholder="Enter your number"
                    min="1000000000"
                    max="9999999999"
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name2"
                    placeholder="Enter name"
                    maxLength="25"
                    required
                  />
                  <span className="details">Phone Number</span>
                  <input
                    type="number"
                    name="phone2"
                    placeholder="Enter your number"
                    min="1000000000"
                    max="9999999999"
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name3"
                    placeholder="Enter name"
                    maxLength="25"
                    required
                  />
                  <span className="details">Phone Number</span>
                  <input
                    type="number"
                    name="phone3"
                    placeholder="Enter your number"
                    min="1000000000"
                    max="9999999999"
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name4"
                    placeholder="Enter name"
                    maxLength="25"
                    required
                  />
                  <span className="details">Phone Number</span>
                  <input
                    type="number"
                    name="phone4"
                    placeholder="Enter your number"
                    min="1000000000"
                    max="9999999999"
                    required
                  />
                </div>
              </div>

              <div className="button">
                <input type="submit" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preference;
