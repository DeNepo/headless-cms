/**
 * Fill in the blanks to create a script 
 * that prints the total cost if someone would buy one of every item 
 * without applying any discount, but only count items that are currently in stock
 */

 import "./qs.js";
 async function ex4() {
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
 ex4();