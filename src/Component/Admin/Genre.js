import {ImFileMusic} from 'react-icons/im'
import { FaMusic } from 'react-icons/fa'
const Genre = ({cate}) => {

    return (
        <div>
           <div className='header'>
                <ImFileMusic className='icon' size="80px" color='white'></ImFileMusic>
                <h1>Music Genre Manager</h1>
            </div>
            <h3>List genres of Music</h3>
            <div className='list-genre'>
                {
                    cate.map((item)=>
                    <div key={item.id} className='genre'>
                        <FaMusic style={{marginRight:"20px"}}></FaMusic>
                        <img src={item.icons[0].url} style={{width:"50px",height:"50px",marginRight:"30px"}}></img>
                        <h4>{item.name}</h4>
                       
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Genre
