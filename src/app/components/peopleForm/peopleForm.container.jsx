import React, { Component } from 'react';
import './peopleForm.scss';

class PeopleForm extends Component {
    state = {
        name: "",
        email: ""
    }

    onChange = (id, val) => this.setState({ [id]: val })

    onSubmit = () => this.props.onSubmit(this.state)

    render(){
        return <div className='form'>
            <div id="name" className="form-item name">
                <div>שם: </div>
                <input type='text' value={this.state.name} 
                       onChange={(e) => this.onChange("name", e.target.value)} />
            </div>
            <div id="name" className="form-item email">
                <div>מייל: </div>
                <input type='mail' value={this.state.email} pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                       onChange={(e) => this.onChange("email", e.target.value)} />
            </div>
            <div id="name" className="form-submit">
                <input type='button' value='חפש' onClick={this.onSubmit} />
            </div>
        </div>
    }
}

export default PeopleForm