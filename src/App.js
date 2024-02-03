import './styles.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <div className="container relative mx-auto p-4">
    <Navbar />
    </div>
    <HomePage />
    </>
  );
}

export default App;
