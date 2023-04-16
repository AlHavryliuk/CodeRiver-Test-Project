import styled from 'styled-components';
import { opacityAnimate } from 'utils/animation/opacityAnimation';
import { mobile } from 'utils/mixins/adaptMixins';

export const CustomTitleText = styled.h1`
  font-size: 90px;
  animation: ${opacityAnimate} 2s ease-in-out forwards;

  ${mobile`
    font-size: 58px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 35px
  `}

  & br:nth-of-type(2) {
    ${mobile`
      display: none;
  `}
  }
`;

export const RotateText = styled.span`
  background-color: rgba(186, 253, 55, 1);
  padding: 5px;
  display: inline-block;
  transform: rotateZ(16deg);
  border-radius: 9px;
  position: relative;

  transition: all 0.3s ease-out;
  animation: ${opacityAnimate} 2.1s ease-in-out forwards;

  ${mobile`
    transform: rotate(0deg);
  `}

  &:hover {
    transform: rotate(0deg) scale(0.9);
  }

  &::after {
    content: '*';
    position: absolute;
    top: -45px;
    right: -39px;
    animation: ${opacityAnimate} 3s ease-in-out forwards;
  }
`;
