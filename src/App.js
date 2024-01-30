import './styles.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container relative mx-auto p-4">
    <Navbar />
    <HomePage />
    </div>
  );
}

export default App;
