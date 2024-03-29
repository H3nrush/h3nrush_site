import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/homepage';
import Character from './pages/character/character';
import Contact from './pages/contact/contact';
import Coding from './pages/coding/coding';
import Paints from './pages/paints/paints';
import Writing from './pages/writing/writing';
import Resume from './pages/resume/resume';
import Privacy from './pages/extra/privacy';
import About from './pages/extra/about';

function App() {
  return (
    <div className='App'>

<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/character' element={<Character />} />
      <Route path='/character/coding' element={<Coding />} />
      <Route path='/character/paints' element={<Paints />} />
      <Route path='/character/writes' element={<Writing />} />
      <Route path='/contact' element={<Contact />} /> 
      <Route path='/Resume' element={<Resume />} />
      <Route path='/Privacy' element={<Privacy />} />
      <Route path='/About_this_website' element={<About />} />
    </Routes>
</BrowserRouter>

    </div>

  );
}

export default App;
