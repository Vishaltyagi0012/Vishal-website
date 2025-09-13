'use client';
import React, { useState } from "react";


const CreateCourses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    startDate: "",
    title: "",
    description: "",
    duration: "",
    availableSeats: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.image) newErrors.image = "Image URL is required";
    if (!formData.startDate) newErrors.startDate = "Start Date is required";
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.availableSeats) newErrors.availableSeats = "Available Seats is required";
    else if (isNaN(formData.availableSeats) || Number(formData.availableSeats) <= 0) {
      newErrors.availableSeats = "Available Seats must be a positive number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const newCourse = await response.json();
        setCourses([...courses, newCourse]);
        setFormData({
          image: "",
          startDate: "",
          title: "",
          description: "",
          duration: "",
          availableSeats: ""
        });
        setErrors({});
      } else {
        console.log("Failed to add course");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="p-6 bg-gray-50 min-h-screen  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Add New Course</h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white shadow-lg rounded-lg p-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-x-auto  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <table className="table-auto w-full border-collapse  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <thead>
                <tr className="bg-blue-600 text-white  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    Image
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    Start Date
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    Title
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    Duration
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    Available Seats
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    Submit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  <td className="border border-gray-300 px-4 py-4 align-top  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <input
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Image URL"
                      required
                      className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-colors duration-200"
                    />
                    {errors.image && (
                      <p className="text-red-500 text-xs mt-1 font-medium  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {errors.image}
                      </p>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 align-top  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <input
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                      className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 transition-colors duration-200"
                    />
                    {errors.startDate && (
                      <p className="text-red-500 text-xs mt-1 font-medium  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {errors.startDate}
                      </p>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 align-top  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Title"
                      required
                      className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-colors duration-200"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-xs mt-1 font-medium  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {errors.title}
                      </p>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 align-top  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <input
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Description"
                      required
                      className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-colors duration-200"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-xs mt-1 font-medium  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {errors.description}
                      </p>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 align-top  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <input
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="Duration"
                      required
                      className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-colors duration-200"
                    />
                    {errors.duration && (
                      <p className="text-red-500 text-xs mt-1 font-medium  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {errors.duration}
                      </p>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 align-top  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <input
                      name="availableSeats"
                      type="number"
                      value={formData.availableSeats}
                      onChange={handleChange}
                      placeholder="Available Seats"
                      required
                      className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition-colors duration-200"
                    />
                    {errors.availableSeats && (
                      <p className="text-red-500 text-xs mt-1 font-medium  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {errors.availableSeats}
                      </p>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-center align-top  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <button
                      type="submit"
                      className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-sm shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateCourses;
