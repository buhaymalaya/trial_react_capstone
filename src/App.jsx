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
import PostToReplyPage from './components/pages/PostToReplyPage.jsx'
import ReplyPage from './components/pages/ReplyPage.jsx'
import IntakePage from './components/pages/IntakePage.jsx'
import { searchAPI } from './211api.jsx'
import ProfilePage from './components/pages/ProfilePage.jsx'
// import ProfileEditPage from './components/pages/ProfileEditPage.jsx'
// import DeleteProfileForm from './components/forms/DeleteProfileForm.jsx'
// import UserDetailsTable from './components/UserDetailsTable.jsx'
import YouAreLoggedIn from './components/pages/YouAreLoggedIn.jsx'

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
        <Route path='/login/loggedin' element={<YouAreLoggedIn />}/>
        <Route path='/logout' element={<HomeActual />}/>
        
        <Route path='/intakelogin/loggedin' element={<IntakePage />}/>
        
        <Route path='/discusslogin/loggedin' element={<DiscussionPage />}/>
        <Route path='/discusslogin/loggedin/:postId' element={<PostToReplyPage />}/>
        <Route path='/discusslogin/loggedin/:postId/reply' element={<ReplyPage />}/>
        
        <Route path='/intakepage' element={<IntakePage />}/>
        <Route path='/intakelogin/loggedin' element={<YouAreLoggedIn />}/>
        
        <Route path='/profilelogin' element={<ProfileLoginPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='profilelogin/loggedin/' element={<ProfilePage />}/>
        <Route path='profile/loggedin/' element={<ProfilePage />}/>

        {/* <Route path='/user/:userId' element={<ProfileEditPage />}/> */}
        {/* <Route path="/user/:id/delete" component={DeleteProfileForm} /> */}
        {/* <Route path="/user/:id" component={UserDetailsTable} /> */}




      </Routes>



    </Container>
  )
}
