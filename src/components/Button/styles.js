import styled from "styled-components";
import { buttonStyles } from "../../constants/buttonStyles";

export const FloatButton = styled.button`
    ${({$variant}) => buttonStyles[$variant] || "" }
`;
