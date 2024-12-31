import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main id="maincontent">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
