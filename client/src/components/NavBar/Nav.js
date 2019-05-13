import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
const navBar = props => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>Book Your Event</h1>
    </div>
    <nav className="main-navigation__items">
      <ul>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default navBar;
