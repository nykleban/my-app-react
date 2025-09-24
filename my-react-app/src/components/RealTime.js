import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import gif from "../assets/clock.gif";

const url = "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Kyiv";
const options = {
  method: "GET",
};

export default function RealTime() {
  const [displayMode, setDisplayMode] = useState("datetime");
  const [timeOutput, setTimeOutput] = useState("");
  const [dateOutput, setDateOutput] = useState("");

  const fetchTime = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();

      // Правильний ключ з API → data.dateTime
      const dateObj = new Date(data.dateTime);

      if (displayMode === "datetime") {
        setTimeOutput(dateObj.toLocaleTimeString());
        setDateOutput(dateObj.toLocaleDateString());
      } else {
        setTimeOutput(dateObj.toLocaleTimeString());
        setDateOutput("");
      }
    } catch (e) {
      console.error("Error fetching time:", e);
      setTimeOutput("Помилка отримання часу");
      setDateOutput("");
    }
  };

  useEffect(() => {
    fetchTime();
    const timer = setInterval(fetchTime, 1000);
    return () => clearInterval(timer);
  }, [displayMode]);

  return (
    <div className="RealTime" style={{ padding: "2rem", textAlign: "center" }}>
      <button onClick={() => setDisplayMode("datetime")} style={{ marginRight: "10px", padding: "10px" }}>Показати час і дату</button>
      <button onClick={() => setDisplayMode("time")} style={{ padding: "10px" }}>Показати лише час</button>
      <h2>
        <FaRegClock /> Real Time Clock (Europe/Kyiv) <FaRegClock />
      </h2>
      <p className="time">{timeOutput}</p>
      <p className="date">{dateOutput}</p>
      <img
        src={gif}
        alt="Clock"
        style={{
          width: "200px",
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
