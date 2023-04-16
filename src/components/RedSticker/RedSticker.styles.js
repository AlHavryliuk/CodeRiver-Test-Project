import styled from 'styled-components';
import { bounce } from 'utils/animation/stickerAnimation';
import { mobile, tablet } from 'utils/mixins/adaptMixins';

export const StyledSticker = styled.h4`
  width: 106px;
  height: 106px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 65px;
  right: 92px;
  border-radius: 50%;
  background-color: rgba(245, 67, 41, 1);
  transform: rotateZ(30deg);
  color: white;
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;
  animation: ${bounce} 1s ease-out;
  transition: all 0.3s ease-out;

  ${mobile`
      display: none;
  `}

  ${tablet`
      display: none;
  `}

  &:hover {
    animation: ${bounce} 0.5s ease-out;
    transform: rotate(50deg) scale(1.2);
  }
`;
