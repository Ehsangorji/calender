
import logo from './logo.svg';
import './App.css';
import DonyaroMenu from './Components/common/DonyaroMenu/DonyaroMenu';
import SideMenu1 from './Components/common/SideMenu1/SideMenu1';
import Content from './Components/common/Content/Content';
import React, { Component } from 'react';
import Footer from './Components/common/Content/Footer/Footer';
// import CalMenu from './Components/calMenu/calMenu';
// import CalContainer from './Components/CalContainer/CalContainer';
class App extends Component {
  render() {

    return (
      <div className="App">
        <DonyaroMenu />
        <SideMenu1 />
        <Content />
        {/*
         <CalMenu/>
         <CalContainer/>
         */}
      </div>
    );
  }
}
export default App;
