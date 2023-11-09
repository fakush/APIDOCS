# Project: fake-backend-demo
This is a fake backend for demo porpouses. All endpoints use random fake generated data to demonstrate the Postman documentation capabilities.
# 📁 Collection: Products 


## End-point: /api/products
### Method: GET
>```
>{{base_url}}/api/products
>```
### Body (**raw**)

```json

```

### Response: 200
```json
{
    "products": [
        {
            "id": "fc5bbeb1e18badb97aa23ae5",
            "name": "Chicken",
            "category": "Tools",
            "brand": "Braconid wasp",
            "price": "181.00",
            "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            "image_url": "https://picsum.photos/seed/k8qT569v/640/480",
            "quantity_in_stock": 61
        },
        {
            "id": "c67a8c804f3d9f1ba2c92030",
            "name": "Fish",
            "category": "Electronics",
            "brand": "Ichneumonid wasp",
            "price": "151.00",
            "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
            "image_url": "https://loremflickr.com/640/480?lock=5972596612923392",
            "quantity_in_stock": 95
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products/{id}
### Method: GET
>```
>{{base_url}}/api/products/{{product_id}}
>```
### Body (**raw**)

```json

```

### Response: 200
```json
{
    "products": {
        "id": "c5d6dedc1a5cb67cf16debdf",
        "name": "Car",
        "category": "Grocery",
        "brand": "Grass Carrying Wasp",
        "price": "200.00",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "image_url": "https://loremflickr.com/640/480?lock=6187414932422656",
        "quantity_in_stock": 70
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products?amount={amount}
### Method: GET
>```
>{{base_url}}/api/products?amount=2
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|amount|2|


### Response: 200
```json
{
    "products": [
        {
            "id": "fc5bbeb1e18badb97aa23ae5",
            "name": "Chicken",
            "category": "Tools",
            "brand": "Braconid wasp",
            "price": "181.00",
            "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            "image_url": "https://picsum.photos/seed/k8qT569v/640/480",
            "quantity_in_stock": 61
        },
        {
            "id": "c67a8c804f3d9f1ba2c92030",
            "name": "Fish",
            "category": "Electronics",
            "brand": "Ichneumonid wasp",
            "price": "151.00",
            "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
            "image_url": "https://loremflickr.com/640/480?lock=5972596612923392",
            "quantity_in_stock": 95
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products
### Method: POST
>```
>{{base_url}}/api/products
>```
### Body (**raw**)

```json
{
  "name": "Krusty Burger",
  "category": "burgers",
  "price": 2.50,
  "description": "Our signature burger. With the best ingredients of mama Krusty",
  "image_url": "http://krusty.com/krusty-burger.jpg",
  "quantity_in_stock": 6000000
}
```

### Response: 200
```json
{
    "message": "Product Created",
    "product": {
        "id": "3387ea0fe8eee57a9ef7bbda",
        "name": "Krusty Burger",
        "category": "burgers",
        "price": 2.5,
        "description": "Our signature burger. With the best ingredients of mama Krusty",
        "image_url": "http://krusty.com/krusty-burger.jpg",
        "quantity_in_stock": 6000000
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products/{id}
### Method: PATCH
>```
>{{base_url}}/api/products/{{product_id}}
>```
### Body (**raw**)

```json
{
  "name": "Krusty Burger",
  "category": "burgers",
  "price": 2.50,
  "description": "Our signature burger. With the best ingredients of mama Krusty",
  "image_url": "http://krusty.com/krusty-burger.jpg",
  "quantity_in_stock": 6000000
}
```

### Response: 200
```json
{
    "message": "Product Updated",
    "product": {
        "id": "c5d6dedc1a5cb67cf16debd",
        "name": "Krusty Burger",
        "category": "burgers",
        "brand": "Common paper wasp",
        "price": 2.5,
        "description": "Our signature burger. With the best ingredients of mama Krusty",
        "image_url": "http://krusty.com/krusty-burger.jpg",
        "quantity_in_stock": 6000000
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/products/{id}
### Method: DELETE
>```
>{{base_url}}/api/products/{{product_id}}
>```
### Body (**raw**)

```json

```

### Response: 200
```json
{
    "message": "Product Deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Reviews 


## End-point: /api/reviews
### Method: GET
>```
>{{base_url}}/api/reviews
>```
### Response: 200
```json
{
    "reviews": [
        {
            "id": "feafaaa457fd1e4a36dbcb2f",
            "product_id": "27f4b8428baff2b76ee9e4b8",
            "user_id": "62e6b01cc1bb0b7baaa98c17",
            "rating": 2,
            "review_text": "Argumentum capto conculco aqua sonitus caste minus talio aer.",
            "date": "2023-11-04T03:26:27.543Z"
        },
        {
            "id": "261dfbaebb8e3e76c1bfc4c4",
            "product_id": "6a44b7f86ec0bfcbe8fbd6dd",
            "user_id": "dd1ca7c7fedf208ad5f9ff5e",
            "rating": 1,
            "review_text": "Esse uberrime defaeco doloremque decerno.",
            "date": "2023-06-23T19:37:51.500Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/reviews/{id}
### Method: GET
>```
>{{base_url}}/api/reviews/{{product_id}}
>```
### Response: 200
```json
{
    "reviews": {
        "id": "c5d6dedc1a5cb67cf16debdf",
        "product_id": "7dbc691ac1c4795adfdc54c8",
        "user_id": "ddd61e9b288c88c6941b3bf0",
        "rating": 2,
        "review_text": "Atrox maiores voluntarius.",
        "date": "2023-03-09T23:42:31.471Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/reviews?amount={number}
### Method: GET
>```
>{{base_url}}/api/reviews?amount=3
>```
### Query Params

|Param|value|
|---|---|
|amount|3|


### Response: 200
```json
{
    "reviews": [
        {
            "id": "6ce64cb97ba60234639a3dcd",
            "product_id": "8c25caa63a831f9feb5ce38c",
            "user_id": "aa906aed6cb758fefefdda86",
            "rating": 4,
            "review_text": "Exercitationem accusator volup solio.",
            "date": "2023-08-11T18:17:26.681Z"
        },
        {
            "id": "0b79a8ceff8ef004fa3fbe8d",
            "product_id": "6ce48bfa1753e7da7ac68ed4",
            "user_id": "bd6af353dbd573c18bba776e",
            "rating": 1,
            "review_text": "Spes tepesco in attollo atqui decor ad voluptas cinis.",
            "date": "2023-02-16T09:39:46.574Z"
        },
        {
            "id": "bcaa4bf7aaddc37129bc2c15",
            "product_id": "d3109427e3dfc902de5a0b1c",
            "user_id": "3b183e4dff1ccbcaed8f2d01",
            "rating": 4,
            "review_text": "Concedo crepusculum utilis villa quia.",
            "date": "2023-09-23T13:46:33.494Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/reviews
### Method: POST
>```
>{{base_url}}/api/reviews
>```
### Body (**raw**)

```json
{
    "product_id": "27f4b8428baff2b76ee9e4b8",
    "user_id": "62e6b01cc1bb0b7baaa98c17",
    "rating": 2,
    "review_text": "Argumentum capto conculco aqua sonitus caste minus talio aer."
}
```

### Response: 200
```json
{
    "message": "review Created",
    "review": {
        "id": "71772da774bc429e37dfd4af",
        "product_id": "27f4b8428baff2b76ee9e4b8",
        "user_id": "62e6b01cc1bb0b7baaa98c17",
        "rating": 2,
        "review_text": "Argumentum capto conculco aqua sonitus caste minus talio aer.",
        "date": "2023-11-07T17:53:26.271Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/reviews/{id}
### Method: DELETE
>```
>{{base_url}}/api/reviews/{{product_id}}
>```
### Response: 200
```json
{
    "message": "review Deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Users 


## End-point: /api/users
### Method: GET
>```
>{{base_url}}/api/users
>```
### Response: 200
```json
{
    "users": [
        {
            "id": "b2aa0f1ff8ffa6d5f380dc0a",
            "username": "Betty_Herman27",
            "email": "Sincere_Streich@hotmail.com",
            "password": "alQCoqRyAE21FTj",
            "role": "editor"
        },
        {
            "id": "9f5ff49feefcaf4efc51a41d",
            "username": "Sallie.Emmerich92",
            "email": "Daniella.Altenwerth@gmail.com",
            "password": "O6ct1KdhpuzTmzX",
            "role": "editor"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/users/{id}
### Method: GET
>```
>{{base_url}}/api/users/{{product_id}}
>```
### Body (**raw**)

```json

```

### Response: 200
```json
{
    "users": {
        "id": "c5d6dedc1a5cb67cf16debdf",
        "username": "Ulices.Dickinson8",
        "email": "Caesar_Bahringer@yahoo.com",
        "password": "_osh3B0NEDZ9IQa",
        "role": "admin"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/users
### Method: POST
>```
>{{base_url}}/api/users
>```
### Body (**raw**)

```json
{
    "username": "Giovanna0",
    "email": "Jerrod_Bogan10@hotmail.com",
    "password": "RFG_O0Kf8DxPWJR",
    "role": "user"
}
```

### Response: 200
```json
{
    "message": "user Created",
    "user": {
        "id": "8257dbc1e4d62f89d79fa230",
        "username": "Giovanna0",
        "email": "Jerrod_Bogan10@hotmail.com",
        "password": "RFG_O0Kf8DxPWJR",
        "role": "user"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/users
### Method: PATCH
>```
>{{base_url}}/api/users/{{product_id}}
>```
### Body (**raw**)

```json
{
    "username": "Giovanna0",
    "email": "Jerrod_Bogan10@hotmail.com",
    "password": "RFG_O0Kf8DxPWJR",
    "role": "user"
}
```

### Response: 200
```json
{
    "message": "user Updated",
    "user": {
        "id": "c5d6dedc1a5cb67cf16debdf",
        "username": "Giovanna0",
        "email": "Jerrod_Bogan10@hotmail.com",
        "password": "RFG_O0Kf8DxPWJR",
        "role": "user"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/users/{id}
### Method: DELETE
>```
>{{base_url}}/api/users/{{product_id}}
>```
### Body (**raw**)

```json
{
}
```

### Response: 200
```json
{
    "message": "user Deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Orders 


## End-point: /api/orders
### Method: GET
>```
>{{base_url}}/api/orders
>```
### Response: 200
```json
{
    "orders": [
        {
            "id": "a1e8fbf90bcbdca680b5fce5",
            "user_id": "d27537ecce942f8aae0a8bc0",
            "order_date": "2023-02-12T18:12:19.269Z",
            "items": [
                {
                    "product_id": "df8c5afaefaf42d3cbe35300",
                    "rating": 2,
                    "price_per_unit": "1917.00"
                },
                {
                    "product_id": "8a1ba0d0861ad5ad338ebc95",
                    "rating": 2,
                    "price_per_unit": "1008.00"
                }
            ],
            "total_price": 4363,
            "status": "pending"
        },
        {
            "id": "37b349ceceebf030ea3a174c",
            "user_id": "4e6b98d48cfc44eebd4205bb",
            "order_date": "2023-07-05T21:47:00.265Z",
            "items": [
                {
                    "product_id": "df8c5afaefaf42d3cbe35300",
                    "rating": 2,
                    "price_per_unit": "1917.00"
                },
                {
                    "product_id": "8a1ba0d0861ad5ad338ebc95",
                    "rating": 2,
                    "price_per_unit": "1008.00"
                }
            ],
            "total_price": 4363,
            "status": "pending"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/orders/{id}
### Method: GET
>```
>{{base_url}}/api/orders/{{product_id}}
>```
### Response: 200
```json
{
    "orders": {
        "id": "c5d6dedc1a5cb67cf16debdf",
        "user_id": "eb33c8dda5ec05608301daf1",
        "order_date": "2023-04-08T08:25:13.740Z",
        "items": [
            {
                "product_id": "f1a3d7a27eec0fe0074cbedd",
                "rating": 1,
                "price_per_unit": "1884.00"
            },
            {
                "product_id": "415e081c985f00be0cefc3b8",
                "rating": 3,
                "price_per_unit": "1261.00"
            },
            {
                "product_id": "ed6bd1cf13cd1c2fefbcaf1c",
                "rating": 3,
                "price_per_unit": "875.00"
            },
            {
                "product_id": "ccba21061e22dbc72bbdfd45",
                "rating": 2,
                "price_per_unit": "1544.00"
            },
            {
                "product_id": "334cdebefadbac5519d4e2cd",
                "rating": 3,
                "price_per_unit": "1762.00"
            },
            {
                "product_id": "eea5252cfa9a54f9aa06bbf4",
                "rating": 1,
                "price_per_unit": "971.00"
            }
        ],
        "total_price": 8297,
        "status": "shipped"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/orders
### Method: POST
>```
>{{base_url}}/api/orders
>```
### Body (**raw**)

```json
{
    "user_id": "55f975ddc33416da4cdfc1a1",
    "order_date": "2022-11-15T05:25:28.839Z",
    "items": [
            {
                "product_id": "927595bd3ddfcdf95204cd64",
                "rating": 2,
                "price_per_unit": "267.00"
            },
            {
                "product_id": "caec06329b3cce0b5e63a83e",
                "rating": 4,
                "price_per_unit": "1324.00"
            },
            {
                "product_id": "c8e295b8e79bf63eccfccdda",
                "rating": 3,
                "price_per_unit": "1491.00"
            },
            {
                "product_id": "a39f6cd0b8ef5dd2a513e6de",
                "rating": 1,
                "price_per_unit": "291.00"
            },
            {
                "product_id": "a91fbe48e2a45c62ea5fe268",
                "rating": 3,
                "price_per_unit": "444.00"
            }
        ]
}
```

### Response: 200
```json
{
    "orders": [
        {
            "id": "3d007a5ac1df41ab11ddd4ba",
            "user_id": "c52cec2de489d2e10d7be4bd",
            "order_date": "2023-04-27T10:13:58.868Z",
            "items": [
                {
                    "product_id": "cce8cbaeedc6fd442ff676a0",
                    "rating": 3,
                    "price_per_unit": "1657.00"
                },
                {
                    "product_id": "e908e406c6d7d1d791672c5b",
                    "rating": 2,
                    "price_per_unit": "1669.00"
                },
                {
                    "product_id": "ead9eaaa1a40f08cd2d1d975",
                    "rating": 4,
                    "price_per_unit": "1333.00"
                },
                {
                    "product_id": "a8ff63faeea5c5474be292b1",
                    "rating": 5,
                    "price_per_unit": "1872.00"
                },
                {
                    "product_id": "2bcbf3bff817feeaaf6e8a5f",
                    "rating": 1,
                    "price_per_unit": "1713.00"
                },
                {
                    "product_id": "0fffbbf4bb16aadb6f748fae",
                    "rating": 2,
                    "price_per_unit": "1675.00"
                },
                {
                    "product_id": "6faffb7f0e34fd0a700ebd25",
                    "rating": 1,
                    "price_per_unit": "1525.00"
                }
            ],
            "total_price": "",
            "status": "delivered"
        },
        {
            "id": "40b6b29a9cfc135e2901b06a",
            "user_id": "fa5b5d75db34fdd48fe7d122",
            "order_date": "2022-12-08T10:56:45.886Z",
            "items": [
                {
                    "product_id": "ba68e8d5eb94c424bc26a4ce",
                    "rating": 1,
                    "price_per_unit": "969.00"
                }
            ],
            "total_price": "",
            "status": "delivered"
        },
        {
            "id": "aac32d963eee5a00dba7738f",
            "user_id": "17eb31dacf5fa3b94b7ae4db",
            "order_date": "2022-12-17T17:12:03.997Z",
            "items": [
                {
                    "product_id": "be80738dfedde88afee6c4a8",
                    "rating": 1,
                    "price_per_unit": "1541.00"
                },
                {
                    "product_id": "6e24d4fbeef58ea3db3cf1fa",
                    "rating": 1,
                    "price_per_unit": "1888.00"
                },
                {
                    "product_id": "73326c0eddcfd0f3bda970c3",
                    "rating": 3,
                    "price_per_unit": "883.00"
                }
            ],
            "total_price": "",
            "status": "delivered"
        },
        {
            "id": "7d689ded155aec2abdecbd7b",
            "user_id": "ec4edb5c2cdf6e3247ec9ede",
            "order_date": "2023-07-21T03:58:59.101Z",
            "items": [
                {
                    "product_id": "cf7285ede012a5ce3d0cedcd",
                    "rating": 3,
                    "price_per_unit": "1341.00"
                },
                {
                    "product_id": "2cc05f48667807a17dfa10af",
                    "rating": 4,
                    "price_per_unit": "1050.00"
                },
                {
                    "product_id": "ebe05cdfbada6d08d09500a1",
                    "rating": 5,
                    "price_per_unit": "877.00"
                },
                {
                    "product_id": "d6bc0f2aadeff1ba8d5dbe23",
                    "rating": 1,
                    "price_per_unit": "770.00"
                },
                {
                    "product_id": "2e21bc50baa17838a9cf5740",
                    "rating": 4,
                    "price_per_unit": "102.00"
                },
                {
                    "product_id": "4bd6bbedafdc2afca78e0566",
                    "rating": 5,
                    "price_per_unit": "704.00"
                }
            ],
            "total_price": "",
            "status": "delivered"
        },
        {
            "id": "5a158ee36afd3832c61f174d",
            "user_id": "a5baa85f6beb5b5fccb2a419",
            "order_date": "2023-01-20T19:10:54.624Z",
            "items": [
                {
                    "product_id": "6c1f0dfe39abb06baee0164a",
                    "rating": 4,
                    "price_per_unit": "600.00"
                },
                {
                    "product_id": "262babe8bd3d5bfb667cce3f",
                    "rating": 2,
                    "price_per_unit": "1975.00"
                },
                {
                    "product_id": "45cd8b3ea57cbdb735c717f6",
                    "rating": 2,
                    "price_per_unit": "1775.00"
                }
            ],
            "total_price": "",
            "status": "delivered"
        },
        {
            "id": "5907b3a92dbc2fefc2bbeaf8",
            "user_id": "634f74fae8af08bcf7ddd8a7",
            "order_date": "2023-07-07T23:24:48.536Z",
            "items": [
                {
                    "product_id": "f743bff44cccce19008c7a53",
                    "rating": 3,
                    "price_per_unit": "469.00"
                },
                {
                    "product_id": "60aa35a27a1e2e9ecf1c76ef",
                    "rating": 1,
                    "price_per_unit": "1360.00"
                },
                {
                    "product_id": "5f4dd28ee16d1988fcdecdfd",
                    "rating": 2,
                    "price_per_unit": "1212.00"
                },
                {
                    "product_id": "b6e213d15ab5a0bde7698a1f",
                    "rating": 3,
                    "price_per_unit": "1089.00"
                }
            ],
            "total_price": "",
            "status": "delivered"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/orders/{id}
### Method: DELETE
>```
>{{base_url}}/api/orders/{{product_id}}
>```
### Response: 200
```json
{
    "message": "Order Deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
