# Data modelling

An important part of every software project is understanding the requirements of the end users. In this file you will find some descriptions of systems that customers would like us to build for them.

Download Umlet (https://www.umlet.com/changes.htm) and design the data schema needed to support the applications that are described below.

<details>
  <summary>Pizzeria</summary>
  A small pizzeria in the center of Antwerp wants to offer a website for customers where they can make reservations online in order to dine in. When customers make their reservations they already have to select the pizza's they would like to eat, so the food is ready once the guests arrive. 
<br><br>
  Every pizza that the pizzeria makes is tailor made for the needs of the specific customer. Customers must first choose the size of the pizza (small, medium or large). A small pizza starts at 8€, a medium pizza starts at 10€ and a large one starts at 15€. Once a size has been chosen the customer has to select a dough, here the options are Pan, Classic or Cheezy Crust. Both Pan and Classic are included in the price, but if the user selects a cheezy crust pizza he will have to pay a supplement of 3€.
<br><br>
  Once the type of dough has been decided the customer can add as many toppings as they would like to the pizza. Every topping has its own price. On the online menu card we want to show icons for toppings that are vegan. We also want to indicate how spicy a topping is. A topping can be (not spicy at all, a little spicy, medium spicy and very spicy).
</details>

<details>
  <summary>
    Chat application
  </summary>
  You have been approached to work together on a new group messaging application. The application will allow registered users to login and see and receive messages.
<br><br>
  A message can contain a link to an external platform, an Image and rich text. Users should always be able to see when a message was sent.
<br><br>
  Messages can be send one-to-one in a direct conversation from a sender to a receiver, but it is also possible to start a channel in order to support group discussions. Such a channel will always have name, and a list of members. 
<br><br>
  The idea is that the user will see a list of all direct messages addressed to them, but also an overview of all channels so he can follow up on the discussions in there. Messages in private conversations and messages in group have the same functionality. 
</details>

<details>
  <summary>
    Air quality
  </summary>
  The city of Brussels is planning the CurieuzenAir project. The goal of this project is to gather information about the air quality throughout Brussels. In order to do so, they are planning on spreading 3000 air quality measuring devices over Brussels, that will perform air measurements every 30 minutes. Such measurements contain values for the amount of fine particles (PM2.5), PM10, Nitrogen Dioxide (NO2) and Carbon monoxide (CO). 
<br>
<br>
  The city of Brussels is asking you to help set up a webpage on which all the measurement devices can be shown based on their location (latitude and longitude pairs) as well as to save all measurements and show an overview of these measurements for a selected device. Last but not least, it should also be possible to mark a measurement device as "out of order", if this happens the broken device will be shown on the map in a different color and someone from the repair crew can go and fix the broken device. 
</details>

<details>
  <summary>
    HYF BE
  </summary>
  HackYourFuture Belgium is a non-profit organization that strives to provide free tech education to asylum seekers and refugees in Belgium. They recently contacted you to work on an internal application that will be used to by the team members to keep track of all current classes. 
<br><br>
  HackYourFuture's curriculum consists of a list of many different modules, every time a new class is launched a selection is made from all available modules to decide on the specific path of that class, depending on the available time and the desired outcome of the sessions. 
 <br><br>
  It is for example possible that one class is focussed on front-end development and therefore includes the CMS module module, but not the backend module. Or there could be a data science class, geared towards more experienced users that skips some of the earlier modules and instead includes some extra data science modules. The selection of which modules should be included for which classes is done by the HYF team.
<br><br>
  For the system, HYF would like to have a page that contains a list of all current classes. When the user clicks on a class name, they should be redirected to the class homepage. On this class homepage there should be an overview of all modules that are taught to this class, with their names, duration and a short description.
<br><br>
  Aside from the modules, the homepage should also contain a list of all students that are enrolled for that class, with their names, discord handles, and github accounts so that it is easy for the team to reach specific students.
<br><br>
  Last but not least, the team would also like to show a badge next to a students' name for every module that the student has completed.
</details>
