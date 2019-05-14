import React, { Component } from "react";
// import { Route } from "react-router-dom";
import NavWrapper from './Components/NavWrapper';
import styled from 'styled-components';





class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <StyledApp>
      <NavWrapper />
    </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  width: 100%;
  margin: 0;
`


export default App;
