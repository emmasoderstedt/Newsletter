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

      var data = {password: password, userName: userName};
      
      fetch("http://localhost:3000/users/authorize", {
        "method": "POST",
        "headers": {
          "Content-type":'application/json',
        },
        "body": JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({loggedIn: data})
        })
    
    .catch(err => {
        console.log(err);
    });
      
  }

  render() {
    return (
      this.state.loggedIn ? <LoggedIn/> : <StartPage showText= {this.state.showText} Login= {this.verifyLogin}/>
    );
  }
} 

export default App;
