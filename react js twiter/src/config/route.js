import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Login from "../component/firebase-Sign-In";
import AllTweet from "../component/firebase-All-Tweet";
import NewUser from "../component/firebase-Sign-Up";
import Navbar from "../component/navbar";
import Tweet from "../component/firebase-Home";

function Routes(){
return(
<Router>
    <Navbar/>
    <Switch>
    <Route path="/alltweets">
            <AllTweet></AllTweet>
        </Route>
        <Route path="/signup">
            <NewUser/>
        </Route>
        <Route path="/signin">
            <Login/>
        </Route>
        <Route path="/home">
            <Tweet/>
        </Route>
    </Switch>
</Router>
);
}
export default Routes;