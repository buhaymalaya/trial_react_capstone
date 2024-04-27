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
import DiscussLoginPage from './components/pages/DiscussLoginPage.jsx'
import IntakeLoginPage from './components/pages/IntakeLoginPage.jsx'
import ProfileLoginPage from './components/pages/ProfileLoginPage.jsx'
import BodyLoggedIn from './components/BodyLoggedIn.jsx'
import PostToReplyPage from './components/forms/PostToReplyForm.jsx'
import ReplyPage from './components/pages/ReplyPage.jsx'

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
        <Route path='/discusslogin' element={<DiscussLoginPage />}/>
        <Route path='/intakelogin' element={<IntakeLoginPage />}/>
        <Route path='/profilelogin' element={<IntakeLoginPage />}/>
        <Route path='/login/loggedin' element={<BodyLoggedIn />}/>
        <Route path='/logout' element={<HomeActual />}/>
        <Route path='/intakelogin/loggedin' element={<BodyLoggedIn />}/>
        <Route path='/discusslogin/loggedin' element={<DiscussionPage />}/>
        <Route path='/discusslogin/loggedin/:postId' element={<PostToReplyPage />}/>
        <Route path='/discusslogin/loggedin/:postId/reply' element={<ReplyPage />}/>




      </Routes>



    </Container>
  )
}
