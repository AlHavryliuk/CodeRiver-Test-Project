import styled from 'styled-components';
import { opacityAnimate } from 'utils/animation/opacityAnimation';
import { mobile } from 'utils/mixins/adaptMixins';

export const CustomInfoBlock = styled.div`
  width: 100%;
  padding: 41px 0 85px;
  margin-top: 135px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 1);
  animation: ${opacityAnimate} 2.5s ease-in-out forwards;
`;

export const InfoSubTitle = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
`;

export const TextTinfo = styled.p`
  padding: 0 48px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;

  ${mobile`
    font-size: 26px;
    text-align: center;
  `}

  &:nth-of-type(2) {
    margin-top: 40px;
  }
`;
