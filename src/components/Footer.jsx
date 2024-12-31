import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { NavbarLinks } from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);

    const handleCookieChange = () => {
      setIsLoggedIn(!!Cookies.get("token"));
    };

    // Tambahkan event listener jika cookies diubah
    const interval = setInterval(handleCookieChange, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const footerLinks = isLoggedIn
    ? [...NavbarLinks, { name: "Pick & Pack", link: "/CategoryPage" }]
    : NavbarLinks;

  return (
    <footer className="bg-sky-950 text-white py-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Siap Mengelola Sampah Elektronik Anda?
          </h2>
          <p className="text-sm md:text-lg mb-6 max-w-xl">
            Ayo mulai langkah kecil untuk melindungi lingkungan dengan mendaur
            ulang sampah elektronik Anda bersama kami!
          </p>
        </div>
        <div>
          {!isLoggedIn && (
            <Link
              to="RegisterPage"
              className="bg-white inline-flex items-center text-primary py-2 px-4 rounded-md font-bold shadow hover:bg-gray-200 transition duration-300 space-x-2"
            >
              <span>Daftar Sekarang</span>
              <MdArrowOutward size={18} />
            </Link>
          )}
        </div>
      </div>
      <div className="container mx-auto mt-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="/images/logoBulat.png"
              alt="Logo Ewhale"
              className="h-14 mx-auto md:mx-0"
            />
          </div>

          <ul className="flex space-x-6 md:space-x-10 text-sm md:text-base font-semibold">
            {footerLinks.map((navItem) => (
              <li key={navItem.name}>
                <a
                  href={navItem.link}
                  className="inline-block py-1 px-3 font-semibold"
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://instagram.com" className="hover:text-gray-300">
              <FaInstagram size={28} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300">
              <FaXTwitter size={28} />
            </a>
            <a href="https://facebook.com" className="hover:text-gray-300">
              <FaFacebook size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4 border-t border-gray-300 pt-4">
        <h5 className="text-sm font-semibold -mb-4">
          Copyright © 2024 ewhale.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
