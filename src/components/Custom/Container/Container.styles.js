import styled from 'styled-components';
import { mobile, tablet } from 'utils/mixins/adaptMixins';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  justify-content: space-between;

  ${mobile`
    flex-direction: column
  `}

  ${tablet`
    flex-direction: column
  `}
`;
