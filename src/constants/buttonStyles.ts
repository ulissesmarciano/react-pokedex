// buttonStyles.ts
import { css, keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

export const buttonStyles = {
  verMaisButton: css`
    margin-bottom: 2rem;
    padding: 12px 24px;
    background-color: #f1636b;
    color: #fff;
    border: 1px solid #f1636b;
    border-radius: 0.5rem;
    cursor: pointer;
    animation: ${float} 3s ease-in-out infinite;
    transition: background-color 0.3s;

    &:hover {
      color: #f1636b;
      background-color: #fff;
    }
  `,
} as const;

export type VariantType = keyof typeof buttonStyles;
