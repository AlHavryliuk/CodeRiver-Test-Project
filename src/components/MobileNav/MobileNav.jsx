import { useDispatch } from "react-redux"
import { closePopup } from "store/mobileNav/mobileNavSlice"
import { MobNavBody, NavItems } from "./MobileNav.styles"
import Platforms from "components/Platforms/Platforms"

const MobileNav = () => {

    const dispatch = useDispatch()

    return (
        <MobNavBody>
            <button onClick={() => dispatch(closePopup())}>×</button>
            <NavItems>
                <li>Clothes</li>
                <li>Sneakers</li>
                <li>Bags</li>
                <li>Accessorize</li>
                <li><Platforms /></li>
            </NavItems>
        </MobNavBody>
    )
}

export default MobileNav