import './default.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
