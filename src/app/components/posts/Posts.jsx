// import React, { Component } from 'react';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

const list = [{name: "test", date: "test", title: "test", description: "test"}];

const renderItem = (itemName, hebrew) => (
    <div id={itemName} className={"form-item " + itemName}>
        <div>{hebrew}: </div>
        <span>{itemName}</span>
    </div>)

const Posts = ({ posts }) => (
    <div>
        { 
        list.map((post, i) => (
            <div className="container-post" key={i}>
                <div>
                    {renderItem(post.title, "כותרת")}
                    {renderItem(post.date, "תאריך")}
                    {renderItem(post.name, "יוצר")}
                    {renderItem(post.description, "הסיפור שלי")}
                </div>
             </div>))}
    </div>);


const mapStateToProps = state => ({posts: state.posts});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
