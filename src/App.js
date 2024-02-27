import './styles.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Audio from './components/Features/Audio';
import { Route, Routes } from 'react-router-dom';
import Video from './components/Features/Video';
import Networking from './components/Features/Networking';
import Editing from './components/Features/Editing';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact  path="/" element={ <HomePage /> } ></Route>
      <Route exact  path="/audioservice" element={ <Audio /> } ></Route>
      <Route exact  path="/videoservice" element={ <Video /> } ></Route>
      <Route exact  path="/networking" element={ <Networking /> } ></Route>
      <Route exact  path="/editing" element={ <Editing /> } ></Route>
    </Routes>
    </>
  );
}

export default App;
