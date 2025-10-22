import { NavLink, Outlet } from "react-router-dom";
import { NavBar } from "./Pages/NavBar/NavBar";
import { Help } from "./Pages/Help/Help";
import { InputBar } from "./Pages/InputBar/InputBar";
import { Advantages } from "./Pages/Advantages/Andvantages";
import { Types } from "./Pages/Types/Types";
import './layout.css';
import { Container } from "./Components/Container/Container";

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
        <div className="header-topline">
        <NavBar />
        <Help />
        </div>
        <InputBar />
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/catalog"}>Catalog</NavLink>
          <NavLink to={"/checkout"}>CheckOut</NavLink>
        </nav>
        <Types />
        </Container>
      </header>
      <main>
        <Container>
        <Outlet />
        </Container>
      </main>
      <footer>
        <Container>
        </Container>
      </footer>
    </>
  );
};
