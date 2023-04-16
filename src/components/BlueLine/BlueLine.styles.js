import styled from 'styled-components';
import { opacityAnimate } from 'utils/animation/opacityAnimation';
import { tablet } from 'utils/mixins/adaptMixins';

export const CustomLine = styled.img`
  position: absolute;
  top: 270px;
  left: 0;
  animation: ${opacityAnimate} 1s ease-in-out forwards;

  ${tablet`
      top: 657px;
  `}
`;
