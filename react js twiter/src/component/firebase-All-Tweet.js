// import React from "react"; 
import {db, collection, getDocs} from "./firebase-init"

function AllTweet() {
    const tweetsCol = collection(db, 'tweeter');
    const tweetSnapshot =  getDocs(tweetsCol);
    const tweetList = tweetSnapshot.docs(doc => doc.data());
    return tweetList;

}

export default AllTweet;

