import styled from 'styled-components';
import { mobile, tablet } from 'utils/mixins/adaptMixins';

export const CustomPhotoWrapper = styled.div``;

export const CustomImage = styled.img`
  width: 255px;
  height: 304px;
`;

export const SliderWraper = styled.div`
  margin-bottom: 50px;

  & .slick-list {

    max-height: 310px;



    max-height: 310px;

  }

  & .slick-slide {
    width: 275px !important;
  }

  & .slick-arrow {
    width: 76px;
    height: 76px;
    z-index: 3;

    &::before {
      font-size: 70px;

      width: 60px;
      height: 60px;
      display: block;
      border-radius: 50%;
    }
  }

  & .slick-next {
    right: -25px;
  }

  & .slick-prev {
    left: -25px;
  }
`;
