import React from 'react';
import './App.css';
import TrackClick, {  } from "./components/HOC/TrackClick";
import  Profile  from "./components/HOC/Profile";
import  NewFeed  from "./components/HOC/NewFeed";
class App extends React.Component {
    render() {
        return (
            <>
                <h1>My App</h1>
                <Profile ownerName="Oscar"/>
                <NewFeed /> 
                
            </>
        );
    }
}

export default App;
