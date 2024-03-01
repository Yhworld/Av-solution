import './styles.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Audio from './components/Features/Audio';
import { Route, Routes } from 'react-router-dom';
import Video from './components/Features/Video';
import Networking from './components/Features/Networking';
import Editing from './components/Features/Editing';
import ScrollToTop from './pages/ScrollToTop';
import ContactPage from './components/Contact/ContactPage';
import AboutPage from './components/About/AboutPage';

function App() {
  return (
    <>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route exact  path="/" element={ <HomePage /> } ></Route>
      <Route exact  path="/audioservice" element={ <Audio /> } ></Route>
      <Route exact  path="/videoservice" element={ <Video /> } ></Route>
      <Route exact  path="/networking" element={ <Networking /> } ></Route>
      <Route exact  path="/editing" element={ <Editing /> } ></Route>
      <Route exact  path="/contact" element={ <ContactPage /> } ></Route>
      <Route exact  path="/about" element={ <AboutPage /> } ></Route>
    </Routes>
    </>
  );
}

export default App;
