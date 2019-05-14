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
    // display: flex;
    // flex-direction: row nowrap;
    // justify-content: space-between;
    // align-items: center;
    // width: 100%;
    // height: 50px;
    // margin: 0 auto;
    // background-color: black;

    // a:first-of-type {
    //     margin-left: 30px;
    // }

    // a:last-of-type {
    //     margin-right: 30px;
    // }
`;



// export default NavWrapper;