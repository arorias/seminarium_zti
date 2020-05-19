import React, {Component} from 'react'
import {connect} from 'react-redux'


class DisplayName extends Component {
    render(){
        return (
            <div>
                <p>Twoja nazwa to: </p>
                <p>{this.props.userName}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.name,
    };
}

export default connect(mapStateToProps)(DisplayName);