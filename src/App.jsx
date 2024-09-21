import React from 'react'
import TotalBottlesHeated from './components/TotalBottlesHeated.jsx'
import CreateNewActivity from './components/CreateNewActivity.jsx'
import Week from './components/Week.jsx'
import Header from './components/Header.jsx'

function App() {

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-600 to-yellow-950 text-white text-sm sm:text-based">
      <Header/>
      <TotalBottlesHeated/>
      <CreateNewActivity/>
      <Week/>
    </main>
  )
}

export default App
