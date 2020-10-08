// import React, { Component } from 'react';

import React from 'react';
import { connect } from 'react-redux';

const list = [{name: "test", date: "test", title: "test", description: "test"}];

const Posts = ({ posts }) => (
    <div>
        { 
        list.map((post, i) => (
            <div className="container-post" key={i}>
                <div>
                    <span>{post.name} יוצר</span> 
                    <span>{post.date} תאריך</span> 
                    <span>{post.title} כותרת</span> 
                    <span>{post.description}</span>
                </div>
             </div>))}
    </div>);


const mapStateToProps = state => ({posts: state.posts});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
