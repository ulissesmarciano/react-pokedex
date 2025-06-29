import styled from "styled-components";
import { buttonStyles, type VariantType } from "@/constants/buttonStyles";

export const FloatButton = styled.button<{ $variant: VariantType }>`
  ${({ $variant }) => buttonStyles[$variant] || ""}
`;
