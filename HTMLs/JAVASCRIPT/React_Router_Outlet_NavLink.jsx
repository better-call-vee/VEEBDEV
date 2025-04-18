import { Outlet } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Link, NavLink } from "react-router";

const React_Router_Outlet_NavLink = () => {
  return (
    <div>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/mobiles"> Mobiles </NavLink>
        <NavLink to="/laptops"> Mobiles </NavLink> 
      </nav> 
    </div>
    // we use NavLink to use css with it.
    // we must use slash in NavLink (/)
  );

  /*
  in the css which will be linked to it, will be written:
  nav a.active  {  => all the anchors in nav tag
  text-decoration: underline;  or any other style to differentiate
  }
  here, the "active" class change the moment we will click on an anchor from another
  */
};

export default React_Router_Outlet_NavLink;

// and in the Root.jsx file, there will be an <Outlet></Outlet> tag, which contain these routing functionalities all over
