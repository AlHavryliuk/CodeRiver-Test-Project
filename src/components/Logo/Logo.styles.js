import { animated } from 'react-spring';
import styled from 'styled-components';
import { mobile, tablet } from 'utils/mixins/adaptMixins';

export const CustomLogo = styled(animated.h3)`
  font-family: 'Jomhuria';
  color: rgba(46, 51, 65, 1);
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80px;
  cursor: pointer;

  & button {
    background-color: transparent;
    border: none;
  }

  & svg {
    display: none;

    ${mobile`
      display: block;
  `}

    ${tablet`
      display: block;
  `}
  }

  ${tablet`
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 50px;
      font-size: 65px;
  `}

  ${mobile`
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 0.5em;
      font-size: 65px;
      
  `}
`;
