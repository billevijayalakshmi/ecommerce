
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import "./App.css"
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'

import ComputersPage from './stores/pages/ComputersPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import WatchesPage from './stores/pages/WatchesPage'
import TvPage from './stores/pages/TvPage'
import KitchenPage from './stores/pages/KitchenPage'
import FurniturePage from './stores/pages/FurniturePage'
import FridgePage from './stores/pages/FridgePage'
import BooksPage from './stores/pages/BooksPage'
import AcPage from './stores/pages/AcPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import AcSingle from './singles/AcSingle'
import ComputerSingle from './singles/ComputerSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomenSingle'
import WatchSingle from './singles/WatchSingle'
import FridgeSingle from './singles/FridgeSingle'
import TvSingle from './singles/TvSingle'
import BooksSingle from './singles/BooksSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        
        <Route path='/mobile' element={<MobilePage/>}/>
        <Route path="/computers" element={<ComputersPage/>} />
        <Route path="/men" element={<MenPage/>}/>
        <Route path="/women" element={<WomenPage/>}/>
        <Route path="/watches" element={<WatchesPage/>}/>
        <Route path="/tv" element={<TvPage/>}/>
        
        <Route path="/kitchen" element={<KitchenPage/>}/>
        <Route path="/furniture" element={<FurniturePage/>}/>
        <Route path="/fridge" element={<FridgePage/>}/>
        <Route path="/books" element={<BooksPage/>}/>
        <Route path="/ac" element={<AcPage/>}/>
        <Route path="/mobile/:id" element={<MobileSingle/>}/>
        <Route path="/cart" element={<UserCart/>}  />
        <Route path='/ac/:id' element = {<AcSingle/>} />
        <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      <Route path='/tv/:id' element = {<TvSingle/>} />
      <Route path='/book/:id' element = {<BooksSingle />} />
      </Routes>
      
    </div>
  )
}

export default App