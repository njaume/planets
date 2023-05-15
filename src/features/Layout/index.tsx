import { Outlet } from "react-router-dom";
import HeaderLayout from "./Header";

const Layout = () => (
  <>
    <HeaderLayout />
    <main className="px-4 py-8">
        <Outlet />
    </main>
  </>
);

export default Layout
