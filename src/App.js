import './App.css';
import { useEffect, useState } from 'react';
import Admin from './Component/Admin/index';
import axios from 'axios'
function App() {
  const CLIENT_ID = "8e469dcba80a4ab6accabbc11ab12195"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const [token, setToken] = useState("")
  const [genreList,setGenreList] = useState([])
  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)
        axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",{
        headers:{
          Authorization: `Bearer ${token}`
        }
        }).then(
        (res) =>  {
          setGenreList(res.data.genres)
        }
        )
      
      
  }, [])
  
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

 
  return (
    <div className='App'>
        {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
            to Spotify</a>
        : <button onClick={logout}>Logout</button>}
       {/* <button onClick={getGenre}> get Genre </button> */}
        <Admin genres={genreList}></Admin>
    </div>
  );
}

export default App;
