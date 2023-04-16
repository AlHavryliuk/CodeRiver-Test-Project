import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform: translateY(-50px) rotate(30deg);
  }
  60% {
    transform: translateY(0) rotate(30deg);
  }
  80% {
    transform: translateY(-20px) rotate(30deg);
  }
  100% {
    transform: translateY(0) rotate(30deg);
  }
`;

export const extendWidth = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%
  }
`;
