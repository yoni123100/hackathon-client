import React, { Component } from 'react';
import './peopleForm.scss';

class PeopleForm extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        platform: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        description: ""
    }

    onChange = (id, val) => this.setState({ [id]: val })

    onSubmit = () => this.props.onSubmit(this.state)

    renderItem = (itemName, hebrew) => (
        <div id={itemName} className={"form-item " + itemName}>
            <div>{hebrew}: </div>
            <input type='text' value={this.state[itemName]} onChange={(e) => this.onChange(itemName, e.target.value)} />
        </div>)

    render(){
        return <div className='form'>
            { this.renderItem("name", "שם") }
            <div id="email" className="form-item email">
                <div>מייל: </div>
                <input type='mail' value={this.state.email} pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                       onChange={(e) => this.onChange("email", e.target.value)} />
            </div>
            <div id="phone" className="form-item name">
                <div>שם: </div>
                <input type='text' value={this.state.phone} 
                       onChange={(e) => this.onChange("phone", e.target.value)} />
            </div>
            { this.renderItem("platform", "פלטפורמה") }
            { this.renderItem("linkedin", "לינקדין") }
            { this.renderItem("instagram", "אינסטגרם") }
            { this.renderItem("facebook", "פייסבוק") }
            
            <div id="name" className="form-submit">
                <input type='button' value='חפש' onClick={this.onSubmit} />
            </div>
        </div>
    }
}

export default PeopleForm