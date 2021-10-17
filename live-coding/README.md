# Front-end Live-coding Session

## Introduction

You will need to grab on the requirements and complete the project while ensuring the application to have great engineering and well-design by using API endpoints given at:

### API:

- `http`: http://203.170.190.44:8049
- `https`: https://react-code-challenge-mock-api.netlify.app

## Scenario

Once upon a time... nope!
So here, you have been temporarily hired by Opn and assigned to work on the little e-commerce project which the previously assigned front-end developer and designer got the urgent matters to solve, so they will not be able to finish the project on time.

## Requirements

The design can click this link [Figma](https://figma.fun/3oegaU) and the requirements are below.

- Add card validation on Checkout form:
  - Must be a valid card number
  - Must be Visa / Master card type
  - Must be valid expiration date
  - Must be valid CVV
- Complete the API integration:
  - Call the web service for payment submission
- Add new UI on Checkout form:
  - Display the icon (Visa/Master) based on card number input
  - Style “Pay” button of the checkout form according to Figma UI

## Getting started

### Installation

Change the `example.env` to `.env`

```bash
$ yarn install
```

### Running the app

```bash
# development
$ yarn dev

# build production
$ yarn build
```

## Notes

### Figma for UI Design:

- Prototype: [https://figma.fun/tnuL7b](https://www.figma.com/proto/iiI0567JTHz6L5GBI0kdgJ/Code-challenge-UI?page-id=0%3A1&node-id=15%3A2&viewport=1765%2C259%2C1.0015398263931274&scaling=min-zoom)
- File: [https://figma.fun/OysH5f](https://www.figma.com/file/iiI0567JTHz6L5GBI0kdgJ/Code-challenge-UI?node-id=0%3A1)

### Services

- Get Product: http://203.170.190.44:8049/products
- Submit Payment: http://203.170.190.44:8049/pay

#### Example of request

```json
{
    "requestId": "12344556",
    "paymentInfo": {
        "email": "aaa@opn.ooo",
        "cardInfo": {
            "cardNo": "123456778888",
            "cardExpiryDate": "33/21",
            "cardCVV": "124"
        }
    },
    "products": [
        {"id":"1",  "quantity":1},
        
        {"id":"2",  "quantity":5}
    ]
}
```

#### Example of response

```json
{
   "requestId": "12344556",
   "result": {
       "errorCode": "0",
       "errorDesc": "Success"
   },
   "paymentInfo": {
       "email": "aaa@opn.ooo",
       "cardInfo": {
           "cardNo": "123456778888",
           "cardExpiryDate": null,
           "cardCVV": null
       }
   }
}
```

Desire to win the war? Well, to make it a little more fun, please remember that

**You cannot**:

- Change existing behaviors.
- Change the API server.
- Change from JavaScript/TypeScript to other languages.

Let's rock! 🤘

