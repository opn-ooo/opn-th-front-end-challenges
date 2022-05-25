import { normalTransitions } from "@app/styles/presets.styled"
import styled from "styled-components"

export const IconsGroup = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    gap: 0.5em;
    padding: 12px;
    > svg {
        ${normalTransitions()}
    }
`
