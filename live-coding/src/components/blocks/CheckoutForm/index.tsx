import React, {
    FC,
    useCallback,
    useEffect,
    SyntheticEvent,
    ChangeEvent,
} from "react"
import useModels from "react-use-models"
import useValidator from "react-joi"
import Joi from "joi"
import {
    validateCardNumber,
    parseCardType,
    parseCardExpiry,
    validateCardExpiry,
    formatCardNumber,
    formatCardExpiry,
    validateCardCVC
} from "creditcardutils"

// Styled Elements
import {
    Actions,
    Container,
    Fields,
    ErrorMessage,
    FieldControl,
    FieldLabel,
    Input,
    InputCardNumber,
    Form,
    FieldGroups,
    FieldsMerge,
    BoxCard,
    BoxCVV,
    BoxCardExpire,
    Button
} from "./index.styled"

// Svg Icons
import { ReactComponent as IconVisa } from "@components/svgs/visa.svg"
import { ReactComponent as IconMastercard } from "@components/svgs/mastercard.svg"
import { ReactComponent as CardIcon } from "@components/svgs/cardIcon.svg"

type TypeCheckoutFormDefaultValues = {
    email: string | null
    card_number: string | null
    card_expire: string | null
    cvv: string | null
}

export type TypeCheckoutFormValues = NonNullable<TypeCheckoutFormDefaultValues>

export interface CheckoutFormProps {
    onSuccess: (values: TypeCheckoutFormValues) => void
    loading?: boolean
    submitText?: string
}

const defaultState: TypeCheckoutFormDefaultValues = {
    email: null,
    card_number: null,
    card_expire: null,
    cvv: null,
}

const CheckoutForm: FC<CheckoutFormProps> = ({
    onSuccess,
    loading = false,
    submitText = "Submit",
}) => {
    const { models, register, updateModel } =
        useModels<TypeCheckoutFormDefaultValues>({
            defaultState,
        })
    const { state, setData } = useValidator({
        initialData: defaultState,
        schema: Joi.object({
            email: Joi.string()
                .email({
                    tlds: { allow: false },
                })
                .required()
                .messages({
                    "string.empty": "Required",
                    "string.email": "Must be a valid email",
                    "any.required": "Required",
                }),
            card_number: Joi.string()
                .custom((value, helpers) => {
                    if (value) {
                        if (!validateCardNumber(value)) {
                            return helpers.error("string.cardNumber")
                        }
                    }

                    return value
                })
                .required()
                .messages({
                    "string.empty": "Required",
                    "string.cardNumber": "Must be a valid card",
                    "string.wrong": "wrong card number",
                    "any.required": "Required",
                }),
            card_expire: Joi.string()
                .custom((value, helpers) => {
                    if (value) {
                        if (!validateCardExpiry(parseCardExpiry(value).month, parseCardExpiry(value).year)) {
                            return helpers.error("string.wrong")
                        }
                    }

                    return value
                })
                .required()
                .messages({
                    "string.wrong": "wrong card expire",
                    "string.empty": "Required",
                    "any.required": "Required",
                }),
            cvv: Joi.string()
                .custom((value, helpers) => {
                    if (value) {
                        if(value.length <= 3) {
                            if (!validateCardCVC(value)) {
                                return helpers.error("string.wrong")
                            }
                        } else {
                            return helpers.error("string.length")
                        }
                    }

                    return value
                })
                .required()
                .messages({
                    "string.empty": "Required",
                    "string.length": "Maximum 3 digits",
                    "any.required": "Required",
                    "string.wrong": "wrong cvv"
                }),
        }),
    })

    const getErrors = useCallback(
        (field) => {
            return state.$errors[field]
                .map((data: any) => data.$message)
                .join(",")
        },
        [state.$errors]
    )

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        onSuccess(state.$data)
    }

    const formatter = {
        cardNumber: (e: ChangeEvent<HTMLInputElement>) => {
            const value = formatCardNumber(e.target.value)

            updateModel("card_number", value)
        },
        cardExpire: (e: ChangeEvent<HTMLInputElement>) => {
            const value = formatCardExpiry(e.target.value)

            updateModel("card_expire", value)
        },
    }

    // Sync model <-> validator
    useEffect(() => {
        setData(models)
    }, [models])

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Fields>
                    <FieldControl>
                        <FieldLabel error={!!getErrors("email")}>
                            Email
                        </FieldLabel>

                        <Input
                            {...register.input({ name: "email" })}
                            type="email"
                            placeholder="you@company.com"
                            autoComplete="current-email"
                        />
                    </FieldControl>

                    {getErrors("email") && (
                        <ErrorMessage>{getErrors("email")}</ErrorMessage>
                    )}
                </Fields>

                <FieldGroups>
                    <Fields>
                        <FieldControl>
                            <FieldLabel error={!!getErrors("card_number")}>
                                Card information
                            </FieldLabel>
                            <BoxCard>
                                <InputCardNumber
                                    {...register.input({
                                        name: "card_number",
                                        onChange: formatter.cardNumber,
                                    })}
                                    type="text"
                                    placeholder="1234 1234 1234 1234"
                                />
                            </BoxCard>
                        </FieldControl>

                        {getErrors("card_number") && (
                            <ErrorMessage>
                                {getErrors("card_number")}
                            </ErrorMessage>
                        )}
                    </Fields>

                    <FieldsMerge>
                        <Fields>
                            <BoxCardExpire>
                                <InputCardNumber
                                    {...register.input({
                                        name: "card_expire",
                                        onChange: formatter.cardExpire,
                                    })}
                                    type="text"
                                    placeholder="MM / YY"
                                />
                            </BoxCardExpire>

                            {getErrors("card_expire") && (
                                <ErrorMessage>
                                    {getErrors("card_expire")}
                                </ErrorMessage>
                            )}
                        </Fields>

                        <Fields>
                            <BoxCVV>
                                <InputCardNumber
                                    {...register.input({ name: "cvv" })}
                                    type="text"
                                    placeholder="123"
                                />
                                <CardIcon style={{ width: 32, marginRight: 8, height: 32 }} />
                            </BoxCVV>

                            {getErrors("cvv") && (
                                <ErrorMessage>{getErrors("cvv")}</ErrorMessage>
                            )}
                        </Fields>
                    </FieldsMerge>
                </FieldGroups>

                <Actions>
                    <button disabled={state.$auto_invalid || loading}>
                        {submitText}
                    </button>
                </Actions>
            </Form>
        </Container>
    )
}

export default CheckoutForm
