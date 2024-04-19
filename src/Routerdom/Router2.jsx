import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Spotifynav from '../components/spotifynav'
import Spotifyp1 from '../components/spotifyp1'
import Spotifyp2 from '../components/spotifyp2'
import Spremium from '../components/Spremium'
import Spremium2 from '../components/Spremium2'
import Sfooter from '../components/sfooter'
import Ssupport from '../components/Ssupport'

function Router2() {
  return (
    <div>
      
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<><Spotifynav/><Spotifyp1/><Spotifyp2/><Sfooter/></>}></Route>
            <Route path='/premium' element={<><Spotifynav/><Spremium/><Sfooter/></>}></Route>
            <Route path='/support' element={<><Ssupport/><Sfooter/></>}></Route>
         </Routes>

       </BrowserRouter>

    </div>
  )
}

export default Router2