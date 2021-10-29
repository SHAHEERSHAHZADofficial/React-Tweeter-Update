import React from "react";
// ,{useContext} 
import{
    Link
} from "react-router-dom"
// import { TweetContext} from "../context/student-Context"

function Navbar(){
    // const { state} = useContext(TweetContext);

    return(

       <div>
           <Link to="signup">Signup</Link>
            <br/>
           <Link to="signin">Signin</Link>
           <br/>
           <Link to="home">Home</Link>
<br/>
<Link to="alltweets"> All Tweets </Link>
           {/* {state.authUser ?
                    null : <>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                    </>

                } */}

                {/* {
                    state.authUser?.userRole === 'trainer' ?
                        <>
                            <li>
                                <Link to="/add-student">Add Student</Link>
                            </li>
                            <li>
                                <Link to="/all-student">All Student</Link>
                            </li>
                        </> : null
                } */}
       </div>
    );
}
export default Navbar