"use strict";

function Tweet(props){
    return (
        <div className = "tweet">
            <h2>Username: {props.username}</h2>
            <p>Name: {props.name}</p>
            <p>Date: {props.date}</p>
            <p>Message: {props.message}</p>
        </div>
    );
}