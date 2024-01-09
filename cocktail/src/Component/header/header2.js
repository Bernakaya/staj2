// Header2.js
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header2.css';

const Header2 = ({ onSearch, onCategoryChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <header className="header">
      <Navbar expand="lg" className="nav-container">
        <Navbar.Brand as={Link} to="#home">
          Logo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="#anasayfa" className="nav-link-white">
              Anasayfa
            </Nav.Link>

            <NavDropdown title="Kategoriler" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/alkollu" onClick={() => handleCategoryChange('alkollu')}>
                Alkollü İçecekler
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/alkolsuz" onClick={() => handleCategoryChange('alkolsuz')}>
                Alkolsüz İçecekler
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/cocktail" onClick={() => handleCategoryChange('cocktail')}>
                Cocktail
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cocoa" onClick={() => handleCategoryChange('cocoa')}>
                Cocoa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/punch-party-drink" onClick={() => handleCategoryChange('punch-party-drink')}>
                Punch / Party Drink
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shake-shot" onClick={() => handleCategoryChange('shake-shot')}>
                Shake
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/coffee-tea" onClick={() => handleCategoryChange('coffee-tea')}>
              Shot
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/coffee-tea" onClick={() => handleCategoryChange('coffee-tea')}>
                Coffee / Tea
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beer" onClick={() => handleCategoryChange('beer')}>
                Beer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ordinary-drink" onClick={() => handleCategoryChange('ordinary-drink')}>
                Ordinary Drink
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/other-unknown" onClick={() => handleCategoryChange('other-unknown')}>
                Other / Unknown
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/homemade-liqueur" onClick={() => handleCategoryChange('homemade-liqueur')}>
                Homemade Liqueur
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/optional-alcohol" onClick={() => handleCategoryChange('optional-alcohol')}>
                Optional Alcohol
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <FormControl
              type="text"
              placeholder="Ara"
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className='button' variant="outline-success" onClick={handleSearch}>
              Ara
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header2;