export interface valuesType {
  username: string;
  phone: string;
  college: string;
  roll: string;
  gender: string;
}
export const validate = (values: valuesType) => {
  const errors = {
    username: "",
    phone: "",
    college: "",
    roll: "",
    gender: "",
  };
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
  if (!values.gender) {
    errors.gender = "Gender is required";
  }

  return errors;
};

export function validateTeamPhoneNumbers(numbers: string[]) {
  for (const number of numbers) {
    const regexPhone =
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (!regexPhone.test(number)) {
      return 1;
    }
  }
  return 0;
}
