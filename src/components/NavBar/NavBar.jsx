import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import { useGetCategories } from "../../hooks/useProducts";

const NavBar = () => {
  const { categorias } = useGetCategories();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">Apple Lucas</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categorias.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}> 
                    <Link key={index} to={`/category/${category.nombre}`}>
                      {category.nombre}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;