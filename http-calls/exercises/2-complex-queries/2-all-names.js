/**
 * Fill in the blanks to create a script that prints the name of all products sorted alphabetically
 */

import "./qs.js";
async function ex1() {
  const query = qs.stringify(
  {
      _
  }, 
  {
    encodeValuesOnly: true,
  });
  console.log("The query string", query);

  // call the matching endpoint and include the querystring after the ?
  const baseUrl = _;
  const response = await fetch(`${_}?${query}`);
  const result = await response.json();
  _
}
ex1();