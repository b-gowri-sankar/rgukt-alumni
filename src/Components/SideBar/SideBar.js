import React,{ useState} from 'react'
import { connect } from 'react-redux';
import SignedInLinks from '../../layout/SignedIn'
import SignIn from '../../layout/signIn'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
// import * as RiIcons from 'react-icons/ri'

import { Link } from 'react-router-dom'
 
import { SideBarData } from './SideBarData'
import SideBarDropDown from './SideBarDropDown'


import styled from 'styled-components'

const Nav = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #004466;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
    @media (min-width: 936px) {
        display: none;
  }
`;

const NavIcon = styled(Link)`
    margin-left: 1rem;
    font-size: 2rem;
     height: 80px;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     color: white;
     /* background-color: #090b13; */
`;

const SidebarNav = styled.nav`
    background: #004466;
    width: 280px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top:0;
    left:${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    color:white;
    background-color: #090b13;
    /* @media (max-width: 14000px) {
        display: none;
    } */
    
`;

const SidebarWrap = styled.nav`
    background-color: #004466;
    height:100%;
    overflow: auto;
    &:hover{
        overflow-y: scroll;
    }
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  margin-left: 30px;
  display: inline-block;
  color:white;
  span {
    color:white;
    padding:10px;
    letter-spacing: 0.3rem;
  }
`;

const List = styled.div`
    color:white;
    ul{
        display: flex;
        color: white !important;
        padding: 10px;
    }

    ul > li{
        margin-left: 20px;
        font-size: larger;
    }

    ul > li > a{
        text-decoration: none;
        color: white !important;
        padding: 10px;
        border-radius: 50%;
        font-size: 3vw;
    }
    @media (max-width: 410px){
        ul > li > a{
            font-size: 2.5vw;
            letter-spacing: normal;
            /* margin-left: 0px; */
        }
        ul >li {
            margin-left: 0px;
        }
    }
`;


const SideBar = (props) => {
    const { auth } = props;
  //console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignIn />;

    const  [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={ showSidebar }/>
                </NavIcon>
                <Logo>
                    <a href='/'>
                        <span>
                    RGUKTAA
                        </span>
                    </a>
                </Logo>
                <List>
                    {links}
                </List>
                
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={ showSidebar }/>
                    </NavIcon>
                    {SideBarData && SideBarData.map((item, index) => (
                        <SideBarDropDown item={item} key={ index }/>
                    ))}
                </SidebarWrap>
                
            </SidebarNav>
        </>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(SideBar);