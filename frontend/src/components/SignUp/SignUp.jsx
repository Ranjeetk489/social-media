import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { SIGN_UP_USER } from "../../apollo/mutations";
import { useMutation } from "@apollo/client";
import { ScaleLoader } from "react-spinners";


const SignUp = () => {
    const [registerUser, { data, loading, error }] = useMutation(SIGN_UP_USER);
    const navigate = useNavigate();

    return (
        <div className="c-login top-[5%] p-12 min-w-fit shadow-none md:w-1/4 md:absolute md:left-1/3  md:shadow-md">
            <h2 className="text-3xl mb-1">Sign up</h2>
            <div className="text-slate-900 text-base mb-4">Portal to a whole new world!</div>
            <Formik
                initialValues={{ email: "", password: "", firstname: "", lastname: "", username: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "This field is Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                        errors.password = "This field is Required";
                    }
                    if (!values.firstname) {
                        errors.firstname = "This field is Required";
                    }
                    if (!values.lastname) {
                        errors.lastname = "This field is Required";
                    }
                    if (!values.username) {
                        errors.username = "This field is Required";
                    }
                    return errors;
                }}
                onSubmit={ async (values, { setSubmitting }) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                    await registerUser({ variables: values });
                    if (!error) {
                        console.log(data);
                        // navigate("/dashboard");
                    }
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="wrapper flex w-80 relative" >
                                <div className="inline-flex flex-col w-[45%]">
                                    <label htmlFor="firstname" className="text-l my-1">First Name</label>
                                    <input type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstname}
                                        className="p-2 border-2 border-slate-600 rounded-md mb-2"
                                    />  
                                    <div className="text-red-500">{errors.firstname && touched.firstname && errors.firstname}</div>
                                </div>
                                <div className="inline-flex flex-col w-[45%] absolute -right-0">
                                    <label htmlFor="lastname" className="text-l my-1 w-fit">Last Name</label>
                                    <input type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastname}
                                        className="p-2 border-2 border-slate-600 rounded-md mb-2  inline-block"
                                    />
                                    <div className="text-red-500">{errors.lastname && touched.lastname && errors.lastname}</div>
                                </div>
                            </div>
                        <label htmlFor="username" className="text-l m-1">Username</label>
                        <input type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            className="p-2 border-2 border-slate-600 rounded-md mb-2 w-80"
                        />
                        <div className="text-red-500">{errors.username && touched.username && errors.username}</div>
                        {/* //Email */}
                        <label className="text-l mb-1" htmlFor="email" >Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                            className="p-2 border-2 border-slate-600 rounded-md mb-2 w-80"
                        />
                        <div className="text-red-500">{errors.email && touched.email && errors.email}</div>
                        <label className="text-l mb-1" htmlFor="password" >Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className="p-2 border-2 border-slate-600 rounded-md mb-2 w-80 "
                        />
                        <div className="text-red-600">{errors.password && touched.password && errors.password}</div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-primary p-2 text-white text-xl w-80 mt-4 rounded-xl active:bg-primary-dark focus:ring">
                            {loading ? <ScaleLoader height={10} speedMultiplier={0.75}/> : "Sign up"}
                        </button>
                        {error && <div className="mt-2 text-primary-dark">{error.message}</div>}
                    </form>
                )}
            </Formik>
            <div className="text-slate-700 mt-6">Already a user?</div>
                <button className="text-slate-800 p-2 text-xl w-80 mt-1  rounded-xl bg-white border-2 border-slate-800 hover:bg-slate-800 hover:text-white active:bg-slate-900 focus:ring" onClick= {() => {navigate('/sign_in')}}>Sign in</button>
        </div>
    );
};

export default SignUp;
