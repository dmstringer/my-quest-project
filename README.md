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

- The core back-end server will be in Node.js. This will be my random table generation logic talking to the database as well as my Express server for end-points. 

- I'll be using React for my front-end, as it will allow me to update the displayed results dynamically.

- I will be converting the data from approx. 15 Excel spreadsheets into a single PostgreSQL database, with Knex as my database connection module,  I will be able to condense the original Excel data to approx. 7 tables.

- In the Excel version I used the built-in random number generator from Visual Basic to simulate dice rolls. With this app I will be using the random-js node module as a mathematically correct random number generator.

## What I Learned
I found this project to be both extremely challenging and rewarding. Working through every aspect of the full-stack process (getting the database created, the server talking to the database, the front-end talking to the server, etc.) was painful at times, but finally getting it working was fist-pump inducing. :) I found it especially rewarding to be able to take the IMMENSE amount of data from my initial excel project and get it moved into a proper SQL database. It may not be the prettiest thing, but I am incredibly happy with the end result.


## See the project in ACTION!
<a href="https://my-quest-project.herokuapp.com" target="_blank">`  https://my-quest-project.herokuapp.com   `</a>

> © Scott Stringer. DigitalCrafts Flex class of 2020.
