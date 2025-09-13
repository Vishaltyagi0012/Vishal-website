'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [subject, setSubject] = useState("");
    const [address, setAddress] = useState("");
    const router = useRouter(); // Next.js router hook

    const collectData = async (e) => {
        e.preventDefault();
        console.warn(name, email, city, subject, address);

        try {
            let result = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                body: JSON.stringify({ name, email, city, subject, address }),
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
                },
            });
            result = await result.json();
            console.warn(result);
            localStorage.setItem("user", JSON.stringify(result));

            // Use Next.js router instead of navigate
            router.push('/'); // Redirect to home page

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <>
            <div>
                <img className="h-96 w-[100%]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" src="con.jpg" alt="" />
                <h1 className=" font-bold text-9xl p-4s m-4 text-center hover:underline text-blue-500  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Our Contact</h1>
            </div>
            <div className=" flex mt-12  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className=" px-5 py-5 h-40 w-64 rounded-2xl border border-blue-950 ml-16  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <h3 className=" font-bold text-center mt-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Office Address</h3>
                    <p className=" mt-4  from-stone-400  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">25/B Milford, New York, USA</p>
                </div>
                <div className="px-5 py-5 h-40 w-64 rounded-2xl border border-blue-950 ml-16  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <h3 className=" font-bold text-center mt-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Phone Number</h3>
                    <p className=" mt-4 ml-8  from-stone-400  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">+1 (555) 123-4567</p>
                </div>
                <div className="px-5 py-5 h-40 w-64 rounded-2xl border border-blue-950 ml-16  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <h3 className=" font-bold text-center mt-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Email Address</h3>
                    <p className=" mt-4  ml-6 from-stone-400  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">contact@company.com</p>
                </div>
                <div className="px-5 py-5 h-40 w-64 rounded-2xl border border-blue-950 ml-16  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <h3 className=" font-bold text-center mt-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Security</h3>
                    <p className=" mt-4  ml-6 from-stone-400  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Secure Communication</p>
                </div>
            </div>

            <div className=" h-[100vh] w-[100%]  mt-36 flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className=" h-[100vh] w-[75%]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <img className="h-[100vh] w-[100%] rounded-2xl ml-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" src="maps.png" alt="" />
                </div>
                <div>
                    <img className=" ml-5 rounded-2xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " src="us.jpg" alt="" />
                    <img className=" ml-72 rounded-2xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " src="c.jpg" alt="" />
                    <h1 className=" text-center mt-10 font-bold text-2xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Get in Touch with <span className=" text-amber-500">Adeline University</span></h1>
                    <p className=" ml-5 mt-10 text-black  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Connect with Adeline University for admissions, academic programs, student services, or general inquiries. Our dedicated team is here to support your educational journey.</p>
                </div>
            </div>
            <div className=" h-[100vh] w-[100%]  mt-36  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <h1 className=" ml-80 mt-10 font-bold text-6xl hover:underline  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >Contact Form</h1>
                <form onSubmit={collectData} className="
                 border border-black h-[90vh] w-[35%]  ml-80 mt-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <input className=' px-8 py-3 rounded-xl mt-10 text-center ml-32 bg-black  flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                    <input className=' px-8 py-3 rounded-xl mt-6 text-center ml-32 bg-black flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <input className=' px-8 py-3 rounded-xl mt-6 text-center ml-32 bg-black flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        required
                    />
                    <input className=' px-8 py-3 rounded-xl mt-6 text-center ml-32  bg-black flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        required
                    />
                    <textarea className=' px-10 py-3 rounded-xl mt-6 text-center ml-32  bg-black flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                    />
                    <button className=" text-white bg-amber-500 rounded-2xl px-24 py-3 hover:bg-black ml-32  mt-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "  type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;
