import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import Registration from './components/Registration';
import RealTime from './components/RealTime';

function App() {
  return (
    <div className="App">
      <header>

        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={ <Registration />} />
        <Route path="/realtime" element={ <RealTime />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
