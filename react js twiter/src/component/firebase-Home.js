// import { collection } from "@firebase/firestore";
import React, { useState,useContext } from "react";
// import { useHistory } from "react-router";
// import { useHistory } from "react-router";
// import {
//     Link
// } from "react-router-dom";
// import { GlobalContext } from "./context"
import  {TweetContext} from "../context/student-Context";
import { data,authUser } from "../context/student-Reducers";
import { signOut, db, addDoc, collection } from "./firebase-init";
// import{authuser} from "../context/student-Context"
// import {   getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"


function Home() {
const [tweeter, setTweeter] = useState("")
const [state,setState] = useContext(TweetContext)

// const history =useHistory( )
var  UID;

    function logout() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            UID = user.uid;
            // console.log(UID)
        //  console.log(state);
         authUser.push(UID)
        //  console.log(authUser);
            // ..
          } else {
            // User is signed out
            // ...
          } 
        });
        
        const AuthUser=()=>{
        
             console.log(authUser)
        }
        // Create New Tweet =>{}
        const createNewTweet = async () => {
            let tweeters={tweeter,UserUid:authUser}
            console.log(state)
            console.log(data);
            console.log(tweeters)
            data.tweets.push(tweeter)
console.log(data.tweets)
            let tweetRef = collection(db, 'allTweets')
           await  addDoc(tweetRef,tweeters)
                // setTweeter('')
                .then(() => {
                    console.log(tweeters, "saved")
                    document.getElementById("textarea").innerHTML=""
                })
                .catch((error) => {
                    alert(error.message)
                });
          }

        
          
         return (
         <div>
            <h1> Write Your Tweet </h1> 
             <textarea placeholder = "Write Your Tweet" id="textarea" onChange = {(event) => {setTweeter(event.target.value)}}> </textarea><br/>
            <button onClick = {createNewTweet}> Save your Tweet </button> 
            <button onClick = {logout()}> Log - Out </button> 
            <button onClick={AuthUser}>hello world</button>
         </div>
         )
         }
    
        
export default Home;