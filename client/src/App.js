import React from 'react'
import * as ReactDOM from "react-dom/client";


import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './Pages/home/Home';
import List from './Pages/list/List';
import Hotel from './Pages/Hotel/Hotel';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>


   </Routes>
   </BrowserRouter>
  )
}

export default App
