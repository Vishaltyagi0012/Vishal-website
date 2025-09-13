'use client';
import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify";


const AdminCourses = () => {

  const [courses, setCourses] = useState([]);

  const getAllCoursesData = async () => {
    try {
      const response = await fetch("http://localhost:5000/courses", {
        method: "GET",
        headers: {
          'content-type': 'application/json'
        },
      });
      const data = await response.json();
      console.log(`courses ${data}`);
      setCourses(data);
      if (response.ok) {
        getAllCoursesData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/courses/delete/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json'
        },
      });

      if (response.ok) {
        getAllCoursesData();
        toast.success("delete successfully");
      } else {
        toast.error("Not updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCoursesData();
  }, []);
  return (
    <>
      <section className="p-6 bg-gray-50 min-h-screen  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Admin Courses Data</h1>
        </div>
        <div className="overflow-x-auto shadow-lg rounded-lg  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <table className="table-auto w-full bg-white border border-gray-200 rounded-lg  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <thead className="bg-blue-600 text-white  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <tr>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Image
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Start Date
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Title
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Duration
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Available Seats
                </th>
                <th className="border border-gray-300 px-4 py-4 text-center font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((curCourses, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  >
                    <td className="border border-gray-300 px-4 py-3 text-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {curCourses.image && (
                        <img
                          src={curCourses.image}
                          alt={curCourses.title}
                          className="w-16 h-16 object-cover rounded-lg mx-auto border border-gray-200  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        />
                      )}
                      {!curCourses.image && (
                        <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          <span className="text-gray-400 text-xs  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">No Image</span>
                        </div>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm whitespace-nowrap  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                      {new Date(curCourses.startDate).toLocaleDateString()}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                      {curCourses.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm max-w-xs  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                      <div className="truncate  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " title={curCourses.description}>
                        {curCourses.description}
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm whitespace-nowrap  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                      {curCourses.duration}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-800 font-medium text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                      <span className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {curCourses.availableSeats}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      <button
                        onClick={() => deleteCourse(curCourses._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>  
    </>
  )
}

export default AdminCourses;





