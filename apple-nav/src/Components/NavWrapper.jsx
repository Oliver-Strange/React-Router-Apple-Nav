import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';



export default function NavWrapper() {
    return (
        <StyledNavBarHeader>
           <Nav />
           {/* <SubNav /> */}
        </StyledNavBarHeader>
    );
}

const StyledNavBarHeader = styled.div`
    width: 100%;
    background-color: rgba(45,45,45,1);
`;



// export default NavWrapper;