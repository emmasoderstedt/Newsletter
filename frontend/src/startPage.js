import React from 'react';

class StartPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {usernameInput: '', passwordInput: '',
                    registerUserName: '', registerPassword: '', registerEmail: '', subscribed: false};

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }

    handleLoginSubmit(event) {
        this.setState({usernameInput: this.state.usernameInput, passwordInput: this.state.passwordInput});
        this.props.Login(this.state.usernameInput, this.state.passwordInput);
        event.preventDefault();
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

    render() {
        const showText = this.props.showText;
        return(
            <div className = "startPage">
                <h1>{showText}</h1>
                <form onSubmit={this.handleLoginSubmit} >
                    <label>
                        Användarnamn:
                        <input name="usernameInput" type="text" value={this.state.usernameInput} onChange={this.handleChange} />
                    </label>
                    <label>
                        Lösenord:
                        <input name="passwordInput" type="password" value={this.state.passwordInput} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Logga in"/>
                </form>

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