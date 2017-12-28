import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        activeStyle={{
          color: '#f88379'
        }}
      >Home </NavLink> |
      <NavLink
        to="/corgis"
        activeStyle={{
          color: '#f88379'
        }}
      > Corgis</NavLink> |
      <NavLink
        to="/favorites"
        activeStyle={{
          color: '#f88379'
        }}
      > Favorites</NavLink> |
      <NavLink
        to="/contact"
        activeStyle={{
          color: '#f88379'
        }}
      > Contact</NavLink>
    </div>
  )
}

export default Navbar
