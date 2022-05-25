import React, { FC } from "react"
import { ReactComponent as IconVisa } from "../../svgs/icon-visa.svg"
import { ReactComponent as IconMasterCard } from "../../svgs/icon-mc.svg"
import { IconsGroup } from "./index.styled"

interface CreditCardsIconProps {
    cardType: string | null
}

export const CreditCardsIcon: FC<CreditCardsIconProps> = (props) => {
    return (
        <IconsGroup>
            <IconVisa
                style={{ opacity: props.cardType === "visa" ? 1 : 0.2 }}
            />
            <IconMasterCard
                style={{ opacity: props.cardType === "mastercard" ? 1 : 0.2 }}
            />
        </IconsGroup>
    )
}

CreditCardsIcon.defaultProps = {
    cardType: null,
}
