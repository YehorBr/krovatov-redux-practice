import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink>Про нас</NavLink>
        <NavLink>Оплата</NavLink>
        <NavLink>Доставка та збірка</NavLink>
        <NavLink>Відгуки</NavLink>
        <NavLink>Блог</NavLink>
        <NavLink>Контакти</NavLink>
      </nav>
    </>
  );
};
