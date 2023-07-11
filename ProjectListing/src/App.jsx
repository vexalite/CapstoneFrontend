import './App.css'

//Components
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import ProxyContent from './components/proxyContent/ProxyContent'

//Tests
import Login from './components/login/Login'
import Register from './components/register/Register'
import EntryMain from './components/entry/EntryMain'

function App() {

  return (
    <div className='app'>
      {/* <Header/>
      <ProxyContent/>
      <Footer/> */}
      <EntryMain/>
    </div>
  )
}

export default App
