import React from 'react';

class LoggedInPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
        this.props.ChangeSubscriptionStatus(this.state.isToggleOn, localStorage.getItem("UserId"));
    }

    handleSubmit () {
        this.props.Logout();
    }


    render() {
        return(
            //skriver ut logged in sidan
            <div> 
                <h1>Hej {localStorage.getItem("UserName")}</h1>
                
                Prenumerera på nyhetsbrev: <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <br/>
                <button onClick= {this.handleSubmit}>Logga ut</button>
           </div>
        );
    }
}

export default LoggedInPage;