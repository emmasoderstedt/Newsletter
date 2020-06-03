import React from 'react';

class StartPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {usernameInput: '', passwordInput: ''};
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleSubmit(event) {
        this.setState({userName: this.state.usernameInput, password: this.state.passwordInput});
        this.props.Login(this.state.usernameInput, this.state.passwordInput);
         event.preventDefault();
    }

    handleUsernameChange(event) {
        this.setState({usernameInput: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({passwordInput: event.target.value});
    }

    render() {
        const showText = this.props.showText;
        return(
            <div className = "startPage">
            <h1>{showText}</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Användarnamn:
                        <input type="text" value={this.state.usernameInput} onChange={this.handleUsernameChange} />
                    </label>
                    <label>
                        Lösenord:
                        <input type="password" value={this.state.passwordInput} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="Logga in"/>
                </form>
            </div>
            
            
        );
    }
}

export default StartPage;