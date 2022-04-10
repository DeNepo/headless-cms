Complete the following exercises by performing the postman call to retrieve the following information.

You can verify your solution by expanding the exercise, but please try to complete the exercise on your own first.

### Basic retrieval
---
To retrieve all entries for a specific collection you can make a GET api call to the "/api/\<collection-name\>" endpoint. In order to only retrieve a specific entry rather than all entries it is possible to make a get request to the "/api/\<collection-name\>/\<id\>" endpoint.
<details>
  <summary>
    1. Show all categories
  </summary>

  ```
  GET http://localhost:1337/api/categories
  ```
  ![get all categories](../assets/get_all_categories.png)
</details>

<details>
  <summary>
    2. Show all products
  </summary>

  ```
  GET http://localhost:1337/api/products
  ```
  ![get all products](../assets/get_all_products.png)
</details>

<details>
  <summary>
    3. Show the product with id 1
  </summary>

  ```
  GET http://localhost:1337/api/products/1
  ```
  ![get all products](../assets/get_product_with_id_1.png)
</details>

<details>
  <summary>
    4. Show the category with id 3
  </summary>

  ```
  GET http://localhost:1337/api/categories/3
  ```
  ![get all products](../assets/get_category_3.png)
</details>

<br>

### Field selection
---
Queries can accept a fields parameter to select only some fields. By default, only the following types of fields are returned:

 - String (string, text, richtext, enumeration, email, password, and uid)
 - Date (date, time, datetime, timestamp)
 - Number (integer, biginteger, float, decimal)
 - Generic (boolean, array, json)

For example if you only want to select 2 fields of a collection you can do so by adding "?fields[0]=attribute-one&fields[1]=attribute-2" to the request url.

<details>
  <summary>
    X. Show a list of all product names and prices
  </summary>

  ```
  GET http://localhost:1337/api/products?fields[0]=name&fields[1]=price
  ```
  ![get all products](../assets/product_name_and_price.png)
</details>

<details>
  <summary>
    X. Show the name of the product with id 2
  </summary>

  ```
  GET http://localhost:1337/api/products/2?fields[0]=name
  ```
  ![get all products](../assets/product_5_name.png)
</details>

<details>
  <summary>
    X. Show the list of all names and descriptions of the categories
  </summary>

  ```
  GET http://localhost:1337/api/categories?fields[0]=name&fields[1]=description
  ```
  ![get all products](../assets/categories_name_and_descriptions.png)
</details>

<br>

### Sorting
---
It is possible to tell Strapi to sort its response by adding a sort parameter to the query parameters (e.g. "/api/\<collection-name\>?sort=\<attribute-name\>"). To change the order of the sorting you can append :asc or :desc to the property name (e.g. "/api/\<collection-name\>?sort=\<attribute-name\>:desc"). If you ever need to sort based on multiple attributes you can do so by specifying their order using square brackets (e.g. "/api/\<collection-name\>?sort[0]=\<first-attribute-name\>:desc&sort[1]=\<second-attribute-name\>:asc").

<details>
  <summary>
    X. Show all products sorted by price (low to high)
  </summary>

  ```
  GET http://localhost:1337/api/products?sort=price
  ```
  ![get all products](../assets/get_products_sorted_by_price_asc.png)
</details>

<details>
  <summary>
    X. Show all products sorted by price (high to low)
  </summary>

  ```
  GET http://localhost:1337/api/products?sort=price:desc
  ```
  ![get all products](../assets/get_products_sorted_by_price_desc.png)
</details>

<details>
  <summary>
    X. Show all categories sorted by name
  </summary>

  ```
  GET http://localhost:1337/api/categories?sort=name
  ```
  ![get all products](../assets/get_categories_sorted_by_name.png)
</details>

<details>
  <summary>
    X. Show all products sorted from new to old
  </summary>

  ```
  http://localhost:1337/api/products?sort=publishedAt:desc
  ```
  ![get all products](../assets/products_new_to_old.png)
</details>

<br>

### Filtering
---
Queries can accept a filters parameter with the following syntax:

```
GET /api/<collection-name>?filters[field][operator]=value
```

The following operators are available

| Operator      | Description                              |
|---------------|------------------------------------------|
| $eq           | Equal                                    |
| $ne           | Not equal                                |
| $lt           | Less than                                |
| $lte          | Less than or equal to                    |
| $gt           | Greater than                             |
| $gte          | Greater than or equal to                 |
| $in           | Included in an array                     |
| $notIn        | Not included in an array                 |
| $contains     | Contains (case-sensitive)                |
| $notContains  | Does not contain (case-sensitive)        |
| $containsi    | Contains                                 |
| $notContainsi | Does not contain                         |
| $null         | Is null                                  |
| $notNull      | Is not null                              |
| $between      | Is between                               |
| $startsWith   | Starts with                              |
| $endsWith     | Ends with                                |
| $or           | Joins the filters in an "or" expression  |
| $and          | Joins the filters in an "and" expression |

<details>
  <summary>
    X. Show the list of products that cost more than 500 euros.
  </summary>

  ```
  GET http://localhost:1337/api/products?filters[price][$gt]=500
  ```
  ![products over 500](../assets/products_over_500.png)
</details>

<details>
  <summary>
    X. Show the list of products that have a c in their name.
  </summary>

  ```
  GET http://localhost:1337/api/products?filters[name][$contains]=c
  ```
  ![products over 500](../assets/products_with_c_in_name.png)
</details>

<br>

### Populate
---
By default relational, media, component, or dynamic zone fields are not pupulated by Strapi. In order to tell Strapi to populate a field you need to pass the fieldname as a query parameter (e.g. /api/products?populate=discount will not only load the list of projects but also their linked discounts). In order to tell Strapi to populate all first level fields it is possible to pass the wildcard '*' value.


Including nested relations can be tricky to do by hand. We will see tools to generate the right query strings programmatically in exercise 2 complex queries.

<details>
  <summary>
    X. Show the product with id 11 and include its discount.
  </summary>

  ```
  GET http://localhost:1337/api/products/11?populate=discount
  ```
</details>

<details>
  <summary>
    X. Show all categories and include their products.
  </summary>

  ```
  GET http://localhost:1337/api/categories?populate=products
  ```
</details>