import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchChart } from './fetch'

function App() {
  const [count, setCount] = useState(0)
  const [chart, setChart] = useState([])

  useEffect(() => {
    const loadChart = async () => {
      try {
        const data = await fetchChart();
        setChart(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    loadChart();
  }, []);

  console.log(chart?.albums.data[4].artist.name)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>{chart?.albums.data[4].artist.type}</h1>
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
