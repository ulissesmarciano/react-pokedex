import { useState, forwardRef } from "react";
import { Container } from "@/components/FilterDropDown/styles";
import { FaChevronDown } from "react-icons/fa";
import types from "@/constants/types";

interface FilterDropDownProps {
  onClickItem: (type: string) => void;
  onClickResetItem: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterDropDown = forwardRef<HTMLDivElement, FilterDropDownProps>(
  ({ onClickItem, onClickResetItem }: FilterDropDownProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <Container ref={ref}>
        <button
          className={`filter-btn ${isOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          <span>Type</span>
          <FaChevronDown className={isOpen ? "rotate" : ""} />
        </button>
        <div className={`dropdown-list ${isOpen ? "active open-drawer" : ""}`}>
          <button className="reset-item" onClick={onClickResetItem}>
            Todos
          </button>
          {types.map((type, index) => (
            <button
              className="item"
              key={index}
              onClick={() => onClickItem(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </Container>
    );
  }
);

export default FilterDropDown;
