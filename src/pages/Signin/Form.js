import React from "react";
import "./Form.css";
import { useState } from "react";
// import {createUserWithEmailAndPassword} from ".../../utils/firebaee/firebaseutils"

const defaultFormFields = {
  FullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
  confirmpassword: "",
};

const Form = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { FullName, email, phoneNumber, address, password, confirmpassword } =
    setFormFields;

  const handlesubmit =  (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="containering-container">
      <form onSubmit={() => {}} className="create">
        <h1 className="acct">Create An Account</h1>
        <p className="please">Please Enter Your Information</p>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          name="FullName"
          className="logindetails"
          required
          value={FullName}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Email Address"
          name="email"
          className="logindetails"
          required
          value={email}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          className="logindetails"
          required
          value={phoneNumber}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Address"
          name="address"
          className="logindetails"
          required
          value={address}
        />
        <input
          onChange={handleChange}
          className="logindetails"
          type="password"
          placeholder="Password (at least 8 character)"
          name="password"
          required
          value={password}
        />
        <input
          onChange={handleChange}
          className="logindetails"
          type="password"
          placeholder="confrim password"
          name="confirmpassword"
          required
          value={confirmpassword}
        />

        <div className="tips">
          <p>Tips for a strong password:</p>
          <ul className="list">
            <li>
              Create a unique password that you’re not using anywhere else.{" "}
            </li>
            <li>
              use a combination of uppercase and lowercaseletter and numbers.
            </li>
            <li>use special character in your password</li>
          </ul>

          <input type="checkbox" className="checkbox" required />
          <label className="label" for="checkbox">
            by signing up you agree to our terms{" "}
            <a href="#" className="terms">
              {" "}
              terms & CONDITIONS of use and privacy policy.{" "}
            </a>
          </label>
        </div>

        <button type="submit" class="signupbtn">
          Create Account
        </button>
        <h4 className="Orsignup">Or sign up with</h4>
        <div className="hyperlink">
          <a className="btn1">
            {" "}
            <img
              className="img1"
              src="https://raw.githubusercontent.com/Moyeenwaz/pet-store-client/4260b4126a7008a6575cb464e02d9a398e45b147/googleicon.png"
              alt=""
            />{" "}
            Google
          </a>
          <a className="btn2">
            {" "}
            <img
              className="img2"
              src="https://raw.githubusercontent.com/Moyeenwaz/pet-store-client/4260b4126a7008a6575cb464e02d9a398e45b147/facebook.png"
              alt=""
            />
            Facebook
          </a>
        </div>
      </form>
      <form>
        <div className="tracker">
          <h3 className="create-account">
            Creating an account is fast, easy, and free.you’ll be able to manage
            your autoship, track your orders, write reviews, and more!
          </h3>
          <ul className="list">
            <li className="list-track">TRACK YOUR ORDERS </li>
            <li className="list-track">MANAGE AUTOSHIP </li>
            <li className="list-track">VIEW YOUR ORDER HISTORY </li>
            <li className="list-track">RATE AND REVIEW PRODUCTS </li>
            <li className="list-track">
              GET EXCLUSIVE OFFER, DISCOUNT,AND MORE!{" "}
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};
export default Form;
