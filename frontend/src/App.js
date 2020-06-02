import React from 'react';
import './App.css';
//import './loggedInPage';
import StartPage from './startPage';
import LoggedIn from './loggedInPage';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {loggedIn: false, showText: "Hello World"};
  }
  render() {
    return (
      this.state.loggedIn ? <LoggedIn/> : <StartPage showText= {this.state.showText}/>
    );
  }
} 

export default App;
