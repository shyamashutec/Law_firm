import React, { ReactElement } from 'react';
import { useRef, useState } from 'react';

export function Signup({
  handleSubmit,
  setCredentials,
  credentials,
  setChecked,
}): ReactElement {
  const [passwordShow, setPasswordShow] = useState(false);
  function handleChange(args) {
    setCredentials((prev) => {
      return {
        firstname: args.firstname ? args.firstname : prev.firstname,
        lastname: args.lastname ? args.lastname : prev.lastname,
        gender: args.gender ? args.gender : prev.gender,
        phoneno: args.phoneno ? args.phoneno : prev.phoneno,
        address: args.address ? args.address : prev.address,
        pincode: args.pincode ? args.pincode : prev.pincode,
        email: args.email ? args.email : prev.email,
        password: args.password ? args.password : prev.password,
      };
    });
  }
  return (
    <div className="w-2/6 m-auto bg-hero  flex flex-col justify-center items-center rounded-xl mt-16 mb-16 shadow-2xl ">
      <div className="w-full  flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold underline mt-5">Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-3/4"
          noValidate
        >
          <div className="block  text-md font-medium text-grey-500">
            <label className="">First Name</label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => handleChange({ firstname: e.target.value })}
              className="block w-full mt-1 h-10 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2 rounded-md"
              placeholder="Firstname"
            />
            <label className="block mt-3">Last Name</label>

            <input
              type="text"
              name="lastname"
              onChange={(e) => handleChange({ lastname: e.target.value })}
              className="block w-full mt-1 h-10 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2 rounded-md"
              placeholder="Lastname"
            />
            <label className="block mt-5">Gender</label>
            <div className="flex flex-row items-center gap-2 mt-2 mb-5">
              <label className="">Male</label>
              <input
                type="radio"
                name="Gender"
                value="male"
                onChange={(e) => handleChange({ gender: e.target.value })}
              />
              <label className="">Female</label>
              <input
                type="radio"
                name="Gender"
                value="female"
                onChange={(e) => handleChange({ gender: e.target.value })}
              />
              <label className="">Other</label>
              <input type="radio" name="Gender" />
            </div>
            <label className="block">Phone number</label>

            <input
              type="number"
              name="phoneno"
              onChange={(e) => handleChange({ phoneno: e.target.value })}
              className=" block w-full mt-1 h-10 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2 rounded-md"
              placeholder="Phoneno"
            />
            <label className="block mt-3">Address</label>

            <textarea
              name="Address"
              onChange={(e) => handleChange({ address: e.target.value })}
              className=" block w-full mt-1 h-16 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2 rounded-md"
              placeholder="Address"
            />
            <label className="block mt-3">Pin Code</label>

            <input
              type="number"
              name="pincode"
              onChange={(e) => handleChange({ pincode: e.target.value })}
              className=" block w-full mt-1 h-10 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2 rounded-md"
              placeholder="pincode"
            />

            <label className="block mt-3">Email</label>

            <input
              type="email"
              name="email"
              onChange={(e) => handleChange({ email: e.target.value })}
              className=" block w-full mt-1 h-10 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2 rounded-md"
              placeholder="email"
            />

            <label className="block mt-3">Password</label>

            <input
              type={passwordShow ? 'text' : 'password'}
              name="password"
              onChange={(e) => handleChange({ password: e.target.value })}
              className=" block w-full mt-1 h-10 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2 rounded-md"
              placeholder="Password"
            />

            <button
              type="button"
              onClick={() => setPasswordShow((prev) => !prev)}
            >
              Show Password
            </button>
            <label className="block mt-3">Confirm Password</label>

            <input
              type="password"
              name="Confirmpassword"
              className=" block w-full mt-1 h-10 pl-2 pr-12 sm:text-sm border-solid border-gray-300 border-2  rounded-md"
              placeholder="confirm Password"
            />
          </div>

          <input
            type="checkbox"
            name=""
            className="mt-5"
            placeholder="terms"
            onChange={() => {
              setChecked((prev) => !prev);
            }}
          />
          <label className="text-md mt-3 ml-3">
            I accept the terms and conditons
          </label>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 mt-3 mb-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Register Me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
