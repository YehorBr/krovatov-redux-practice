import { NavLink } from "react-router-dom";
import './style.css'

export const NavBar = () => {
  return (
    <>
      <nav className="navigation">
        <NavLink className="navigation-link code">Про нас</NavLink>
        <NavLink className="navigation-link code">Оплата</NavLink>
        <NavLink className="navigation-link code">Доставка та збірка</NavLink>
        <NavLink className="navigation-link code">Відгуки</NavLink>
        <NavLink className="navigation-link code">Блог</NavLink>
        <NavLink className="navigation-link code">Контакти</NavLink>
      </nav>
    </>
  );
};
