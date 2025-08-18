
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './components/page/Home'
import About from './components/page/About'
import Service from './components/page/Service'




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
