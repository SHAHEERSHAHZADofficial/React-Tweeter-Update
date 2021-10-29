import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, db, setDoc, doc } from "./firebase-init";

function NewUser(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [userRole, setUserRole] = useState('trainer');
  const [errMsg, setErrMsg] = useState('');
  

    const history = useHistory()
    //retrieve one document and save it to userDetails

    const register = async () => {
        try {
            let {user}  = await createUserWithEmailAndPassword(auth, email, password);
            let dataRef = doc(db, 'users', user.uid)
            await setDoc(dataRef, {
                email: user.email,
                uid: user.uid
                // userRole: userRole
            });
            console.log({ email})
            console.log(user.uid)
            history.push("/home"); 
            // document.getElementById("email").value=""
// document.getElementById("password").value=""

        } catch (err) {
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
    }
    return(
    <div>
    <label> Email:  <input type="email" value={email} id="email" onChange={(ev) => { setEmail(ev.target.value) }} /> <br/> </label>
      <label>Password: <input type="password" id="password" value={password} onChange={(ev)=>{setPassword(ev.target.value)}}/><br/> </label> 
      {/* <label> Role:  <select name="role" onChange={(ev)=>{setUserRole(ev.target.value)}}>
        <option value="Trainer">Trainer</option>
        <option value="Student" >Student</option>
        </select></label> <br/> */}
        <button onClick={register}>Save User </button>
        {/* <p>Already Have an Account <Link path="/signup">SignUp</Link></p> */}
        <p>
                    Already registered <Link to="/signin">Signin?</Link>
                    
                </p>
        {errMsg ? <p>{errMsg}</p> : null}
    </div>
);
}
export  default NewUser