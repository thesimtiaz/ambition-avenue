import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
