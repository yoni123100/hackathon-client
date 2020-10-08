import React, { Component, useState } from 'react';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [{name: "test"} ,{name: "test1"}, {name: "test2"}]
        };
    }

    render() { 
        return (
            <div className="container-posts">
                <ul>
                    {this.state.posts.map((post) => <li>{post.name}</li>)}
                </ul>
            </div>
        );
    }
}
 
export default Posts;
