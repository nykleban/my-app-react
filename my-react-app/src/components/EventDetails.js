import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function EventDetails() {
  const { state } = useLocation();
  const event = state?.event;

  if (!event) {
    return (
      <div className="event-details">
        <h2>Подію не знайдено</h2>
        <Link to="/events" className="backButton">
          ← Повернутися до подій
        </Link>
      </div>
    );
  }

  const start = new Date(event.start);
  const end = new Date(event.end);
  const dateText = `${start.toLocaleDateString(
    "uk-UA"
  )} ${start.toLocaleTimeString("uk-UA")} — ${end.toLocaleTimeString("uk-UA")}`;

  return (
    <div className="event-details">
  <img src={event.image} alt={event.title} />
  <div className="event-details-content">
    <h1>{event.title}</h1>
    <p><strong>Категорія:</strong> {event.category}</p>
    <p><strong>Місце:</strong> {event.venue}, {event.city}</p>
    <p><strong>Адреса:</strong> {event.address}</p>
      <p>
        <strong>Дата та час:</strong> {dateText}
      </p>
    <p><strong>Ціна:</strong> {event.priceMin}–{event.priceMax} {event.currency}</p>
    <p><strong>Організатор:</strong> {event.organizer}</p>
    <p><strong>Опис:</strong> {event.description}</p>
    <Link to="/events" className="backButton">← Повернутися назад</Link>
  </div>
</div>

  );
}
