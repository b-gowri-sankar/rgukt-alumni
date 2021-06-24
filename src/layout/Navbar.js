import styled from 'styled-components';
import React from 'react';
import SignedInLinks from './SignedIn';
import SignIn from './signIn';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css'
import * as RiIcons from 'react-icons/ri'

// import { Link } from 'react-router-dom'
const navBar = (props) => {
  const { auth } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignIn />;
  const create = auth.uid ? <div className={classes.dropdown}>
    <Link to="/">
      <span>CREATE</span>
      <RiIcons.RiArrowDownSFill />
    </Link>
    <div className={classes.dropdownContent}>
      <Link to='/createpost'>Post</Link>
      <Link to='/createintern'>Internship</Link>
      <Link to='/createevent'>Event</Link>
      <Link to='/profileform'>Profile</Link>
      <Link to='/queryform'>Query</Link>
    </div>
  </div> : null;
  const Chapters = auth.uid ? <div className={classes.dropdown}>
  <Link to="/">
    <span>Chapters</span>
    <RiIcons.RiArrowDownSFill />
  </Link>
  <div className={classes.dropdownContent}>
    <Link to='/images'>Gallery</Link>
    <Link to='/profiles'>Profiles</Link>
    <Link to='/queries'>Queries</Link>
  </div>
</div> : null;
    return (
        <Nav>
            <Logo>
            <a href='/'>
                <span>
              RGUKTAA
                </span>
              </a>
            </Logo>
            <NavMenu>
            <Link to='/'>
            <span>HOME</span>
          </Link>
            <Link to='/'>
            <span>LIBRARY</span>
          </Link>
            <Link to='/'>
            <span>CAREERS</span>
          </Link>
            <Link to='/'>
            <span>PLACEMENT CELLS</span>
          </Link>
            <Link to='/'>
            <span>CAMPUSES</span>
          </Link>
            {Chapters}
            {create}
            </NavMenu>
            {links}
        </Nav>
    )
}

const Nav = styled.nav`
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    background-color: #004466;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
    @media (max-width: 936px) {
      display: none;
  }
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  color:white;
  span {
    color:white;
    padding:10px;
    letter-spacing: 0.3rem;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* @media (max-width: 1040px) {
    display: none;
  } */
`;

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(navBar);