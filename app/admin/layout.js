'use client';

import React, { useEffect } from 'react';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { LiaUserSolid } from "react-icons/lia";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Check if window is defined to avoid SSR issues
  const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  let user = null;
  
  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    user = null;
    console.error('Error parsing user from localStorage', error);
  }

  // Handle redirect using useEffect
  useEffect(() => {
    if (!user || user.role !== 1) {
      router.push('/');
    }
  }, [user, router]);

  // Return null while redirecting to prevent content flash
  if (!user || user.role !== 1) {
    return null;
  }

  return (
    <>
      <header>
        <div className='grid grid-cols-2 font-bold gap-28 bg-slate-400 h-20  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <h1 className=' mt-5 ml-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>ADMIN <span className=' text-amber-500'>PANEL</span></h1>
          <nav>
            <ul className="flex gap-10 text-xl  mt-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <li>
                <Link  
                  href="/admin/users" 
                  className={pathname === '/admin/users' ? 'active' : ' hover:underline  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '}
                >
                  <LiaUserSolid/>users
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/contacts"
                  className={pathname === '/admin/contacts' ? 'active' : ' hover:underline  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '}
                >
                  <RiContactsBook3Fill/>contacts
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/courses"
                  className={pathname === '/admin/courses' ? 'active' : ' hover:underline   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}
                >
                  <MdSubject />courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/update"
                  className={pathname === '/admin/update' ? 'active' : ' hover:underline  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}
                >
                  <RxUpdate />Update
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
    </>
  )
}
