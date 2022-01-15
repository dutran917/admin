import React from 'react'
import './index.css'
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
const Admin = ({genres}) => {
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
   
    return (
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
                <Route exact path="/" component={()=><Account accounts={accounts}></Account>}></Route>
                <Route exact path="/manage/account" component={()=><Account accounts={accounts}></Account>}></Route>
                <Route exact path="/manage/genre" component={()=><Genre genres={genres}></Genre>}></Route>
            </div>
        </Router>
    </div>
      
    )
}

export default Admin
