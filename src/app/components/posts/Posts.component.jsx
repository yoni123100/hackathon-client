// import React, { Component } from 'react';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import './Posts.scss';

const renderItem = (itemName, hebrew, value) => (
    <div id={itemName} className={"post-item " + itemName}>
        <div className="key">{hebrew}: </div>
        <span>{value}</span>
    </div>)

const Posts = ({ posts }) => (
    <div className="posts">
        { 
            posts.map((post, i) => (
            <div className="container-post" key={i}>
                <div className="header">
                    {renderItem("title", "כותרת", post.title)}
                    <div className="same-line post-item">
                        { post.name && renderItem("name", "יוצר", post.name)}
                        {renderItem("date", "תאריך", post.date)}
                    </div>
                </div>
                <div className="content">
                    <div id="desc" className={"post-item " + "desc"}>
                        <span>{post.description}</span>
                    </div>
                </div>
            </div>))
        }
    </div>);

export default Posts;
