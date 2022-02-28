"use strict"

function Person({ age, hobbies, name }){
    const text = (age >= 18) ? "please go vote!" : "you must be 18";
    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person</p>
            <li>Name: {name.slice(0,8)}</li>
            <li>Age: {age}</li>
            <ul>Hobbies: {hobbiesList}</ul>
            <h3>{text}</h3>
        </div>
    );
}