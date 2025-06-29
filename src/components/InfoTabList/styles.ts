import styled from "styled-components";

interface TabButtonProps {
  $isActive: boolean;
}

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TabButton = styled.li<TabButtonProps>`
  padding: 0.6rem;

  list-style: none;
  border-radius: 1rem 1rem 0 0;
  border-bottom: none;
  font-weight: bolder;

  transition: 500ms;
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
    -webkit-transform: translateY(-4%);
    transform: translateY(-4%);
    box-shadow: #00000020 0px -10px 1rem;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
        transition: all 0.5s;
        -webkit-transform: translateY(-4%);
        transform: translateY(-4%);
        box-shadow: #00000020 0px -10px 1rem;
    `}

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const InfoPage = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 0.8rem;
    }
  }
`;
