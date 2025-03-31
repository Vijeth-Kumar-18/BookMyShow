import React from 'react';
import { Button } from 'react-bootstrap';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <Button
      variant={isDark ? 'light' : 'dark'}
      onClick={onToggle}
      className="d-flex align-items-center"
      size="sm"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="ms-2 d-none d-md-inline">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </Button>
  );
};

export default DarkModeToggle;