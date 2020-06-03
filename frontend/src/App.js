import React from 'react';
import './App.css';
//import './loggedInPage';
import StartPage from './startPage';
import LoggedIn from './loggedInPage';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {loggedIn: false, showText: "Startsida"};
  }

  verifyLogin = (userName, password) => {
      console.log("Kontrollerar användaruppgifter");
      //fetch
  }

  render() {
    return (
      this.state.loggedIn ? <LoggedIn/> : <StartPage showText= {this.state.showText} Login= {this.verifyLogin}/>
    );
  }
} 

export default App;
