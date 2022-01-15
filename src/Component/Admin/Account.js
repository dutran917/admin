import React from 'react'
import { useState,useEffect } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Account = ({accounts}) => {
    const [found,setFound] = useState(accounts)
    const [search,setSearch] = useState("")
    const [show,setShow] = useState(false)
    const [id,setId] = useState(null)
    const onClick = (item) =>{
        setId(item.id)
        if(show == false)
            setShow(true)
        // else
        //     setShow(false)
    }
    const onClose = (item) =>{
        setId(item.id)
        setShow(false)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        
        let temp = accounts.filter((item)=>{
            if(item.display_name.toLowerCase().includes(search))
                {     
                    return item    
                }
        })
        setFound(temp)
    }
    useEffect(() => {
        if(search=="")
            setFound(accounts)
    }, [search])
    return (
        <div className='container-account'>
            <div className='header'>
                <BiUserCircle className='icon' size="80px" color='white'></BiUserCircle>
                <h1>Users Manager</h1>
            </div>
            <form className="searchbox" onSubmit={(e)=>onSubmit(e)}>
                <input className="inputSearch" type="text" value={search} placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
                <button className="submit" type='submit'></button>
                <div className="linesearch"></div>
            </form>
            <div className='listacc'>
                {
                    found.map((item)=>
                    <div key={item.id} className='acc' >
                        <div className='acc-review'>
                            <div className='avatar'>
                                {/* <img src={item.images}></img> */}
                            </div>
                            <h2>{item.display_name}</h2>

                            <div  className='icon' onClick={()=>onClick(item)}>
                                Show info
                                <FaUserAlt className='icon-info' size="20px" ></FaUserAlt>
                            </div>
                            
                            {
                                show&&id==item.id && 
                                <div className='icon' onClick={()=>onClose(item)}>
                                    <AiOutlineCloseCircle size="30px" ></AiOutlineCloseCircle>
                                </div>  
                            }    
                        </div>
                       
                        {
                           show&&id==item.id && 
                           <div className='info'>
                                <p>ID: {item.id}</p>
                                <p>Country: {item.country}</p>
                                <p>Follower: {item.followes} </p>
                                <button> BLOCK </button>
                            </div> 
                        }
                     
                    </div>
                    )
                }
    
            </div>
        </div>
    )
}

export default Account
