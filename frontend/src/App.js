import React from 'react';
import './App.css';
import StartPage from './startPage';
import LoggedInPage from './loggedInPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false, showText: "Startsida"};
  }

  //registera användare
  registerUser = (userName, password, email, subsciptionStatus) => {
    console.log("Registrerar användare");

    var data = {
        userName: userName, 
        password: password,
        userEmail: email, 
        subscriptionActive: subsciptionStatus
      };
    
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

  //ändra subscriptionStatus
  changeSubscriptionStatus = (subsciptionStatus, userId) => {
    console.log("Ändrar subsciptionstatus. Statusen är: ", subsciptionStatus);

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

  //för att ändra loggedIn till true och logga in
  loggedIn = () => {
    this.setState({loggedIn: true});
    
  }
  //för att ändra loggedIn till false och logga ut
  logout =() => {
    console.log("loggar ut");
    this.setState({loggedIn: false});
  }


  render() {
    return (
      //Om inloggad kom till loginsidan. Om inte kom till startsidan
      this.state.loggedIn ? <LoggedInPage ChangeSubscriptionStatus = {this.changeSubscriptionStatus} Logout={this.logout}></LoggedInPage> : <StartPage showText= {this.state.showText} RegisterUser={this.registerUser} LoggedIn = {this.loggedIn}></StartPage>
    );
  }
} 

export default App;
