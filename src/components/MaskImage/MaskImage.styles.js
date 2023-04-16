import styled from 'styled-components';
import svgmask from '../../images/mask.svg';
import { opacityAnimate } from 'utils/animation/opacityAnimation';
import { mobile, tablet } from 'utils/mixins/adaptMixins';

export const CustomPhoto = styled.img`
  height: 95%;
  mask-image: ${`url(${svgmask})`};
  margin-top: 20px;
  object-fit: cover;
  animation: ${opacityAnimate} 2s ease-in-out forwards;

  ${mobile`
    height: auto;
    width: 100%
  `}
`;

export const RightWrapper = styled.div`
  width: 480px;
  max-height: 719px;
  display: flex;
  justify-content: center;
  object-fit: cover;

  ${mobile`
     width: 100%;
     padding: 0 15px
  `}

  ${tablet`
    margin: 0 auto;
  `}
`;
