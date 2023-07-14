import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, Navigate} from 'react-router-dom'

//Components
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import ProxyContent from './components/proxyContent/ProxyContent'

import SkillList from './components/skillList/SkillList'

//Tests
import EntryMain from './components/entry/EntryMain'
import LandingPage from './components/landingPage/LandingPage'
import Dashboard from './components/dashboard/Dashboard'

import DevComp from './subComps/DevComp'

function App() {

  const isAuthenticated = (localStorage.getItem('accessToken') !== null)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/entry/*" element={<EntryMain/>} />
        <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to='/entry' replace/>}
      />
      </Routes>
    </BrowserRouter>

    // <div className='app'>
    //   {/* <Header/>
    //   <ProxyContent/>
    //   <Footer/> */}
    //   {/* <EntryMain/> */}
    //   {/* <SkillList/> */}
    //   <DevComp/>
    // </div>
  )
}

export default App
