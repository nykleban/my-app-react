import { Link } from "react-router-dom";
import { FaAngellist } from 'react-icons/fa';

export default function Menu() {
  return (
    <div className="Menu">
      <nav>
        <div className="logo-title">
        </div>

        <ul className="menu">
          <li>
            <h3>
              <FaAngellist />
            </h3>
          </li>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/registration">Реєстрація</Link>
          </li>
           <li>
            <Link to="/realtime">Поточний час</Link>
          </li>
          <li>
            <Link to="/shop">Магазин</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
