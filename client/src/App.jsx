import { useContext, useEffect, useState } from 'react'
import './App.css'
import { fetchArtistById, fetchMyProfile, fetchUserPlaylists } from './fetch'
import Clock from './components/Clock'
import FlashContainer from './components/Flashcard/FlashContainer'
import { spotifyAuthUrl } from './auth'
import Layout from './components/layout'

function App() {
  const [chart, setChart] = useState([])
  const [profile, setProfile] = useState([])


  useEffect(() => {
    const loadArtist = async () => {
      try {
        const data = await fetchArtistById('0TnOYISbd1XYRBk9myaseg');
        setChart(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    loadArtist();
  }, []);
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchMyProfile();
        setProfile(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    loadProfile();
  }, []);



  return (
    <>
      {/* <div>
        {profile.display_name ? <><h1>{profile.display_name}</h1> <button onClick={(id) => fetchUserPlaylists(profile.id)}>fetch</button></> : <a href={spotifyAuthUrl}>
          <button>Login with Spotify Account</button>
        </a>}
        <Clock />
        <FlashContainer />
      </div> */}
      <Layout />
    </>
  )
}

export default App

// SLEEK || ROUND EDGES || RESPONSIVE || CUSTOMIZE WIDGETS
// 16 x 16 grid layout
