import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Search } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const SearchBar = () => {
  const { isDark } = useDarkMode(); 
  const [query, setQuery] = useState('');

  const inputStyle = {
    backgroundColor: isDark ? '#333' : '#fff', 
    color: isDark ? '#fff' : '#000', 
    border: '1px solid',
    borderColor: isDark ? '#666' : '#ccc', 
  };

  const placeholderStyle = `
    ::placeholder {
      color: ${isDark ? '#fff' : '#aaa'}; /* White in dark mode, gray in light mode */
    }
  `;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${query}`);
    
  };

  return (
    <Form className="d-flex align-items-center" onSubmit={handleSearch}>
      <style>{placeholderStyle}</style>
      <Form.Control
        type="search"
        placeholder="Search..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
      />
      <Button variant="outline-light" type="submit">
        <Search size={20} />
      </Button>
    </Form>
  );
};

export default SearchBar;