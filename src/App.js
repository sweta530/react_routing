import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Posts from './components/Posts';
import Company from './components/Company';
import Area from './components/Area';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/' element={<About />} >
            <Route path='company' element={<Company />} />
            <Route path='area' element={<Area />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Page404 />} />
          <Route path='posts' element={<Posts />}>
              <Route path=':postId' element={<Posts />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
