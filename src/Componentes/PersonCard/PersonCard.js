import './PersonCard.css'
import React, { Component } from 'react';


    
class PersonCard extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.firstName}, {this.props.lastName}
                </h1>
                <h4>
                    Age: {this.props.age}
                </h4>
                <h4>
                    Hair color: {this.props.hairColor}
                </h4>
            </div>
        );
    }
}
    
export default PersonCard;
