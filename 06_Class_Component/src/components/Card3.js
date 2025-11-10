import React, { Component } from 'react';

class Card3 extends Component {
    render() {
        return (
            <div className="card">
                <h2>Title:{this.props.title}</h2>
                <p>name: {this.props.name}</p>
            </div>
        );
    }
}

export default Card3;
