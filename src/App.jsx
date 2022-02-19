import Navbar from "./components/layouts/Navbar"
import LandingPage from "./components/pages/LandingPage"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="flex-col center wrapper">
        <LandingPage/>
        <input type="file" />
      </div>
    </div>
  )
}

export default App
