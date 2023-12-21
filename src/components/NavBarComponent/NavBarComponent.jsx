import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/productsService";
import { useState, useEffect } from "react";


const NavBar = () => {
  const [categoryData, setcategoryData] = useState([]);

  useEffect(() => {
    getCategories().then((respuesta) => {
      setcategoryData(respuesta.data);
    })
  })

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">Tienda Daniel</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categoryData.map((item, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${item.id}`} className="dropdown-item">{item.name}</Link>
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