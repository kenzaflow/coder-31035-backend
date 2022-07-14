# Clase 6

## API

---

### Get one random product

```http
GET /products/random
```

#### Response example:

```json
    {
        "id": "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
        "title": "example title",
        "description": "example description",
        "price": 19.99,
        "image": "image url",
    }
```

---

### Get one product by `id`

```http
GET /products/{id}
```

#### Response example:

```json
    {
        "id": "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
        "title": "example title",
        "description": "example description",
        "price": 19.99,
        "image": "image url",
    }
```

---

### Get all products

```http
GET /products
```

#### Response example:

```json
[
    {
        "id": "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
        "title": "example title",
        "description": "example description",
        "price": 19.99,
        "image": "image url",
    },
    ...
]
```

---