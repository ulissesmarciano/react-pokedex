import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .filter-btn {
    height: 1.875rem;
    padding: 0 .4rem;

    display: flex;
    gap: .3rem;
    align-items: center;

    border: 1px solid #f1636b;
    background-color: #f1636b;
    color: #fff;
    border-radius: 5px;

    transition: 0.3s ease;
  }

  .filter-btn:hover {
    background-color: transparent;
    color: #f1636b;
  }

  .filter-btn.active {
    background-color: transparent;
    color: #f1636b;
    border-color: #f1636b;
  }

  .filter-btn svg {
    margin-top: .2rem;
    transition: transform 0.3s ease;
  }

  .rotate {
    transform: rotate(-180deg);
  }

  .dropdown-list {
    display: none;
  }

  .dropdown-list.active {
    position: absolute;
    right: 0;
    top: 35px;

    width: 11rem;
    display: flex;
    flex-wrap: wrap;
    gap: .4rem;


    padding: 1rem;
    border: 1px solid #b44b5060;
    background-color: #f1f1f1;
    border-radius: 5px;

    @keyframes openDropdown {
      0% {
        transform: scaleY(0);
        opacity: 0;
      }

      100% {
        transform: scaleY(1);
        opacity: 1;
      }
      
    }

    transform-origin: top;
    animation: openDropdown 0.3s ease;
  }

  .dropdown-list .item {
    cursor: pointer;

    padding: .2rem .4rem;
    border: 1px solid #f1636b;
    border-radius: 1rem;

    text-transform: capitalize;
    transition: 0.3s;

    &:hover {
        background-color: #f1636b;
        color: #fff;
    }
  }

  .dropdown-list .reset-item {
    cursor: pointer;

    background-color: #f1636b;
    color: #fff;

    padding: .2rem .4rem;
    border: 1px solid #f1636b;
    border-radius: 1rem;

    transition: 0.3s;

    &:hover {
      background-color: #fff;
      color: #f1636b;
    }
  }
  
  @media (min-width: 425px) {
    .filter-btn {
      height: 2.2rem;
    }

    .dropdown-list.active {
      top: 40px;
    }
  }

  @media (min-width: 650px) {
    .filter-btn {
      height: 2.4rem;
    }

    .dropdown-list.active {
      top: 43px;
    }
  }
`;
