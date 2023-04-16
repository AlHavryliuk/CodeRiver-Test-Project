import styled from 'styled-components';

export const MobNavBody = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  font-size: 35px;
  z-index: 6;

  & button {
    position: absolute;
    top: 35px;
    right: 35px;
    font-size: 55px;
    background-color: transparent;
    border: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;

  & li {
    & div {
      display: flex !important;
      

      & span {
        display: none;
      }

      & > ul {
        justify-content: center;
      }
    }
  }
`;
