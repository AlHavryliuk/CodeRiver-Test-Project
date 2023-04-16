import { StyledCustomHeader } from "./CustomHeader.styles"
import Logo from "components/Logo/Logo"
import Navigation from "components/Navigation/Navigation"

const CustomHeader = () => {
    return (
        <StyledCustomHeader>
            <Logo />
            <Navigation />
        </StyledCustomHeader>
    )
}

export default CustomHeader