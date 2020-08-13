# Phase 3 Capstone: The Quest Project

## Project Explanation
I'm a huge tabletop gaming nerd.  
Many, many years ago my friends and I played this tabletop miniature game called Warhammer Quest.  
![Warhammer Quest](https://github.com/dmstringer/my-quest-project/blob/master/readme_pics/questbox2.jpg?s=200)  

It was basicly a simulation of a dungeon crawl, but without a dungeon master controlling the monsters. 
![Warhammer Quest](https://github.com/dmstringer/my-quest-project/blob/master/readme_pics/minis.jpg?s=200)  

The game contained many different mechanics to generate and control the monsters, so all you needed were some players to sit down with you and play. 
The one mechanic that I found to be the most tedious was the random monster tables layed out in the rule book for all the higher level monsters.  
Each new encounter became this tedious process of rolling on a table for the monsters...  
Then looking elsewhere in the book for all the special rules that monster had...  
Then rolling on another chart to see what treasures those monsters were carrying...  
![Monster Table](https://github.com/dmstringer/my-quest-project/blob/master/readme_pics/monsterchart2.jpg?s=200)  

I fealt there had to be a way to speed this process up.  
At the time I was good with Excel and I was learning VBA to automate some processes for my job, so I decided to build a monster generator in an Excel file. 
I brought in all the monster tables and rules into the excel file as different spreadsheets, essentially my 'database'.  
![The Excel file](https://github.com/dmstringer/my-quest-project/blob/master/readme_pics/helper2.jpg?s=200)  

It was clunky, but it worked. My friends and I used my little pet project many times for many years, Warhammer Quest spread out on the kitchen table, with a laptop running my little app sitting next to it.  

Fast forward about ten years, and I now have the skills to take my little pet project and turn it into a proper full-stack web application.  


## The Plan
I will be taking the Excel-based application I built with Visual Basic (approx. 1000 lines of code) and turning it into a full-stack web app,
utilizing the following technologies I've learned from class:

- The core of the random table generations will be written in Node.js

- I'll be using React to render the HTML, as it will allow me to update the displayed results dynamically.

- I will be converting the data from approx. 15 excel spreadsheets into a single PostgreSQL database
- Because of the nature of relational databases, I will be able to condense the data to about 5 or 6 tables

- In the Excel version I used the built-in random number generator from Visual Basic to simulate dice rolls
- With this app I will be connecting to the random number generator API from RANDOM.ORG, for more purely random dice rolls



## See the project in ACTION!
<a href="https://my-quest-project.herokuapp.com" target="_blank">`  https://my-quest-project.herokuapp.com   `</a>

> © Scott Stringer. DigitalCrafts Flex class of 2020.
