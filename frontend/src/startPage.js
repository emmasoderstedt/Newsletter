import React from 'react';

class StartPage extends React.Component {
    render() {
        const showText = this.props.showText;
        return(
            <div> 
                {showText} 
            </div>
        );
    }
}

export default StartPage;