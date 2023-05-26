import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Info from "./pages/Info";


const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/info/:id" element={<Info/>}/>
    </Routes>
    </>
  )
}

export default App;