import { useState } from "react";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import LandingPage from "./components/pages/LandingPage";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-col center wrapper">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
