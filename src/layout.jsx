import { NavLink, Outlet } from "react-router-dom";
import { NavBar } from "./Pages/NavBar/NavBar";
import { Help } from "./Pages/Help/Help";
import { InputBar } from "./Pages/InputBar/InputBar";
import { Advantages } from "./Pages/Advantages/Andvantages";
import { Types } from "./Pages/Types/Types";

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
        <Help />
        <InputBar />
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/catalog"}>Catalog</NavLink>
          <NavLink to={"/checkout"}>CheckOut</NavLink>
        </nav>
        <Advantages />
        <Types />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
