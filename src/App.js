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
  const genreList= [
    "acoustic",
    "afrobeat",
    "alt-rock",
    "alternative",
    "ambient",
    "anime",
    "black-metal",
    "bluegrass",
    "blues",
    "bossanova",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "classical",
    "club",
    "comedy",
    "country",
    "dance",
    "dancehall",
    "death-metal",
    "deep-house",
    "detroit-techno",
    "disco",
    "disney",
    "drum-and-bass",
    "dub",
    "dubstep",
    "edm",
    "electro",
    "electronic",
    "emo",
    "folk",
    "forro",
    "french",
    "funk",
    "garage",
    "german",
    "gospel",
    "goth",
    "grindcore",
    "groove",
    "grunge",
    "guitar",
    "happy",
    "hard-rock",
    "hardcore",
    "hardstyle",
    "heavy-metal",
    "hip-hop",
    "holidays",
    "honky-tonk",
    "house",
    "idm",
    "indian",
    "indie",
    "indie-pop",
    "industrial",
    "iranian",
    "j-dance",
    "j-idol",
    "j-pop",
    "j-rock",
    "jazz",
    "k-pop",
    "kids",
    "latin",
    "latino",
    "malay",
    "mandopop",
    "metal",
    "metal-misc",
    "metalcore",
    "minimal-techno",
    "movies",
    "mpb",
    "new-age",
    "new-release",
    "opera",
    "pagode",
    "party",
    "philippines-opm",
    "piano",
    "pop",
    "pop-film",
    "post-dubstep",
    "power-pop",
    "progressive-house",
    "psych-rock",
    "punk",
    "punk-rock",
    "r-n-b",
    "rainy-day",
    "reggae",
    "reggaeton",
    "road-trip",
    "rock",
    "rock-n-roll",
    "rockabilly",
    "romance",
    "sad",
    "salsa",
    "samba",
    "sertanejo",
    "show-tunes",
    "singer-songwriter",
    "ska",
    "sleep",
    "songwriter",
    "soul",
    "soundtracks",
    "spanish",
    "study",
    "summer",
    "swedish",
    "synth-pop",
    "tango",
    "techno",
    "trance",
    "trip-hop",
    "turkish",
    "work-out",
    "world-music"
]

  // useEffect(() => {
  //     const hash = window.location.hash
  //     let token = window.localStorage.getItem("token")

  //     if (!token && hash) {
  //         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

  //         window.location.hash = ""
  //         window.localStorage.setItem("token", token)
  //     }

  //     setToken(token)
  //       axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",{
  //       headers:{
  //         Authorization: `Bearer ${token}`
  //       }
  //       }).then(
  //       (res) =>  {
  //         setGenreList(res.data.genres)
  //       }
  //       )
      
      
  // }, [])
  
  // const logout = () => {
  //   setToken("")
  //   window.localStorage.removeItem("token")
  // }

 
  return (
    <div className='App'>
          <Admin genres={genreList}></Admin>
    </div>
  );
}

export default App;
