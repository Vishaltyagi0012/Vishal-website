'use client'; // Next.js App Router के लिए client component
import React from 'react';
import Link from 'next/link'; // Next.js Link component
import { useRouter } from 'next/navigation'; // Next.js navigation
import { useFormik } from 'formik';

const Login = () => {
  const router = useRouter(); // Next.js router
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        let result = await fetch('http://localhost:5000/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'content-type': 'application/json'
          },
        });
        
        result = await result.json();
        
        if (result.auth) {
          localStorage.setItem("user", JSON.stringify(result.user));
          localStorage.setItem("token", JSON.stringify(result.auth));
          router.push("/"); 
        } else {
          alert("Please enter correct details.");
        }
      } catch (error) {
        console.error('Login error:', error);
        alert("An error occurred. Please try again.");
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    }
  });

  return (
    <div className=" h-[100vh] w-[100%] flex bg-blue-400  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="  h-[500px] w[350px] border bg-black mt-5 ml-[500px] rounded-2xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
          <div className=' text-white text-3xl m-12 hover:underline  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>Login</div>
          <form onSubmit={formik.handleSubmit}  className=' px-10 py-3 rounded-xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <input  className=' px-8 py-3 rounded-xl flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              type='text'
              name='email'
              placeholder="Enter Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div className="error  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{formik.errors.email}</div> : null}
            
            <input className=' px-8 py-3 rounded-xl mt-6 flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '
              type='password'
              name='password'
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <div className="error  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{formik.errors.password}</div> : null}

            <button className='bg-amber-500 rounded px-10 py-3 hover:bg-black text-white  mt-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              type='submit' 
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className=' text-white ml-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            Forgot <Link href="/password"><span className=' text-amber-500'>Password</span></Link> ?
          </div>
          
          <div className=' text-white ml-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            Don't have an account ? <Link href="/signup"><span className=' text-amber-500'>Signup</span></Link>
          </div>
       
      </div>
    </div>
  );
}

export default Login;
