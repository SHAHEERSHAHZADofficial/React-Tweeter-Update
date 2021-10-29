import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { authUser } from "../context/student-Reducers";
import { auth, signInWithEmailAndPassword} from "./firebase-init";
import {Link} from "react-router-dom"


let  userID;
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [userRole, setUserRole] = useState('trainer');
    const [errMsg, setErrMsg] = useState('');
    const history = useHistory()

   const signin = async () => {
    try {
        let {user} = await signInWithEmailAndPassword(auth, email, password);
        userID=user.uid
        console.log(userID);
        // console.log(authUser);
// alert("Login Successful");
history.push("/home"); 

}
 catch (err) {
        setErrMsg(err.message);
        setTimeout(() => {
            setErrMsg('');
        }, 5000)
    }
    
   }

   return (
    <div>
        <h1>Hello Signin</h1>
        <label>Email<input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label> <br/>
        <label>Password<input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label><br/>
        <button onClick={signin}>Signin</button>
        {errMsg ? <p id="messege">{errMsg}</p> : null}
        <p>
                    Not Registered  <Link to="signup">signup</Link>
                </p>
    </div>
)
}
export default Login