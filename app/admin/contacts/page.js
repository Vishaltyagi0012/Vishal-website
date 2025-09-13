
'use client';

import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);

  const getAllContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "GET",
        headers: {
          'content-type': 'application/json'
        },
      });
      const data = await response.json();
      console.log(`contacts ${data}`);
      setContacts(data);

      // Remove this recursive call - it causes infinite loop
      // if(response.ok){
      //   getAllContactData();
      // }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch contacts");
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json'
        },
      });

      if (response.ok) {
        getAllContactData();
        toast.success("Delete successfully");
      } else {
        toast.error("Not deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete contact");
    }
  };

  useEffect(() => {
    getAllContactData();
  }, []);

  return (
    <>
      <section className="p-6 bg-gray-50 min-h-screen  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Admin Contacts Data</h1>
        </div>
        <div className="overflow-x-auto shadow-lg rounded-lg  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <table className="table-auto w-full bg-white border border-gray-200 rounded-lg  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <thead className="bg-blue-600 text-white  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <tr>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  City
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Subject
                </th>
                <th className="border border-gray-300 px-4 py-4 text-left font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Address
                </th>
                <th className="border border-gray-300 px-4 py-4 text-center font-semibold uppercase tracking-wide text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {contacts.map((curContacts, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  >
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {curContacts.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {curContacts.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {curContacts.city}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm max-w-xs truncate  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {curContacts.subject}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm max-w-xs truncate  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {curContacts.address}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      <button
                        onClick={() => deleteContact(curContacts._id)}
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

export default AdminContact;
