import styled, { css } from "styled-components"

import {
    resetButton,
    resetInput,
    normalTransitions,
} from "@styles/presets.styled"

export const Container = styled.section``

export const Form = styled.form`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 35px;
`

export const FieldGroups = styled.article`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
`

type FieldsMergeProps = {
    column?: number
}
export const FieldsMerge = styled.section`
    display: grid;
    ${({ column = 2 }: FieldsMergeProps) => css`
        grid-template-columns: repeat(${column}, 1fr);
    `}

    .fields:not(:last-child) input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .fields:not(:first-child) input {
        border-left-width: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`

export const FieldControl = styled.label`
    display: block;
`

type FieldLabelProps = {
    error?: boolean
}
export const FieldLabel = styled.span`
    display: block;
    margin-bottom: 12px;
    color: var(--label);
    font-size: 0.875em;
    font-weight: 700;

    ${({ error = false }: FieldLabelProps) => {
        return (
            error &&
            css`
                color: var(--error);
            `
        )
    }}
`

export const Input = styled.input`
    ${normalTransitions()}
    ${resetInput()}

    color: var(--input_value);
    font-size: 0.875em;
    padding: 9px 12px;

    width: 100%;

    background-color: #fff;

    border: 1px solid var(--input_border);
    border-radius: 8px;

    &::placeholder {
        opacity: 0.5;
    }
`

export const InputCardNumber = styled.input`
    ${normalTransitions()}
    ${resetInput()}

    color: var(--input_value);
    font-size: 0.875em;
    padding: 9px 12px;

    width: 100%;

    background-color: #fff;

    &::placeholder {
        opacity: 0.5;
    }
`

export const ErrorMessage = styled.div`
    color: var(--error);
    font-weight: 500;
    font-size: 0.6875em;
    margin-top: 5px;
`

export const BoxCard = styled.div`
    display: flex;
    outline: 1px solid var(--input_border);
    border-radius: 8px;
`

export const BoxCVV = styled.div`
    display: flex;
    outline: 1px solid var(--input_border);
    border-radius: 0px 8px 8px 0px;
`

export const BoxCardExpire = styled.div`
    display: flex;
    outline: 1px solid var(--input_border);
    border-radius: 8px 0px 0px 8px;
`

export const Actions = styled.article`
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.875em;
    background-color: #343A4C;
    color: white;
`

export const Fields = styled.article.attrs(() => ({ className: "fields" }))``
