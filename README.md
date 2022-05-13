# Welcome to ECOMMERCE  API!

## APP deploy in herokuapp

Endpoints are available in:
- https://giftable6.herokuapp.com/api/auth
- https://giftable6.herokuapp.com/api/user
- https://giftable6.herokuapp.com/api/products
- https://giftable6.herokuapp.com/api/cart
- https://giftable6.herokuapp.com/api/order

Example documentation POSTMAN
- https://documenter.getpostman.com/view/10682643/UyxhonQP

# Steps

- 1. Execute https://giftable6.herokuapp.com/api/auth/register

    {
        "username" : "usernameTest",
        "email": "emailTest@hotmail.com.mx",
        "password" : "passwordTest"
    }
- 2. Execute https://giftable6.herokuapp.com/api/auth/login

    {
        "username":"test",
        "password":"testHeroku"
    }
- - Once you have accessed the system you will get a token
- - Remember to send the token in the header to be able to access the endpoints 