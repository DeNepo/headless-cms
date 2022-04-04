# Authentication vs Authorization

## Authentication

The identity of users are checked for providing the access to the system.

## Authorization

Is a process, person’s or user’s authorities are checked for accessing the resources.

 In simple terms,authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.

 Authentication| Authorization |
| --- | ----------- |
| the identity of users are checked for providing the access to the system | person’s or user’s authorities are checked for accessing the resources. |
| users or persons are verified. | users or persons are validated.|
|It is done before the authorization process.|is done after the authentication process.
|It needs usually user’s login details.|it needs user’s privilege or security levels.|
|determines whether the person is user or not.| determines What permission do user have?|

For more [Authentication methods](https://auth0.com/docs/get-started/architecture-scenarios/business-to-business/authentication)

For more [Authorization methods](https://auth0.com/docs/get-started/architecture-scenarios/business-to-business/authorization)

[The basics of authentication in the Strapi](https://www.youtube.com/watch?v=vcopLqUq594&&t=4336s)

### Create authenticated User snippet

````
async function createAuthenticatedUser (username,email,password ) {
  const path = "auth/local/register";   //a default route from strapi 
  const body = {
      "username": username, 
      "email": email,
      "password": password
  }; 
  const url = `http://localhost:1337/api/${path}`
  const response = await fetch(url, {
    method:POST, 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) 
  });
  return response.json();  //You will have to store this JWT in your application, it's important because you will have to use it the next requests
}

createAuthenticatedUser ("username","email","password" );
````


### Create authenticated new product snippet 

````
async function AuthcreateNewproduct(name, description,price) {
const path = "products";
const body = {
    "name": name,
    "Description": description,
    "price": price

};

const token = 'YOUR_TOKEN_HERE';  // JWT 


  const url = `http://localhost:1337/api/${path}`
  const response = await fetch(url, {
    method: POST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });
  return response.json();
}

 AuthcreateNewproduct("authorised product ", "This is a cool product made by an api call after authentication")
````
