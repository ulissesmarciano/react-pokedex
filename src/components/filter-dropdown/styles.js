import styled from "styled-components";

export const Container = styled.div`
  .filter-btn {
    height: 100%;
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

  /* Estilo ativo (igual ao hover) */
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
`;
