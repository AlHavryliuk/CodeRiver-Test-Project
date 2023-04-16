import { animated } from 'react-spring';
import styled from 'styled-components';
import { mobile, tablet } from 'utils/mixins/adaptMixins';

export const StyledNavigation = styled(animated.ul)`
  display: flex;
  gap: 107px;

  ${mobile`
      display: none;
  `}

  ${tablet`
      display: none;
  `}

  & li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    transition: all 0.3s;
    cursor: pointer;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: -10%;
      width: 0;
      height: 2px;
      background-color: darkred;
      transition: all 0.3s;
    }

    &:hover {
      color: darkred;

      &::after {
        width: 120%;
      }
    }
  }
`;
