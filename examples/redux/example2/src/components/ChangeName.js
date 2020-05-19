import React, {Component} from 'react'
import {connect} from 'react-redux'
import setName from '../store/userActions'


class ChangeName extends Component {
    state = {
        newName : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // zapobieganie odświerzeniu strony
        e.preventDefault();
        const newName = this.state.newName;
        console.log("Handle submit:", newName);

        this.props.setName(newName);
    }

    render(){
        return (
            <div>
                <p>Podaj nową nazwę: </p>
                <input type="text" id="newName" onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {dispatch(setName(name))} 
    };
}

// pierwszy argument to mapStateToProps - ten komponent nie potrzebuje pobierać
// żadnych stanów, więc przekazywany jest null
export default connect(null, mapDispatchToProps)(ChangeName);