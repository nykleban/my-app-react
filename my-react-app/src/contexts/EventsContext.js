import React from "react";

export const EventsContext = React.createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]); 

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(x => x != id) : [...prev, id]
    );
  };

  const value = { events, setEvents, favorites, toggleFavorite };
  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
}
