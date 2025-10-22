import { NavLink, Outlet } from "react-router-dom";
import { NavBar } from "./Pages/NavBar/NavBar";
import { Help } from "./Pages/Help/Help";
import { InputBar } from "./Pages/InputBar/InputBar";
import { Advantages } from "./Pages/Advantages/Andvantages";
import { Types } from "./Pages/Types/Types";
import { HeaderTopline } from "./header.styled.jsx";
import { Component } from "lucide-react";
import { Container } from './Components/Container/Container.jsx'

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <HeaderTopline>
            <NavBar />
            <Help />
          </HeaderTopline>
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/catalog"}>Catalog</NavLink>
            <InputBar />
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
