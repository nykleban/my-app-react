import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { EventsProvider } from './contexts/EventsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EventsProvider>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </EventsProvider>  
  </React.StrictMode>
);
