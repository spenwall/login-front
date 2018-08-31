import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div>
                <button className="button is-link pageButton" disabled={this.props.prev ? false : true} onClick={this.props.prevClick}>Previous</button>
                <button className="button is-link pageButton" disabled={this.props.next ? false : true} onClick={this.props.nextClick}>Next</button>
            </div>
        );
    }
}

export default Pagination