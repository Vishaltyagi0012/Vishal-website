'use client';
import Link from "next/link";
import { useRouter } from "next/navigation"; // updated import
import { useEffect, useState } from "react";

export default function Navigation() {
  const [auth, setAuth] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setAuth(user);
  }, []);

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <header className="grid grid-cols-2 bg-blue-950">
      <div className="text-white flex gap-4">
        <img className="w-30 h-20 ml-8" src="logo.png" alt="Logo" />
        <p className="mt-4 text-xl">
          Adeline
          <br />
          University
        </p>
      </div>
      <nav>
        <ul className="flex gap-8 text-xl mt-4 text-white">
          <li>
            <Link className="hover:underline" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/academics">Academics</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/blog">Blog</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/admission">Admission</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link className="hover:underline" href="/sign">Sign up</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/login">Login</Link>
          </li> */}
          {
            auth ? <li><Link onClick={logout} href="/">Logout {JSON.parse(auth).name}</Link></li>
              : <><li>
                <Link className="hover:underline" href="/sign">Sign up</Link>
              </li>
                <li>
                  <Link className="hover:underline" href="/login">Login</Link>
                </li></>
          }
        </ul>
      </nav>
    </header>
  );
}
