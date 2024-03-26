import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/homepage';
import Character from './pages/character/character';
import Contact from './pages/contact/contact';
import EmailForm from './apps/emailsender';
import Coding from './pages/character/coding/coding';
import Paints from './pages/character/paints/paints';
import Writing from './pages/character/writing/writing';
import Resume from './pages/resume/resume';

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
      <Route path='/contact/email' element={<EmailForm />} />
      <Route path='/Resume' element={<Resume />} />
    </Routes>
</BrowserRouter>

    </div>

  );
}

export default App;
