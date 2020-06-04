import React from 'react';
import Login from './login';

class StartPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {registerUserName: '', registerPassword: '', registerEmail: '', subscribed: false};
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }
    
    handleRegisterSubmit(event){
        this.setState({registerUserName: this.state.registerUserName, registerPassword: this.state.registerPassword, emailInput: this.state.registerEmail, subscribed: this.state.subscribed});
        this.props.RegisterUser(this.state.registerUserName, this.state.registerPassword, this.state.registerEmail, this.state.subscribed);
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.name === 'subscribed' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
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
          console.log("verifierad: ", data)
          localStorage.setItem("UserName", userName);
          localStorage.setItem("UserId", data.userId);
          localStorage.setItem("SubsciptionStatus", data.subscription);
          console.log(localStorage);
          if (data) {
              this.props.LoggedIn();
          }
          })
      
      .catch(err => {
          console.log(err);
      });
        
    }

    render() {
        const showText = this.props.showText;
        return(
            <div className = "startPage">
                <h1>{showText}</h1>
                <Login VerifyLogin= {this.verifyLogin}/>

                <h1>Registrera ny användare</h1>
                <form onSubmit={this.handleRegisterSubmit} >
                    <label>
                        Användarnamn:
                        <input name="registerUserName" type="text" value={this.state.registerUserName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Lösenord:
                        <input name="registerPassword" type="password" value={this.state.registerPassword} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                        <input name="registerEmail" type="email" value={this.state.registerEmail} onChange={this.handleChange} />
                    </label>
                    <label>
                        Prenumerera på nyhetsbrev:
                        <input name="subscribed" type="checkbox" checked={this.state.subscribed} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Registrera"/>
                </form> 
            </div>    
        );
    }
}

export default StartPage;