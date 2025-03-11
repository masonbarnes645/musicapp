import { useContext, useEffect, useState } from 'react'
import './App.css'
import { fetchArtistById, fetchMyProfile, fetchUserPlaylists } from './fetch'
import { DndContext } from '@dnd-kit/core'
import Layout from './components/Layout'
import { Box, experimentalStyled } from '@mui/material'
import WidgetBox from './components/WidgetBox'
import { closestCenter } from '@dnd-kit/core'

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


  const handleDragEnd = (e) => {
    const {active, over} = e;
    console.log("test")

  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Box sx={{ width: '90vw' }}>
        <WidgetBox id={1} />
        <Layout />
      </Box>
    </DndContext>
  )
}

export default App

// SLEEK || ROUND EDGES || RESPONSIVE || CUSTOMIZE WIDGETS
// 16 x 16 grid layout
