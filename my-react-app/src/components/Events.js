import React from "react";
import { Link } from "react-router-dom";
import { EventsContext } from "../contexts/EventsContext";

export default function Events() {
  const { events, favorites, toggleFavorite } = React.useContext(EventsContext);

  return (
    <ul className="events">
      {events.map((event) => (
        <li key={event.id} className="eventent-card">
          <img src={event.image} alt={event.title} />
          <h3>{event.title}</h3>
          <p>
            {event.venue}, {event.city}
          </p>
          <p>{event.date || ""}</p>
          <div className="actions">
            <Link
              to="/events/details"
              state={{ event }}
              className="detailsButton"
            >
              Деталі
            </Link>
            <button
              onClick={() => toggleFavorite(event.id)}
              className={
                favorites.includes(event.id)
                  ? "favouriteButton favouriteButton--active"
                  : "favouriteButton favouriteButton--add"
              }
            >
              {favorites.includes(event.id)
                ? "У вибраному"
                : "Додати у вибрані"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
