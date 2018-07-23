import React from 'react';
import { NavContainer, NavLink } from '../lib/styled-components';

const NavBar = () => (
  <nav>
    <NavContainer>
      <li>
        <NavLink to="/recipes">Recipes</NavLink>
      </li>
    </NavContainer>
  </nav>
);

export default NavBar;
