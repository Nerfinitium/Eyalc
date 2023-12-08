import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import './App.css'
import Navbar from './comps/headers/Navbar'
import Home from './pages/Home/home'
import Kantin from './pages/kantin/kantin'
import Contact from './pages/contact/contact'
import Sepet from './pages/sepet/sepet'
import Footer from './comps/footer/Footer'
import Profile  from './pages/profile/profile'
import Settings  from './pages/settings/settings'
import Sign from './pages/signin/sign'


function App() {
  return (
    <div>
    <Router>
      <Navbar />

         <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/kantin' element={<Kantin />} />
          <Route path='/sepet' element={<Sepet />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign' element={<Sign />} />

          

          </Routes>

          <Footer />
    </Router>

    </div>
  )
}

export default App
