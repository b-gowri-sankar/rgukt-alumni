import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: white;
    /* background-color: tomato; */
    height: 50px !important;
    justify-content: space-between;
    align-items: center;
    /* padding: 20px; */
    list-style: none;
    /* height: 60px; */
    text-decoration: none;
    &:hover{
        background: #252853;
        border-left: 4px solid  #632ce4;
        cursor: pointer;
    }     
`;

const SidebarLabel = styled.span`

    margin-left: 16px;
    /* height: 20px; */
 
`;

const DropDownLink = styled(Link)`
    background: #414757;
    height: 38px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    
    &:hover{
        background: #632ce4;
        cursor: pointer;
    }
`;

const SideBarDropDown = (props) => {
    
    const { item } = props;
    const [subnav, setSubnav] = useState(false)
    
    const showSubnav = () => setSubnav(!subnav)


    return (


        <>
            <SidebarLink to={item.path} onClick={item.subNav &&
            showSubnav}>
                <div>
                   <SidebarLabel> { item.title} </SidebarLabel> 
                </div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropDownLink to={item.path} key={item.index}>
                        <SidebarLabel>{ item.title }</SidebarLabel>
                    </DropDownLink>
                )
            })}
        </>
    )

}

export default SideBarDropDown;