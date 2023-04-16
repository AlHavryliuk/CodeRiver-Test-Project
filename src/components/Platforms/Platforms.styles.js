import styled from 'styled-components';
import { opacityAnimate } from 'utils/animation/opacityAnimation';
import { mobile, tablet } from 'utils/mixins/adaptMixins';

export const StyledIconList = styled.ul`
  display: flex;


`;
export const StyledListItem = styled.li`
  background-color: rgba(45, 50, 64, 1);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(225, 227, 233, 1);
  transition: all 0.3s;
  animation: ${opacityAnimate} 1s ease-in-out forwards;
  &:nth-of-type(2) {
    margin-left: -10px;
  }

  &:hover {
    background-color: darkred;
    scale: 1.05;
  }
`;

export const TextPlatform = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const PlatformsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mobile`
    display: none;
  `}

  ${tablet`
      display: none;
  `}
`;
