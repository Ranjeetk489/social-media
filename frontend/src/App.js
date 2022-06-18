import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SignIn, SignUp, Navbar , Dashboard, CreatePost, Suggestion,Follow, ProtectedRoute} from './components';
import {LandingPage} from './pages';

function App() {
  return ( 
    <div className="App">
      {/* <LandingPage></LandingPage> */}
      <BrowserRouter>
        <Routes>
          <Route element ={<ProtectedRoute/>}>
          <Route path="/" element={<Navbar />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element = {<SignUp/>} />
          </Route>
          </Routes>
      </BrowserRouter>
      {/* <Navbar></Navbar> */}
    </div>
  )
}

export default App;
