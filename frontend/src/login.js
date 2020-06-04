import React from 'react';

class Login extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {usernameInput: '', passwordInput: ''};

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }

    handleLoginSubmit(event) {
        console.log("tryckte på knappen");
        this.setState({usernameInput: this.state.usernameInput, passwordInput: this.state.passwordInput});
        this.props.VerifyLogin(this.state.usernameInput, this.state.passwordInput);
        event.preventDefault();
    }

    handleChange(event) {
        const name = event.target.name;
    
        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return(
            <div className = "login">
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
            </div>    
        );
    }
}

export default Login;