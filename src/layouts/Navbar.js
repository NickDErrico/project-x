import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = props => {
  const PrimaryNav = styled.div`
    display: flex;
    background-color: #69aa86;
    color: #f1f2ed;
    box-shadow: 0 0 5px black;
  `;

  const NavContent = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 10vw;
  `;

  const NavLink = styled(Link)`
    text-decoration: none;
    color: #f1f2ed;

    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <PrimaryNav>
      <NavContent>
        <h2>APPCESTRY</h2>
        <NavList>
          <li>
            <NavLink to="/help">
              <b>HELP</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <b>LOGIN</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <FontAwesomeIcon icon={faUserCircle} />
            </NavLink>
          </li>
        </NavList>
      </NavContent>
    </PrimaryNav>
  );
};

export default Navbar;
