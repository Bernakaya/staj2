import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import './Header2.css';

const Header2 = ({ onSearch, onCategoryChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const apiUrl = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchQuery}`;
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '60bc55013dmsh1ce7455d35b1a1ap1d7b6cjsn81ab8b81d7a6',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const drinks = responseData.drinks || [];


      if (onSearch && typeof onSearch === 'function') {
        onSearch(drinks);
      } else {
        console.error('onSearch is not a function.');
      }

      navigate(`/search/${searchQuery}`);
      setSearchQuery(''); // Arama yapıldıktan sonra arama kısmını temizle
    } catch (error) {
      console.error('Error fetching drink data:', error);
    }
  };

  const handleCategoryChange = (category) => {
    // onCategoryChange prop'u kontrolü ve onCategoryChange fonksiyonunu çağırma
    if (onCategoryChange && typeof onCategoryChange === 'function') {
      onCategoryChange(category);
    } else {
      console.error('onCategoryChange is not a function.');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Formun otomatik olarak sayfayı yenilemesini önle

    // Arama işlemini gerçekleştir
    handleSearch();
  };

 

  return (
    <header className="header">
      <Navbar expand="lg" className="nav-container">
        <Navbar.Brand as={Link} to="#home">
        <Image src="/logo7.jpg" alt="" width="200" height="150" />


        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link-white">
              Anasayfa
            </Nav.Link>

            <NavDropdown title={<span style={{ color: 'white' }}>Kategoriler</span>} className='' id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/alkollu" onClick={() => handleCategoryChange('alkollu')}>
                Alkollü İçecekler
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/alkolsuz" onClick={() => handleCategoryChange('alkolsuz')}>
                Alkolsüz İçecekler
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cocktail" onClick={() => handleCategoryChange('cocktail')}>
                Cocktail
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cocoa" onClick={() => handleCategoryChange('cocoa')}>
                Cocoa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/punch-party-drink" onClick={() => handleCategoryChange('punch-party-drink')}>
                Punch / Party Drink
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shake" onClick={() => handleCategoryChange('shake')}>
                Shake
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shot" onClick={() => handleCategoryChange('shot')}>
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
             
              {/* Add more categories here */}
            </NavDropdown>
          </Nav>

          <Form inline onSubmit={handleSearchSubmit}>
            <FormControl
              type="text"
              placeholder="Ara"
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className='button' variant="outline-success" type="submit">
              Ara
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header2;
