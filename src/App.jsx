import FirstSection from "./components/FirstSection"
import Navbar from "./components/Navbar"
import SectionTwo from "./components/SectionTwo"

function App() {

  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
        <FirstSection />
        <SectionTwo />
      </div>
    </>
  )
}

export default App
