import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import OTP from './components/OTP';
import Login from './components/Login';
import Preference from './components/Preference';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/otp' element={<OTP />} />
          <Route path='/login' element={<Login />} />
          <Route path='/preference' element={<Preference />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;