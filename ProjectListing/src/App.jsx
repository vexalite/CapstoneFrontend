import "./App.css";
import Login from "./components/Login";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* here in react-router-dom v6 Switch is replaced with Routes*/}
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          {/* <Route path="home" element={<Home />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
