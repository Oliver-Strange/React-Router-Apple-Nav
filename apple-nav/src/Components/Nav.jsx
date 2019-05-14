import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return(
        <StyledNav>
            <StyledNavLink><i class="fab fa-apple" aria-hidden="true"></i></StyledNavLink>
            <StyledNavLink>Mac</StyledNavLink>
            <StyledNavLink>iPad</StyledNavLink>
            <StyledNavLink>iPhone</StyledNavLink>
            <StyledNavLink>Watch</StyledNavLink>
            <StyledNavLink>TV</StyledNavLink>
            <StyledNavLink>Music</StyledNavLink>
            <StyledNavLink>Support</StyledNavLink>
            <StyledNavLink><i class="fa fa-search" aria-hidden="true"></i></StyledNavLink>
            <StyledNavLink><i class="fa fa-shopping-bag" aria-hidden="true"></i></StyledNavLink>
        </StyledNav>
    );
}




const StyledNav = styled.div`
display: flex;
flex-direction: row nowrap;
justify-content: space-between;
align-items: center;
width: 100%;
height: 50px;
margin: 0 auto;
background-color: rgba(45,45,45,0.98);

a:first-of-type {
    margin-left: 30px;
}

a:last-of-type {
    margin-right: 30px;
}
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;

    
`