import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
const Formik = () => {
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            username:yup.string().min(3, "Username is too short").max(15, "Usename has exceed the 15 chrarcter").lowercase().required("Username is required"),
            email:yup.string().email("Invalid email").required("email is required").lowercase(),
            password:yup.string().min(6, "Password must have atleast 6 characters").matches(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ , 'Password can only contain letters, numbers,Uppercase, and special characters').required("password is required")
        }),
        onSubmit:(value)=>{
           axios.post("http://localhost:4568/user",value)
           .then((res)=>{
            console.log(res);
            formik.setValues({
                username:"",
                email:"",
                password:""
            })
            toast.success("sign up successful")
           }).catch((err)=>{
            console.log(err);
            
           })
           
        }
    })

    console.log(formik.errors);
    console.log(formik.touched);
    
  return (
    <div>
        
        <form onSubmit={formik.handleSubmit} className='w-50 mx-auto px-3 py-3 shadow' action="">
            <h1>Signup</h1>
            <div className='form-group mt-3'>
                <label htmlFor="">Username</label>
                <input value={formik.values.username} onBlur={formik.handleBlur} className='form-control' name='username' onChange={formik.handleChange} type="text" />
                <small className='text-danger'>{formik.touched.username && formik.errors.username}</small>
            </div>
            <div className='form-group mt-3'>
                <label htmlFor="">Email</label>
                <input value={formik.values.email} onBlur={formik.handleBlur} className='form-control' name='email' onChange={formik.handleChange} type="text" />
                <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
            </div>
            <div className='form-group mt-3'>
                <label htmlFor="">Password</label>
                <input value={formik.values.password} onBlur={formik.handleBlur} className='form-control' name='password' onChange={formik.handleChange} type="text" />
                <small className='text-danger'>{formik.touched.password  && formik.errors.password}</small>

            </div>
            <button >
                Submit
            </button>
          
        </form>
    </div>
  )
}

export default Formik