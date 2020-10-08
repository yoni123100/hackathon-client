import React, { Component } from 'react';
import { connect } from 'react-redux';

import PeopleForm from '../peopleForm/peopleForm.container';

class BlackList extends Component {
    state = {
        title: "",
        age: "",
        platform: "",
        email: ""
    }

    render(){
        return <div className='blackList'>
            <PeopleForm></PeopleForm>
        </div>
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BlackList)