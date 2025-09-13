'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/getcourse', { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading course details...</p>;
    if (error) return <p>Error loading courses: {error}</p>;
    if (!courses || courses.length === 0) return <p>No courses available</p>;

    return (
        <div>
            <h1 className='font-bold text-7xl text-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                Let's Check Our <span className='text-amber-500'>Courses</span>
            </h1>
            <p className='text-center text-2xl text-slate-400 mt-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                It is a long established fact that a button will be distracted by the content of a page when looking at its layout
            </p>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-16">
                {courses.map(course => (
                    <div key={course._id} className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={course.image}
                                alt={`${course.title} banner`}
                                className="w-full h-full object-cover border-orange-400"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-white mb-1">Start Date: {course.startDate}</p>
                            <h2 className="text-xl text-green-500 font-semibold mb-2">{course.title}</h2>
                            <p className="text-white mb-2">Description: {course.description}</p>
                            <p className="text-white mb-1">Duration: {course.duration}</p>
                            <p className="text-white mb-4">Available Seats: {course.availableSeats}</p>
                            <Link href="/Enrollnow">
                                <button className="bg-amber-500 hover:bg-black text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
                                    Enroll Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;