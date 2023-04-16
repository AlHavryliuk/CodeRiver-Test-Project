import { useDispatch } from "react-redux"
import { useSpring } from "react-spring"
import paragraph from '../../images/symbol-defs.svg'
import { CustomLogo } from "./Logo.styles"
import { openPopup } from "store/mobileNav/mobileNavSlice"

const Logo = () => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } })

    const dispatch = useDispatch()

    return (
        <>
            <CustomLogo style={animation}>Landing
                <button onClick={() => dispatch(openPopup())}>
                    <svg width={40} height={40}>
                        <use href={`${paragraph}#icon-paragraph-right`}></use>
                    </svg>
                </button>
            </CustomLogo>

        </>
    )
}

export default Logo