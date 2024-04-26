import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import AboutDecoy from './components/pages/AboutDecoy'
import HomeDecoy from './components/pages/HomeDecoy'
import HomeActual from './components/pages/HomeActual'
import AboutActual from './components/pages/AboutActual'
import ResourcesPage from './components/pages/ResourcesPage'
import DiscussionPage from './components/pages/DiscussionPage.jsx'

import { searchAPI } from './211api.jsx'

export default function App() {
  return (
    <Container fluid className='app'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomeDecoy />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />}/> 
        <Route path='/aboutdecoy' element={<AboutDecoy />}/>
        <Route path='/home' element={<HomeActual />}/>
        <Route path='/about' element={<AboutActual />}/>
        <Route path='/resources' element={<ResourcesPage />}/>
        <Route path='/discuss' element={<DiscussionPage />}/>

      
        {/* <Route path='/intake' element={<Intake />}/> */}
        




      </Routes>



    </Container>
  )
}
