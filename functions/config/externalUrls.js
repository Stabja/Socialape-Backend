require('dotenv').config();
const colors = require('colors');


let serverUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000/socialape-d8699/asia-east2/api'
  : 'https://asia-east2-socialape-d8699.cloudfunctions.net/api';


console.log(colors.blue({
  constantEnv: process.env.NODE_ENV,
  serverUrl
}));


module.exports = {
  all_screams_url: serverUrl + "/allscreams",
  nytarticles_url: serverUrl + "/nytarticles",
  tracks_url: serverUrl + "/tracks",
  screams_url: serverUrl + "/scream/screams",
  comments_url: serverUrl + "/scream",
  
  fbstorage_url: "https://firebasestorage.googleapis.com",
  nytstorage_url: "https://static01.nyt.com/",
  nytarticles_fetch_url: "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=nVKEsWvJTRUDRwkH4ZDrZGkwBo26NYPR",
  spotify_token_url: "https://accounts.spotify.com/api/token",
  spotify_artist_url: "https://api.spotify.com/v1/artists?",
  spotify_tracks_url: "https://api.spotify.com/v1/tracks?",
  spotify_toptracks_url: "https://api.spotify.com/v1/artists",
  jb_tracks_url: "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s/albums",
  default_thumb: "https://firebasestorage.googleapis.com/v0/b/socialape-d8699.appspot.com/o/70922060326.jpg?alt=media&token=6f388486-901d-450e-a8fe-220f7093e544",
  default_cover: "https://firebasestorage.googleapis.com/v0/b/socialape-d8699.appspot.com/o/86659230554.jpg?alt=media&token=7d526988-d3de-47ce-96b0-65c11a4932ee",
};