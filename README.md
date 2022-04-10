# headless cms

## Getting Started

How to study the code in this repo

<details>
<summary>Installing node</summary>
<br>
You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
<br>
You will also need [Postman](https://www.postman.com), please install it on your local machine.
<br>
All strapi installations will use 
testuser@localhost.com as username and
Testuser1 as password
</details>

## Learning goals

- 🥚 Understanding what a content management system is, and why people use it 
- 🥚 Given an existing CMS installation fill in and publish a new piece of content
- 🥚 Perform a simple http call via postman to retrieve a piece of information.
- 🐣 Extend and adapt an existing CMS configuration
- 🐣 Perform a http call with filtering via Postman
- 🐣 Perform a http call with "include" via Postman
- 🐣 Perform a http POST call to create new data
- 🐣 Perform a http PUT call to update existing data
- 🐣 Configuring endpoint permissions (Authentication vs Authorization)
- 🐥 Design a data model from scratch based on user requirements

## Materials

### Suggested study

- <https://www.youtube.com/watch?v=vcopLqUq594>
- <https://www.youtube.com/watch?v=6FnwAbd2SDY>
- <https://strapi.io/blog/understanding-and-using-relations-in-strapi>

### Reference Material during exercises

- [Rest API documentation](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)


### Chapter 1 - Introduction

In this first chapter we are going to take a look at what a Content Management System is and why a company might want to use it.

### Chapter 2 - HTTP Calls

In this chapter we are going to take a look at how to set up endpoints and retrieve the data we are interested in. Starting from basic examples we will slowly work our way into more and more difficult scenarios using Postman.

### Chapter 3 - Data Model Design

In this chapter we will put ourselves in the role of analyst and set out to design the data model required to fulfill the client's needs.

### Chapter 4 - Authentication vs Authorization

In this chapter we will take a look at the difference between Authentication and Authorization. We will see how you can secure your endpoints by using role based user accounts.

## Deliverables

Throughout this module you will choose one of the cases you analysed during Chapter 3 and design and implement the model in Strapi. 

Using [strapi-template-repo](https://github.com/HackYourFutureBelgium/template-strapi-vanilla),You will  build a minimal frontend application that connects to your CMS and that uses proper authentication to access certain routes.

This is a group project.

- Fork the the template repo to **Lab organization**. 

- When connecting to strapi, **one person from the team** has to create the admin name and password and share it with the rest of the team.

Checkout [this](https://youtu.be/h9vETeRiulY?t=39) link on how to get started with with strapi


- [ ] [README repository](https://github.com/_/_)
- [ ]  live README](<https://github.com/_>)
- I have practiced:
  - [ ] pulling and pushing
  - [ ] formatting my code: `npm run format`
  - [ ] checking my spelling: `npm run spell-check`
  - [ ] linting my code: `npm run lint:ls` _and_ `npm run lint:md`
