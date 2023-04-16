import styled from 'styled-components';
import { tablet } from 'utils/mixins/adaptMixins';

export const CustomLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 335px;

  ${tablet`
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  `}
`;
