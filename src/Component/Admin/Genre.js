import React, { useState } from 'react'
import {ImFileMusic} from 'react-icons/im'
import { FaMusic } from 'react-icons/fa'
import {MdAddToPhotos} from 'react-icons/md'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Genre = ({genres,getGenre}) => {
    const [show,setShow] = useState(false)
    const [id,setId] = useState(null)
    const [showAdd,setShowAdd] = useState(false)
    return (
        <div>
           <div className='header'>
                <ImFileMusic className='icon' size="80px" color='white'></ImFileMusic>
                <h1>Music Genre Manager</h1>
            </div>
            <div className='btn-add' onClick={()=>setShowAdd(true)}>
                <MdAddToPhotos size="20px"></MdAddToPhotos>
                <p>ADD</p>
            </div>
            {
                showAdd &&
                <div className='modal-add'>
                    <div className='add'>
                        <h2>Add a new Genre of music</h2>
                        <AiOutlineCloseCircle size="40px" className='close-icon'
                        style={{
                            position: "absolute",
                            top: "5px",
                            right: "5px"
                        }}
                        color="red" onClick={()=>setShowAdd(false)}></AiOutlineCloseCircle>
                        <label>Name: </label>
                        <input type="text" ></input>
                        <button className='btn-modal-add'>
                            <MdAddToPhotos size="20px" ></MdAddToPhotos>
                            <p>ADD</p>
                        </button>
                    </div>
                </div>
            }
            <h3>List genres of Music</h3>
            <div className='list-genre'>
                {
                    genres.map((item,index)=>
                    <div key={index} className='genre' onMouseEnter={()=>{setShow(true); setId(index)}} onMouseLeave={()=>setShow(false)}>
                        <FaMusic style={{marginRight:"20px"}}></FaMusic>
                        <h4>{item}</h4>
                       
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Genre
