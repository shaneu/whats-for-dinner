import React from 'react';
import {
  Header,
  NavLink,
  SmallTitle,
  LargeTitle,
} from '../lib/styled-components';
import { NavBar } from './';

const SiteHeader = () => (
  <Header>
    <NavLink to="/recipes">
      <LargeTitle>What&apos;s The Food!?</LargeTitle>
      <SmallTitle>WTF</SmallTitle>
    </NavLink>
    <NavBar />
  </Header>
);

export default SiteHeader;
