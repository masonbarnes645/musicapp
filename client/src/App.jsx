import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchArtistById } from './fetch'

function App() {
  const [count, setCount] = useState(0)
  const [chart, setChart] = useState([])

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

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>{chart?.genres}</h1>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
