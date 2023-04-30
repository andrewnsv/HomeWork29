import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navigation from './Navigation'


const Layout = () => {
  return (
    <>
      <Navigation>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/table">Table</NavLink>
      </Navigation>
      <Outlet />
    </>
  );
};

export default Layout;
