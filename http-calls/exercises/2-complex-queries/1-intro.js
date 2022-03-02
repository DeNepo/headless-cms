/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!! Make sure that the webshop example is running before attempting to run these exercises !!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

/**
 * Writing down complex querystrings by hand can be a difficult task.
 * Luckily libraries exist that can help us to generate the right querystring programmatically.
 * One of these libraries is qs, and in the following exercises we will practise using qs to perform 
 * fetch request in order to answer questions about the system.
 * 
 * Throughout these exercises the strapi api endpoint documentation will be useful: 
 * https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-endpoints
 */

/**
 * In this example we want to print a nice overview of the name and price of all products that cost between 15€ and 40€ 
 */
import "./qs.js";
async function example1() {
  const query = qs.stringify(
    {
      /** here we can include all query parameter fields that we want to pass and their values */
      // we provide which fields we want to select
    fields: ['name', 'price'],
    // we add filters
    filters: {
      price: {
        $lte: 40,
        $gte: 15
      }
    },
    // we define the ordering
    sort: ['price:asc']
  }, {
    encodeValuesOnly: true,
  });
  console.log("The querystring", query);

  // call the matching endpoint and include the querystring after the ?
  const response = await fetch(`http://localhost:1337/api/products?${query}`);
  const result = await response.json();
  // from here on we can use the result from the server in our javascript code
  console.log(result.data.map(product => `${product.attributes.name} ${product.attributes.price}€`).join("\n"));
}
example1();

