import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [Feedback,setFeedback]=useState("");
    const navigate = useNavigate();
    const collectData=async ()=>{
        console.warn(name,email,Feedback);
        
        let result =await fetch("http://localhost:5000/register",{
            method:'post',
            body: JSON.stringify({name,email,Feedback}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result);

        if(result){
            navigate('/')
        }
    }



    return(
        <div className='feedback'>

        <div className="login">
            <form>
            <h1>Feedback/Enquiry</h1>
            <div className="inputbt">
            <label for="fname">Enter Your Name:-   </label>
            <input className="inputBox" type="text"  
            value={name}  onChange={(e)=>setName(e.target.value)}/>
            </div>
            <br />
            <div>
            <label for="fname">Enter Your Email :- </label>
            <input className="inputBox" type="text" 
            value={email}  onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
            <label for="fname">Enter your Feedback:- </label>
            <input className="textarea" type="textarea" placeholder="Write feedback/Enquiry here" 
            value={Feedback}  onChange={(e)=>setFeedback(e.target.value)}/>
            </div>
            <button onClick={collectData} className="appButton" type="button">Submit</button> 
            </form>
        </div>
        </div>
    )
}
export default Signup;
