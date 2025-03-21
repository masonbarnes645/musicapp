import { useContext, useEffect, useState } from 'react'
import './App.css'
import { fetchArtistById, fetchMyProfile, fetchUserPlaylists } from './fetch'
import { DndContext } from '@dnd-kit/core'
import Layout from './components/Layout'
import { Box, experimentalStyled } from '@mui/material'
import WidgetBox from './components/WidgetBox'
import { closestCenter } from '@dnd-kit/core'
import Clock from './components/Clock'
import DropZone from "./components/DropZone";


function App() {
  const [chart, setChart] = useState([])
  const [profile, setProfile] = useState([])
  const [dropGrid, setDropGrid] = useState(Array(18).fill(null).map((_, index) => <DropZone key={index} id={index}/>))


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
    const { active, over } = e;
    if (!over) return; 
  
    setDropGrid(prev =>
      prev.map((zone, index) =>
        index === over.id ? <WidgetBox id={over.id} guts={<Clock />} /> : zone
      )
    );
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Box sx={{ width: '80vw', overflow:'hidden' }}>
        <WidgetBox id={1} guts={<Clock/>}/>
        <Layout dropGrid = {dropGrid} />
      </Box>
    </DndContext>
  )
}

export default App

// SLEEK || ROUND EDGES || RESPONSIVE || CUSTOMIZE WIDGETS
// 16 x 16 grid layout
