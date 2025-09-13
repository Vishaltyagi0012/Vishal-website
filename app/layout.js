"use client";
import './globals.css'
import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Navigation/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
