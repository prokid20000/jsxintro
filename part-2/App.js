"use strict";

function App() {
    return (
        <div>
        <Tweet username="stevenAwesome" name="Steve" date={new Date().toDateString()} message="This is a message"/> 
        <Tweet username="stevenAwesome2" name="Steve2" date={new Date().toDateString()} message="This is a message2"/>
        <Tweet username="stevenAwesome3" name="Steve3" date={new Date().toDateString()} message="This is a message3"/>
        </div>
    );
}