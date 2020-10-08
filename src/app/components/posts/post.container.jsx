import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts.component';
import { loadPosts } from '../../../store/actions'

class PostsContainer extends Component {
    constructor(props){
        super(props)
        props.getPosts()
    }

    render(){
        return <Posts posts={this.props.posts}></Posts>
    }
}

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(loadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
