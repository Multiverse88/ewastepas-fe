import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink } from "react-router-dom";
import AvatarDropdown from "../AvatarDropdown";
import Cookies from "js-cookie"; // Import js-cookie

export const NavbarLinks = [
  { name: "Beranda", link: "/" },
  { name: "Tentang Kami", link: "/AboutPage" },
  { name: "Kontak", link: "/ContactPage" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  // Check if the user is logged in by looking for the 'token' in cookies
  const isLoggedIn = !!Cookies.get("token");

  // Adjust navbar links based on whether the user is logged in or not
  const navLinks = isLoggedIn
    ? [
        ...NavbarLinks.slice(0, 1),
        { name: "Pick & Pack", link: "/CategoryPage" },
        ...NavbarLinks.slice(1),
      ]
    : NavbarLinks;

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center py-6">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/images/logoKecil.png"
                className="h-8"
                alt="EwhaleLogo"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              {navLinks.map((navItem) => (
                <li key={navItem.name}>
                  <NavLink
                    to={navItem.link}
                    className={({ isActive }) =>
                      `inline-block py-1 px-3 font-semibold ${
                        isActive ? "text-primary" : "hover:text-primary"
                      }`
                    }
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-9">
            <NavLink to="CartPage">
              <button className="text-3xl hover:text-primary">
                <PiShoppingCartLight />
              </button>
            </NavLink>

            {/* Conditionally show AvatarDropdown if the user is logged in */}
            {isLoggedIn ? (
              <div className="flex justify-end p-4">
                <AvatarDropdown />
              </div>
            ) : (
              <NavLink to="RegisterPage">
                <button
                  type="button"
                  className="text-white bg-primary focus:outline-none font-semibold rounded-full text-sm px-5 py-2 text-center md:block"
                >
                  Registrasi
                </button>
              </NavLink>
            )}
          </div>

          {/* Mobile hamburger menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
