import React from 'react';
import './App.css';
//import './loggedInPage';
import StartPage from './startPage';
import LoggedInPage from './loggedInPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false, showText: "Startsida"};
  }

  registerUser = (userName, password, email, subsciptionStatus) => {
    console.log("Registrerar användare ");

    var data = {
        userName: userName, 
        password: password,
        userEmail: email, 
        subscriptionActive: subsciptionStatus
      };
    console.log("Användaruppgifter som skickas in",data);
    
    fetch("http://localhost:3000/users", {
      "method": "POST",
      "headers": {
        "Content-type":'application/json',
      },
      "body": JSON.stringify(data),
    })
    .catch(err => {
        console.log(err);
    }); 

  }

  changeSubscriptionStatus = (subsciptionStatus, userId) => {
    console.log("Ändrar subsciptionstatus. Statusen är: ", subsciptionStatus);
    console.log("userId är: ", userId); 

    var data= {"subscriptionActive": subsciptionStatus}

    fetch("http://localhost:3000/users/" + userId, {
      "method": "PUT",
      "headers": {
        "Content-type":'application/json',
      },
      "body": JSON.stringify(data),
      })
      .catch(err => {
          console.log(err);
      });

  } 
  loggedIn = () => {
    this.setState({loggedIn: true});
    
  }
  logout =() => {
    console.log("loggar ut");
    this.setState({loggedIn: false});
  }


  render() {
    return (
      this.state.loggedIn ? <LoggedInPage ChangeSubscriptionStatus = {this.changeSubscriptionStatus} Logout={this.logout}></LoggedInPage> : <StartPage showText= {this.state.showText} RegisterUser={this.registerUser} LoggedIn = {this.loggedIn}></StartPage>
    );
  }
} 

export default App;
