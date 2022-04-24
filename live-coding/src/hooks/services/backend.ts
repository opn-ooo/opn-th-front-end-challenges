// Hooks
import { useApiBackend } from "@hooks/services/useApi"
import { useCallback } from "react"

type defaultState = {
    loading: boolean
    error: string | null
}

export type TypeProductListData = {
    id: string
    name: string
    price: number
}

export type Result = {
    errorCode: String
    errorDesc: String
}

export type PaymentInfo = {
    email: String
    cardInfo: CardInfo
}

export type CardInfo = {
    cardNo: String
    cardExpiryDate: String
    cardCVV: String
}

export type TypeProductListState = defaultState & {
    data: TypeProductListData[]
}

export type TypePaymentState = defaultState & {
    data: PaymentInfo
}

export type TypePaymentResponse = {
    requestId: string
    result: Result
    paymentInfo: PaymentInfo
}

export type TypeProductListResponse = {
    products: TypeProductListData[]
    requestId: string
}

export type TypePaymentRequest = {
    paymentInfo: {
        email: string
        cardInfo: {
            cardNo: string
            cardExpiryDate: string
            cardCVV: string
        }
    }
    products: {
        id: string
        quantity: number
    }[]
}

export const getProductList = () => {
    const defaultState: TypeProductListState = {
        loading: false,
        data: [],
        error: null,
    }

    const { Request, state, setState, successResolver, isCancel } =
        useApiBackend<TypeProductListState>(defaultState)

    const fetch = useCallback(
        async (payload = {}) => {
            // On Request state
            setState((old: any) => ({
                ...old,
                loading: true,
                error: defaultState.error,
            }))

            // Api request
            const Api = Request({
                method: "get",
                url: `/products`,
                params: payload,
            })
                .then(successResolver)
                // Success
                .then((data: TypeProductListResponse) => {
                    const { products = defaultState.data } = data

                    setState((old: any) => ({
                        ...old,
                        data: products,
                    }))
                })
                // Error
                .catch((err) => {
                    // Return cancelled error immediately
                    if (isCancel(err)) return err

                    setState((old: any) => ({
                        ...old,
                        error: err?.response?.data?.message || err.message,
                    }))
                })

            // Do not proceed when request is cancelled
            if (isCancel(await Api)) return

            // After Request state
            setState((old: any) => ({
                ...old,
                loading: false,
            }))
        },
        [setState]
    )

    return {
        state,
        fetch,
    }
}

export const postPayment = () => {
    const defaultState: TypePaymentState = {
        loading: false,
        data: {} as PaymentInfo,
        error: null,
    }


    const { Request, state, setState, successResolver, isCancel } = useApiBackend<TypePaymentState>(defaultState)

    const post = useCallback(
        async (payload: TypePaymentRequest) => {
            // On Request state
            setState((old: any) => ({
                ...old,
                loading: true,
                error: defaultState.error,
            }))

            // Api request
            // TODO: Bind endpoint request
            const Api = Request({
                method: "post",
                url: `/pay`,
                data: payload
            })
                .then(successResolver)
                // Success
                .then((data: TypePaymentResponse) => {
                    const { paymentInfo = defaultState.data } = data

                    setState((old: any) => ({
                        ...old,
                        data: paymentInfo,
                    }))
                })
                // Error
                .catch((err) => {
                    // Return cancelled error immediately
                    if (isCancel(err)) return err

                    setState((old: any) => ({
                        ...old,
                        error: err?.response?.data?.message || err.message,
                    }))
                })

            // Do not proceed when request is cancelled
            if (isCancel(await Api)) return

            // After Request state
            setState((old: any) => ({
                ...old,
                loading: false,
            }))
        },
        [setState]
    )

    return {
        state,
        post,
    }
}
