import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  gender: yup
    .string()
    .required("Gender required")
    .oneOf(["male", "female", "other"]),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  city: yup.string().required("City is required"),
});

const WithHooksForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    initialState: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName")}
          />
          {errors?.firstName && (
            <span className="error">{errors?.firstName.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register("lastName")}
          />
          {errors?.lastName && (
            <span className="error">{errors?.lastName.message}</span>
          )}
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                {...register("gender")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                {...register("gender")}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                {...register("gender")}
              />
              Other
            </label>
          </div>
          {errors.gender && (
            <span className="error">{errors.gender.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" {...register("email")} />
          {errors?.email && (
            <span className="error">{errors?.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
          {errors?.password && (
            <span className="error">{errors?.password.message}</span>
          )}
        </div>
        <div className="form-group">
          <label>City : </label>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
                <option value="" disabled>
                  Select City
                </option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="nashik">Nashik</option>
              </select>
            )}
          />
          {errors.city && <span className="error">{errors.city.message}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default WithHooksForms;
