import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>

    </div>
  );
}

export default App;
