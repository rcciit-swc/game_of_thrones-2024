"use client";
import React, { useState, useEffect } from "react";

interface valuesType {
  username: string;
  phone: string;
  college: string;
  roll: string;
  gender: string;
}
const RegForm = () => {
  const initialValues: valuesType = {
    username: "",
    phone: "",
    college: "",
    roll: "",
    gender: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState<any>({});
  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const validate = (values: valuesType) => {
    const errors = { username: "", phone: "", college: "", roll: "" , gender:"" };
    const regexPhone =
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    const regexName = /^[a-zA-Z ]{2,30}$/;
    const regexRoll = /^[a-zA-Z0-9]{2,30}$/;
    const regexCollege = /^[a-zA-Z ]{2,50}$/;
    if (!values.username) {
      errors.username = "Name is required";
    } else if (!regexName.test(values.username)) {
      errors.username = "Name is invalid";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!regexPhone.test(values.phone)) {
      errors.phone = "Phone is invalid";
    }
    if (!values.college) {
      errors.college = "College is required";
    } else if (!regexCollege.test(values.college)) {
      errors.college = "College is invalid";
    }
    if (!values.roll) {
      errors.roll = "Roll is required";
    } else if (!regexRoll.test(values.roll)) {
      errors.roll = "Roll is invalid";
    }
    if(!values.gender){
      errors.gender = "Gender is required";
    }
    return errors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };
 
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="mx-auto w-screen rounded-2xl  bg-[#252525] py-10 md:w-[80%] lg:px-10"
    >
      <div className="flex flex-col  gap-10  px-10">
        <div className="flex w-full flex-col  items-start gap-5">
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Full Name"
            name="username"
            id="username"
            className="w-[95%] rounded-xl border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
          />
          {formErrors.username && (
            <span className="text-sm text-red-500">{formErrors.username}</span>
          )}
        </div>
        <div className="flex flex-col  items-start gap-10">
          <div className="flex  flex-col gap-5 md:w-[60%]">
            <label htmlFor="phone">Phone Number</label>
            <div className="flex  flex-row gap-3">
              <button className="rounded-xl bg-white p-3 text-black ">
                +91
              </button>
              <input
                type="number"
                value={formValues.phone}
                onChange={handleChange}
                name="phone"
                id="phone"
                placeholder="94XXXXXXXX"
                className="w-full rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400"
              />
              {formErrors.phone && (
                <span className="text-sm text-red-500">{formErrors.phone}</span>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-5">
            <label htmlFor="college">College Name</label>
            <input
              type="text"
              name="college"
              value={formValues.college}
              onChange={handleChange}
              id="college"
              placeholder="College Name"
              className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
            />
            {formErrors.college && (
              <span className="text-sm text-red-500">{formErrors.college}</span>
            )}
          </div>
          <div className="flex w-full flex-col items-start gap-5">
            <label htmlFor="roll">College Roll Number</label>
            <input
              type="text"
              name="roll"
              value={formValues.roll}
              onChange={handleChange}
              id="roll"
              placeholder="College Roll Number"
              className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
            />
            {formErrors.roll && (
              <span className="text-sm text-red-500">{formErrors.roll}</span>
            )}
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="gender">Gender</label>
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-16">
            <label className="flex flex-row items-center gap-1">
            <input
              name="gender"
              type="radio"
              value="male"
              className="text-primary"
              checked={formValues.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="flex flex-row items-center gap-1">
            <input
              name="gender"
              type="radio"
              value="female"
              className="text-primary"
              checked={formValues.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label className="flex flex-row items-center gap-1">
            <input
              name="gender"
              type="radio"
              value="others"
              className="text-primary"
              checked={formValues.gender === 'others'}
              onChange={handleChange}
            />
            Others
          </label>
            </div>
            {formErrors.gender && (
              <span className="text-sm text-red-500">{formErrors.gender}</span>
            )}
          </div>

          <input
            type="submit"
            value="Submit"
            className="mx-auto w-[80%] rounded-full bg-primary py-3 font-semibold tracking-wider"
          />
        </div>
      </div>
    </form>
  );
};

export default RegForm;
