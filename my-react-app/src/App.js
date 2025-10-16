import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import Registration from './components/Registration';
import RealTime from './components/RealTime';
import Shop from './components/Shop';
import EventCart from './components/EventCart';
import EventDetails from './components/EventDetails';

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
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/events/*" element={<EventCart />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/details" element={<EventDetails />} />

      </Routes>
    </div>
  );
}

export default App;
