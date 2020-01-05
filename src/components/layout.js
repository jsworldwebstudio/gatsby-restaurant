/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/globals/Navbar/Navbar';

// import "./layout.css";
// import "../sass/layout.scss";

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      { children }
    </>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  background: white;
}
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
