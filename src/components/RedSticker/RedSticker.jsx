import { useSpring } from "react-spring";
import { StyledSticker } from "./RedSticker.styles"

const RedSticker = () => {
    const animation = useSpring({
        from: { transform: 'translateY(-50px)' },
        to: { transform: 'translateY(0)' },
    });
    return (
        <StyledSticker style={animation}>BUY</StyledSticker>
    )
}

export default RedSticker