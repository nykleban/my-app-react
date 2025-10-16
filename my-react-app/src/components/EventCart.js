import React from "react";
import { EventsContext } from "../contexts/EventsContext";
import Events from "./Events";
import eventsData from "./json_files/events.json";

export default function EventCart() {
  const { setEvents } = React.useContext(EventsContext);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const allEvents = eventsData.events;
    const catsFile = eventsData.categories;
    const catsFromEvents = Array.from(new Set(allEvents.map(e => e.category))); // поміг ChatGPT :) я не міг ніяк дістати категорії
    const cats = catsFile.length ? catsFile : catsFromEvents;

    console.log("Events loaded:", allEvents.length);
    console.log("Сategories loaded:", cats);

    setEvents(allEvents);
    setCategories(cats);
  }, [setEvents]);
  const translateCategory = (cat) => {
    switch(cat) {
      case 'cinema': return 'Кіно';
        case 'concert': return 'Концерт';
        case 'standup': return 'Стендап';
        default: return cat;
    }
  };
  return (
    <div>
      <h1>Події</h1>
      <button onClick={() => setEvents(eventsData.events)} className="categoryButton">
        Всі категорій
      </button>
      {categories.map(cat => (
        <button className="categoryButton" key={cat} onClick={() => setEvents((eventsData.events).filter(e => e.category === cat))}>
          {translateCategory(cat)}
        </button>
      ))}

      <Events />
    </div>
  );
}
