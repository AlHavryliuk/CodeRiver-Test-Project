import { CustomPhoto, RightWrapper } from "./MaskImage.styles";



import { useSelector } from "react-redux";
import { select } from "store/selectors/select";


const MaskImage = () => {
    const currentImage = useSelector(select.currentImage)
    return (
        <>
            <RightWrapper>
                <CustomPhoto src={currentImage.path} alt={currentImage.name} />
            </RightWrapper>
        </>
    )
}

export default MaskImage