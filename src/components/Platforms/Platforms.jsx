import { useEffect, useState } from 'react'
import icon from '../../images/symbol-defs.svg'
import { StyledIconList, StyledListItem, TextPlatform, PlatformsWrapper } from "./Platforms.styles"

const Platforms = () => {

    const [platformText, setPlatformText] = useState('')

    useEffect(() => {
        const text = 'App available'
        const f = setTimeout(() => {

            if (platformText !== text) {
                setPlatformText(() => {
                    return text.slice(0, platformText.length + 1)
                })

            } else {
                clearTimeout(f)
            }

        }, 200)
    }, [platformText])

    return (
        <PlatformsWrapper>
            <StyledIconList>
                <StyledListItem>
                    <svg width={27} height={27}>
                        <use href={`${icon}#icon-apple`}></use>
                    </svg>
                </StyledListItem>
                <StyledListItem>
                    <svg width={24} height={28}>
                        <use href={`${icon}#icon-android`}></use>
                    </svg>
                </StyledListItem>
            </StyledIconList >
            <TextPlatform>{platformText}</TextPlatform>
        </PlatformsWrapper>
    )
}

export default Platforms