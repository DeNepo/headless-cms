/**
 * Fill in the blanks to create a script 
 * searches for products whose name contains the string that is passed as nameStr
 */

 import "./qs.js";
 async function searchProductByName(nameStr) {
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

 async function test() {
  console.log("Products containing name", await searchProductByName("name"));
  console.log("Products containing prog", await searchProductByName("prog"));
  console.log("Products containing pro", await searchProductByName("pro"));
 }

 test();

