# REST API Endpoints
REpresentational State Transfer is an agreed upon protocol that describes basic rules on how clients should communicate with servers.

For more information see: https://www.codecademy.com/article/what-is-rest

An important part of the REST specification is that it is centered around "resources". 
A resource can be any real or virtual object that is represented within the system. For example in the webshop every product that can be found in the store is a resource. 
In strapi the following endpoints are automatically generated for every content type:

|    Method   |	     URL    |	Description |
| :-----------: | :-----------: |	:--------:    |
|GET	| /api/:pluralApiId	| Get a list of entries |
| GET	| /api/:pluralApiId/:documentId |	Get an entry
| POST |	/api/:pluralApiId |	Create an entry
| PUT	| /api/:pluralApiId/:documentId |	Update an entry
| DELETE |	/api/:pluralApiId/:documentId	| Delete an entry

For more information see: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters

In order to access a specific resource the path should be the collection name (e.g books) followed by a "/" and the specific id of the resource. To select the product with id 5 the full path would be "/api/products/5". It is also possible to refer to the full collection of resources of a specific type by omitting the id (e.g. /api/products refers to all products and not a specific product).

Aside from the url path, it is important to note that there are four commonly used http methods. 


- GET <br>
  The GET method is used to retrieve a resource (or collection of resources). Performing a get operation should never have any impact on the data on the server.
- PUT <br>
  The PUT operation is used to update an existing resource on the server.
- POST <br>
  The POST operation is used to create a new resource on the server.
- DELETE <br>
  The DELETE operation is used to delete an existing resource from the server.


It is possible to make these calls from javascript:

```
async function updateProduct(productId, newData = {}) {
  const url = `http://localhost:1337/api/products/${productId}`
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(newData) 
  });
  return response.json();
}
```