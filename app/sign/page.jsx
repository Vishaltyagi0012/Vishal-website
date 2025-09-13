'use client'; // Next.js App Router के लिए client component
import { useState, useEffect } from "react";
import React from 'react'
import Link from 'next/link'; // Next.js Link component
import { useRouter } from 'next/navigation'; // Next.js navigation

const Sign = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter(); // Next.js router
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            router.push('/') // Next.js navigation
        }
    }, [router]);

    const collectData = async (e) => {
        e.preventDefault(); // Form submission को prevent करें
        
        try {
            console.warn(name, email, password);
            let result = await fetch('http://localhost:5000/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'content-type': 'application/json'
                },
            })
            
            result = await result.json();
            console.warn(result);
            
            if (result.result && result.auth) {
                localStorage.setItem("user", JSON.stringify(result.result));
                localStorage.setItem("token", JSON.stringify(result.auth));
                router.push('/'); // Success के बाद redirect
            } else {
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className="h-[115vh] w-[100%] flex bg-blue-400  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className=" h-[550px] w[400px] border bg-black mt-5 ml-[500px] rounded-2xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='text-white text-3xl m-12 hover:underline  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>Sign up</div>
                    <form onSubmit={collectData} className=' px-12 py-3 rounded-xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <input className=' px-8 py-3 rounded-xl flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Your Name"
                            required 
                        />
                        <input className=' px-8 py-3 rounded-xl mt-6  flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email"
                            type="email"
                            required 
                        />
                        <input className=' px-8 py-3 rounded-xl mt-6  flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password"
                            type="password"
                            required 
                        />

                        <button className=" text-white bg-amber-500 rounded-2xl px-6 py-3 hover:bg-black  mt-5 flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" type="submit">Register</button>
                        <Link href="/loginp">
                            <button className=" text-white mt-1 ml-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" type="button">Have an account already?<span className=" text-amber-500">Log in</span></button>
                        </Link>
                    </form>
                    
                    <div className=' text-white text-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>__________OR__________</div>
                    
                    <div className=' text-white bg-green-500 rounded-2xl h-10  w-60 ml-12 mt-5 text-center text-xl hover:bg-black  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <button type="button">Continue With Google</button>
                    </div>
                
            </div>
        </div>
    )
}

export default Sign;
