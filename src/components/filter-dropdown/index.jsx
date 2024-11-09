import React, { useState } from 'react';
import { Container } from './styles';
import { FaChevronDown } from "react-icons/fa";

const FilterDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <button className={`filter-btn ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
        <span>Tipo</span>
        <FaChevronDown className={isOpen ? 'rotate' : ''} />
      </button>
    </Container>
  );
};

export default FilterDropDown;
