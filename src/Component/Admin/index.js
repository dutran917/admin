import React, { useState,useEffect } from 'react'
import './index.css'
import {BiLogOut} from 'react-icons/bi'
import Account from './Account';
import Genre from './Genre';
import {GrSpotify} from 'react-icons/gr'
import {FaUserAlt} from 'react-icons/fa'
import {BsFileEarmarkMusicFill} from 'react-icons/bs'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login';
const Admin = ({cate}) => {
    const accounts = [
        {
            id: 1,
            display_name: "Thien Tran",
            email: "dutran9170@gmail.com",
            country: "VN",
            images: "",
            followers: 0 
        },
        {
            id: 2,
            display_name: "Nghia Nguyen",
            email: "abcd@gmail.com",
            country: "VN",
            images: "",
            followers: 0 
        },
        {
            id: 3,
            display_name: "Bao Tran",
            email: "abcd@gmail.com",
            country: "VN",
            images: "",
            followers: 0 
        },
        {
            id: 4,
            display_name: "Ngoc Bao",
            email: "bede@gmail.com",
            country: "VN",
            images: "",
            followers: 0 
        }
    ]
    const [login, setLogin] = useState(false)
    const logout = () => {
        setLogin(false)
        localStorage.removeItem('login')
    }
    useEffect(() => {
        let check = localStorage.getItem('login')
        if(check === 'ok')
            setLogin(true)
    }, [])
    return (
    <div>
        {
            login === false &&
            <Login setLogin={setLogin}></Login>  
        }
        {
            login ===true &&
            <div className='admin'>
                
        <Router>
            <div className='menu'>
            <div style={{marginTop: "30px", marginLeft: "30px"}}>
                <GrSpotify size="50px"></GrSpotify>
                <h2 style={{ marginBottom: "10%" }}>ADMIN PAGE</h2>
            </div>
                <div className='menu-option'>
                    <Link className='link' to="/manage/account">
                        <FaUserAlt className='icon' size="30px"></FaUserAlt>
                            Users Manage
                    </Link>  
                </div>
                <div className='menu-option'>
                    <Link className='link' to="/manage/genre">
                        <BsFileEarmarkMusicFill className='icon' size="30px" ></BsFileEarmarkMusicFill>
                        Music Genre Manage
                    </Link>
                </div>
        
            </div>
            <div className='container'>
                <div className="logout" style={{display:"flex", position: "absolute", right: "50px" , alignItems: "center"}}>
                    <h2>Admin1</h2>
                    <BiLogOut style={{cursor: "pointer"}} onClick={()=>logout()}  size="50px"></BiLogOut>
                </div>
                <Route exact path="/" component={()=><Account accounts={accounts}></Account>}></Route>
                <Route exact path="/manage/account" component={()=><Account accounts={accounts}></Account>}></Route>
                <Route exact path="/manage/genre" component={()=><Genre cate={cate}></Genre>}></Route>
            </div>
        </Router>
    </div>
        }
    </div>
      
    )
}

export default Admin
