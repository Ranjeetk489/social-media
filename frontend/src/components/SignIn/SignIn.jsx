import React from "react";
import { Formik } from "formik";
import {useMutation} from "@apollo/client";
import {LOG_IN_USER} from '../../apollo/mutations';
import { useNavigate } from "react-router";
import { ScaleLoader } from "react-spinners";


const SignIn = () => {
    const navigate = useNavigate();
    const [loginUser, {data, loading, error}] = useMutation(LOG_IN_USER);


    return <div className="c-login top-[10%] p-12 min-w-fit shadow-none md:w-1/4 md:relative  md:left-1/3  md:shadow-md">
    <h2 className="text-3xl mb-1">Sign in</h2>
    <div className="text-slate-900 text-base mb-6">A New World is waiting for you!</div>
    <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
            const errors = {};
            if (!values.email) {
                errors.email = "This field is Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }
            else if(!values.password) {
                errors.password = "This field is Required";
            }
            return errors;
        }}
        onSubmit=  { async (values) => {
            // setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //     setSubmitting(false);
            // }, 400);
            await loginUser({variables: values});
            if(!error) {
                console.log(data);
                navigate('/dashboard');
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
            <form onSubmit={handleSubmit} className="flex flex-col justify-center ">
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
                <div className="text-red-600">{errors.email && touched.email && errors.email}</div>
                <label className="text-l mb-1" htmlFor="password" >Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="p-2 border-2 border-slate-600 rounded-md mb-2 w-80"
                />
                <div className="text-red-600">{errors.password && touched.password && errors.password}</div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary p-2 text-white text-xl w-80 mt-4 rounded-xl active:bg-primary-dark focus:ring">
                    {loading ? <ScaleLoader size={5} height= {10} color="#fff"  /> : "Sign in"}
                </button>
                {error && <div className="mt-2 text-primary-dark">{error.message}</div>}
                
            </form>
        )}
    </Formik>
    <div className="text-slate-700 mt-6">Don't have an account?</div>
    <button className="text-slate-800 p-2 text-xl w-80 mt-1  rounded-xl bg-white border-2 border-slate-800 hover:bg-slate-800 hover:text-white active:bg-slate-900 focus:ring" onClick={() => {navigate('/sign_up')}}>Sign up</button>
</div>
};

export default SignIn;


