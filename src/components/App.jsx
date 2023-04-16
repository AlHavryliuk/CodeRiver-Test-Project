import { useSelector } from "react-redux";
import BlueLine from "./BlueLine/BlueLine";
import Container from "./Custom/Container/Container";
import { GlobalStyles } from "./Custom/Global/GlobalStyles";
import LeftWrapper from "./Custom/LeftWrapper/LeftWrapper";
import { StyledMainContainer } from "./Custom/MainContainer/MainContainer.styles";
import CustomHeader from "./Header/CustomHeader";
import InfoBlock from "./InfoBlock/InfoBlock";
import MainTitle from "./MainTitle/MainTitle";
import MaskImage from "./MaskImage/MaskImage";
import MobileNav from "./MobileNav/MobileNav";
import Platforms from "./Platforms/Platforms";
import RedSticker from "./RedSticker/RedSticker";
import { select } from "store/selectors/select";


export const App = () => {

  const navPopupIsOpen = useSelector(select.mobileNav)

  return (
    <>
      <GlobalStyles />
      <StyledMainContainer>
        <CustomHeader />
        <BlueLine />
        <RedSticker />
        <Container>
          <LeftWrapper>
            <Platforms />
            <MainTitle />
          </LeftWrapper>
          <MaskImage />
        </Container>
        <InfoBlock>

        </InfoBlock>
      </StyledMainContainer >
      {navPopupIsOpen && <MobileNav />}
    </>
  );
};
