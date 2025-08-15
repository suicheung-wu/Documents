import "./App.css";
import { browserRouter, LinK, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <ul>
        <li>
          <link to='/'>Home</link>
        </li>
        <li>
          <LinK to='/about'>About</LinK>
        </li>
        <li>
          <LinK to='/contact'>Contact</LinK>
        </li>
        </ul> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
