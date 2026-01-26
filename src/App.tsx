import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import NotFountPage from "./components/NotFountPage"
import Details from "./components/Details"
// import Home from "./components/Home"

function App() {

  return (
    <>
      <Header/>
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NotFountPage/>} />
        <Route path="/movies/details/:movieID" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
