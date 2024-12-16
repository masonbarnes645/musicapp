import { useContext, useEffect, useState } from 'react'
import './App.css'
import { fetchArtistById, fetchMyProfile } from './fetch'
import Clock from './components/Clock'
import FlashContainer from './components/Flashcard/FlashContainer'

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
      <div>
        <Clock />
        <FlashContainer/>
      </div>
    </>
  )
}

export default App
