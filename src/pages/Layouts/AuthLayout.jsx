import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main id="authcontent">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
