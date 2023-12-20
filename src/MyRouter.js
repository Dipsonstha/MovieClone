import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound'
const MyRouter = () => {
  return (
   <Router>

    <Routes>
       
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/features' element={<Features/>}/>
        <Route path='/projects' element={<Projects/>}/>
       </Route>
       <Route path='/*' element={<NotFound/>}/>
    </Routes>
   </Router>
  )
}

export default MyRouter

