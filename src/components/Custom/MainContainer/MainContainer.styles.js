import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixins';

export const StyledMainContainer = styled.div`
  max-width: 1351px;
  width: 100%;
  padding: 80px 91px 159px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: rgba(225, 227, 233, 1);

  ${mobile`
    padding: 40px 15px;
  `}
`;
