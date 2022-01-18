import React, { useState,useEffect } from 'react'
import {FaUserAlt,FaFacebookF} from 'react-icons/fa'
import {AiTwotoneLock, AiOutlineGooglePlus,AiOutlineTwitter} from 'react-icons/ai'
function Login({setLogin}) {
    const [noti,setNoti] = useState(null)
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")
    const admin = {
        username : "admin",
        password : "admin123"
    }
    const checkLogin = (e) => {
        e.preventDefault()
        if(username === admin.username)
        {
            if( password!==admin.password)
            {
                setNoti("Invalid password!")
            }
            else{
                setLogin(true)
                localStorage.setItem('login','ok')
            }
        }
        else{
            setNoti("Invalid admin!")
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          setNoti(null)
        }, 3000);
        return () => clearTimeout(timer);
      }, [username,password]);
    return (
        <div className="login-register">
            <form className="login-form" onSubmit={(e)=>checkLogin(e)}>
            <h1>LOG IN</h1>
            <h2 style={{color:"red"}}>
                {
                    noti    
                }
            </h2>
            <div className="input-login">
                <FaUserAlt size="25px"></FaUserAlt>
                <input type="text" placeholder="username" name="username" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="input-login">
                <AiTwotoneLock size="25px"></AiTwotoneLock>
                <input type="password" placeholder="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <input className="btn-login" type="submit" value="Login"/>

            <div className="sns-login">
                <div> <AiOutlineGooglePlus size="30px"></AiOutlineGooglePlus> </div>
                <div> <FaFacebookF size="30px"></FaFacebookF> </div>
                <div> <AiOutlineTwitter size="30px"></AiOutlineTwitter> </div>
            </div>
            </form> 
        </div>
    )
}

export default Login
