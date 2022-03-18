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
                    Age: <b>{this.props.age}</b>
                </h4>
                <h4>
                    Hair color: <b>{this.props.hairColor}</b>
                </h4>
            </div>
        );
    }
}
    
export default PersonCard;
