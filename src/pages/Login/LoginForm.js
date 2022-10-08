import React, { useState } from "react";

// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from "./../utils/firebase/firebase.utils";

import "./LoginForm.css";

export const LoginForm = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //    if (response){
  //    const userDocRef = await createUserDocumentFromAuth(response.user);
  //  }
  //   console.log(response);
  // }, [] );

  // const LogIn = () => {
  //   const logGoogleUser = async () => {
  //     const {user} = await signInWithGooglePopup();
  //     const userDocRef = await createUserDocumentFromAuth(user);

  //   const logGoogleRedirectUser = async () => {
  //     const {user} = await signInWithGoogleRedirect();
  //     const userDocRef = await createUserDocumentFromAuth(user);
  //   };

  const [inputText, setInputText] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleUsernameOnChange = (e) => {
    setInputText({
      ...inputText,
      username: e.target.value,
    });
  };
  const handlePasswordOnChange = (e) => {
    setInputText({
      ...inputText,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="welcome-message">Login</p>
          <input
            type="email"
            onChange={handleUsernameOnChange}
            value={inputText.username}
            placeholder="Email Address"
            className="input-field"
          />
          <input
            type="password"
            onChange={handlePasswordOnChange}
            value={inputText.password}
            placeholder="Password"
            className="input-field"
          />
          <div className="forget">
            <div className="remember">
              <input type="checkbox" className="checkbox" required />
              <label>Remember me </label>
            </div>
            <div className="forgotcontainer">
              <a href="#" className="forgotpassword">
                Forgot password
              </a>
            </div>
          </div>
          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};
