# Get one random product

```http
GET /api/products/random
```

## Response example:

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

# Get one product by `id`

```http
GET /api/products/{id}
```

## Response example:

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

# Get all products

```http
GET /api/products
```

## Response example:

```json
[
    {
        "id": "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
        "title": "example title",
        "description": "example description",
        "price": 19.99,
        "image": "image url",
    }
]
```

---

# Post new product

```http
POST /api/products
```

## Requeriments


|Attribute  |Type  |Required|Description|
|-----------|------|--------|-----------|
|title      |string|true    |-          |
|description|string|true    |-          |
|price      |number|true    |-          |
|image      |string|true    |-          |


## Response example:

```json
"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

---

# Update product

```http
PUT /api/products/{id}
```

## Requeriments


|Attribute  |Type  |Required|Description|
|-----------|------|--------|-----------|
|id         |string|true    |-          |
|title      |string|true    |-          |
|description|string|true    |-          |
|price      |number|true    |-          |
|image      |string|true    |-          |


## Response example:

```json
"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

or 

```http
404 | 406
```

---

# Delete product

```http
DELETE /api/products/{id}
```

## Response example:

```http
200 | 404
```

---