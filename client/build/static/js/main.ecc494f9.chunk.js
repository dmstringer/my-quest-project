(this["webpackJsonpmy-quest-project"]=this["webpackJsonpmy-quest-project"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),l=a.n(s),o=(a(12),a(1)),m=(a(13),a(2));function c(e){return r.a.createElement("li",{className:"list-group-item p-1 ml-3",style:{whiteSpace:"pre-wrap"}},r.a.createElement("span",{className:"font-weight-bold"},e.thisMonster.special_rules[e.arrayIndex].rule_name)," ",e.thisMonster.special_rules[e.arrayIndex].rule_description)}function i(e){var t=Object(m.a)(Array(e.monsterList[e.arrayIndex].special_rules.length).keys());return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card mb-2 border border-dark",style:{width:"1130px"}},r.a.createElement("div",{className:"card-body d-flex flex-row p-3"},r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"50px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom"},"#"),r.a.createElement("div",{className:"p-0 font-weight-bold"},e.monsterList[e.arrayIndex].number)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"180px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom"},"Monster Name"),r.a.createElement("div",{className:"p-0 font-weight-bold"},e.monsterList[e.arrayIndex].monster_name)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"70px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Wnds"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].wounds)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"70px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Move"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].move)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"60px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"WS"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].weapon_skill)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"60px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"BS"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].ballistic_skill)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"90px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Strength"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].strength)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"70px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Tough."),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].toughness)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"70px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Init."),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].initiative)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"70px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Attacks"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].attacks)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"70px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Gold"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].gold)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"70px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Armour"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].armour)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"110px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Dmg"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].damage)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"50px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Level"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.monsterList[e.arrayIndex].level))),r.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(t){return r.a.createElement(c,{key:t,arrayIndex:t,thisMonster:e.monsterList[e.arrayIndex]})}))),r.a.createElement("div",{className:"card-body p-1 ml-3 text-center"},r.a.createElement("a",{href:"# ",className:"card-link btn btn-primary btn-sm",onClick:function(){var t,a;e.updateMonsterList((t=e.monsterList,a=e.arrayIndex,t.slice(0,a).concat(t.slice(a+1,t.length))))}},"Remove Monster"))))}var d=function(e){var t=Object(m.a)(Array(e.monsterList.length).keys());return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:""},t.map((function(t){return r.a.createElement(i,{key:t,arrayIndex:t,monsterList:e.monsterList,updateMonsterList:e.updateMonsterList})}))))},u=[{d66:"",level:"",number:"",monster_name:"",wounds:"",move:"",weapon_skill:"",ballistic_skill:"",strength:"",toughness:"",initiative:"",attacks:"",gold:"",armour:"",damage:"",special_rules:[]}];function p(e,t){var a=e.concat(t);return""===a[0].d66&&a.shift(),a}var v=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container col justify-content-center"},r.a.createElement("div",{className:"container text-center mt-3 d-flex justify-content-center"},r.a.createElement("select",{className:"custom-select",style:{width:"300px"},value:e.monDropdownValue,id:"monsterLevel",onChange:function(t){return e.updateMonDropdownValue(t.currentTarget.value)}},e.monDropdownItems.map((function(e){var t=e.label,a=e.value;return r.a.createElement("option",{key:a,value:a},t)}))),r.a.createElement("a",{className:"btn btn-primary mx-2",href:"# ",role:"button",onClick:function(){if("DEFAULT"===document.getElementById("monsterLevel").value)alert("Please choose a Monster Level!");else{var t=document.getElementById("monsterLevel").value;fetch("/api/getmonster/".concat(t)).then((function(e){return e.json()})).then((function(t){e.updateMonsterList(p(e.monsterList,t))}))}}},"Dungeon Room Monsters"),r.a.createElement("a",{className:"btn btn-warning",href:"# ",role:"button",onClick:function(){if("DEFAULT"===document.getElementById("monsterLevel").value)alert("Please choose a Monster Level!");else{var t=document.getElementById("monsterLevel").value;fetch("/api/getobjectiveroom/".concat(t)).then((function(e){return e.json()})).then((function(t){e.updateMonsterList(p(e.monsterList,t))}))}}},"Objective Room Monsters"),r.a.createElement("a",{className:"btn btn-danger mx-2",href:"# ",role:"button",onClick:function(){e.updateMonsterList(u)}},"Clear all Monsters")),r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("h1",{className:"text-center mt-3 ml-3"},"Monster List"),r.a.createElement(d,{monsterList:e.monsterList,updateMonsterList:e.updateMonsterList}))))))};function h(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"card mb-2 border border-dark",style:{width:"600px"}},r.a.createElement("div",{className:"card-body d-flex flex-row px-3 py-2"},r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"250px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom"},"Name"),r.a.createElement("div",{className:"p-0 font-weight-bold"},e.treasureList[e.arrayIndex].treasure_name)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"230px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom"},"Treasure Type"),r.a.createElement("div",{className:"p-0 font-weight-normal"},e.treasureList[e.arrayIndex].treasure_type)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"100px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Cost"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-normal"},e.treasureList[e.arrayIndex].treasure_cost))),r.a.createElement("div",{className:"card-body p-0 px-3"},e.treasureList[e.arrayIndex].treasure_description),r.a.createElement("div",{className:"card-body p-1 ml-3 text-center"},r.a.createElement("a",{href:"# ",className:"card-link btn btn-primary btn-sm",onClick:function(){var t,a;e.updateTreasureList((t=e.treasureList,a=e.arrayIndex,t.slice(0,a).concat(t.slice(a+1,t.length))))}},"Remove Treasure")))))}var b=function(e){var t=Object(m.a)(Array(e.treasureList.length).keys());return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"d-flex flex-column"},t.map((function(t){return r.a.createElement(h,{key:t,arrayIndex:t,treasureList:e.treasureList,updateTreasureList:e.updateTreasureList})}))))},E=[{treasure_type:"",treasure_name:"",treasure_cost:"",treasure_description:""}];var f=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container col justify-content-center"},r.a.createElement("div",{className:"container text-center mt-3 d-flex justify-content-center"},r.a.createElement("select",{className:"custom-select",style:{width:"300px"},value:e.tresDropdownValue,id:"treasureType",onChange:function(t){return e.updateTresDropdownValue(t.currentTarget.value)}},e.tresDropdownItems.map((function(e){var t=e.label,a=e.value;return r.a.createElement("option",{key:a,value:a},t)}))),r.a.createElement("a",{className:"btn btn-primary px-2 mx-2",href:"# ",role:"button",onClick:function(){if("DEFAULT"===document.getElementById("treasureType").value)alert("Please choose a Treasure Type!");else{var t=document.getElementById("treasureType").value;fetch("/api/gettreasure/".concat(t)).then((function(e){return e.json()})).then((function(t){e.updateTreasureList(function(e,t){var a=e.concat(t);return""===a[0].treasure_type&&a.shift(),a}(e.treasureList,t))}))}}},"Generate a Treasure"),r.a.createElement("a",{className:"btn btn-danger px-2",href:"# ",role:"button",onClick:function(){e.updateTreasureList(E)}},"Clear all Treasures")),r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("h1",{className:"text-center mt-3"},"Treasure List"),r.a.createElement(b,{treasureList:e.treasureList,updateTreasureList:e.updateTreasureList}))))))},y=[{event_n_haz_id:"",event_n_haz_type:"",event_n_haz_name:"",event_n_haz_roll:"",event_n_haz_has_sub:"",event_n_haz_description:"",event_n_haz_subs_visible:"",event_n_haz_subs_descriptions:""}];function x(e,t){var a=e.concat(t);return""===a[0].event_n_haz_id&&a.shift(),a}function N(e){var t=Object(m.a)(Array(e.eventList.length).keys());return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:""},t.map((function(t){return r.a.createElement(g,{key:t,arrayIndex:t,eventList:e.eventList,updateEventList:e.updateEventList})}))))}function g(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card mb-2 border border-dark",style:{width:"1130px"}},r.a.createElement("div",{className:"card-body d-flex flex-row justify-content-center p-3"},r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"200px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom"},"Type"),r.a.createElement("div",{className:"p-0 font-weight-bold"},e.eventList[e.arrayIndex].event_n_haz_type)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"300px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom"},"Event Name"),r.a.createElement("div",{className:"p-0 font-weight-bold"},e.eventList[e.arrayIndex].event_n_haz_name)),r.a.createElement("div",{className:"p-0 d-flex flex-column",style:{width:"100px"}},r.a.createElement("div",{className:"p-0 border-top border-bottom mx-auto"},"Roll"),r.a.createElement("div",{className:"p-0 mx-auto font-weight-bold"},e.eventList[e.arrayIndex].event_n_haz_roll))),r.a.createElement("div",{className:"card-body p-1 ml-3",style:{whiteSpace:"pre-wrap"}},e.eventList[e.arrayIndex].event_n_haz_description),r.a.createElement("ul",{className:"list-group list-group-flush",onClick:function(){var t=JSON.parse(JSON.stringify(e.eventList));!1===t[e.arrayIndex].event_n_haz_subs_visible?t[e.arrayIndex].event_n_haz_subs_visible=!0:t[e.arrayIndex].event_n_haz_subs_visible=!1,e.updateEventList(t)}},r.a.createElement("li",{className:"".concat(!1===e.eventList[e.arrayIndex].event_n_haz_subs_visible?"list-group-item p-1 ml-3 invisible":"list-group-item p-1 ml-3 visible"),style:{whiteSpace:"pre-wrap"}},e.eventList[e.arrayIndex].event_n_haz_subs_descriptions)),r.a.createElement("div",{className:"card-body p-1 ml-3 text-center"},r.a.createElement("a",{href:"# ",className:"card-link btn btn-primary btn-sm",onClick:function(){var t,a;e.updateEventList((t=e.eventList,a=e.arrayIndex,t.slice(0,a).concat(t.slice(a+1,t.length))))}},"Remove Event/Hazard"))))}var _=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container col justify-content-center border-right"},r.a.createElement("div",{className:"container text-center mt-3 d-flex justify-content-center"},r.a.createElement("select",{className:"custom-select",style:{width:"300px"},value:e.eventDropdownValue,id:"eventType",onChange:function(t){return e.updateEventDropdownValue(t.currentTarget.value)}},e.eventDropdownItems.map((function(e){var t=e.label,a=e.value;return r.a.createElement("option",{key:a,value:a},t)}))),r.a.createElement("a",{className:"btn btn-primary px-2 mx-2",href:"# ",role:"button",onClick:function(){if("DEFAULT"===document.getElementById("eventType").value)alert("Please choose an Event Type!");else{var t=document.getElementById("eventType").value;fetch("/api/getevent/".concat(t)).then((function(e){return e.json()})).then((function(a){var n=a,r={};n.event_n_haz_has_sub?fetch("/api/getsubs/".concat(t,".").concat(n.event_n_haz_id)).then((function(e){return e.json()})).then((function(t){r=function(e,t){var a="",n=e;t.sort((function(e,t){return e.event_n_haz_subs_order>t.event_n_haz_subs_order?1:-1}));for(var r=0;r<t.length;r++)a=1===t[r].event_n_haz_subs_order?t[r].event_n_haz_subs_roll+" --- "+t[r].event_n_haz_subs_description:a+"\n"+t[r].event_n_haz_subs_roll+" --- "+t[r].event_n_haz_subs_description;return n.event_n_haz_description=n.event_n_haz_description+"\n(With some Events/Hazards, it's best for the players NOT to see the accompanying sub-table before rolling. --Click below to toggle visibility--)",n.event_n_haz_subs_visible=!1,n.event_n_haz_subs_descriptions=a,n}(n,t),e.updateEventList(x(e.eventList,r))})):(n.event_n_haz_subs_descriptions="",r=n,e.updateEventList(x(e.eventList,r)))}))}}},"Generate an Event/Hazard"),r.a.createElement("a",{className:"btn btn-danger px-2",href:"# ",role:"button",onClick:function(){e.updateEventList(y)}},"Clear all Events/Hazards")),r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("h1",{className:"text-center mt-3 ml-3"},"Events/Hazards List"),r.a.createElement(N,{eventList:e.eventList,updateEventList:e.updateEventList}))))))};var w=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-fluid justify-content-center text-left mt-3"},r.a.createElement("h1",{className:"m-3 text-center"},"Welcome to My Warhammer Quest Project!"),r.a.createElement("div",{className:"d-flex flex-column container col-6"},r.a.createElement("div",{className:"row media mb-2"},r.a.createElement("div",{className:"media-body"},r.a.createElement("p",{className:"h5"},"The purpose of this site is to be a random generator for the Monsters, Treasures and Events in a game of ",r.a.createElement("a",{className:"font-weight-bold",href:"https://en.wikipedia.org/wiki/Warhammer_Quest"},"Warhammer Quest"),"."),r.a.createElement("p",{className:"h5"},"Instead of using the charts and tables from the Warhammer Quest Roleplay Book, this app allows you to generate what you need at the click of a button."),r.a.createElement("p",{className:"h5"},"In the tabs above you will find:"),r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("ul",{className:"text-left"},r.a.createElement("li",{className:"h5"},"On the Monsters and Treasures Tab you can:",r.a.createElement("ul",null,r.a.createElement("li",{className:"h5 mt-1"},"Generate Dungeon Room and Objective Room Monster Groups by Level"),r.a.createElement("li",{className:"h5"},"Generate Dungeon Room and Objective Room Treasures"))),r.a.createElement("li",{className:"h5"},"On the Events and Hazards Tab you can:",r.a.createElement("ul",null,r.a.createElement("li",{className:"h5 mt-1"},"Generate Dungeon Events while within the dungeon"),r.a.createElement("li",{className:"h5"},"Generate Travel Hazards during their weeks of travel to a Settlement"),r.a.createElement("li",{className:"h5"},"Generate Settlement Events for each day they are staying in a village/town/city"))),r.a.createElement("li",{className:"h5"},"On the About Tab you can read why I created this project "))),r.a.createElement("p",{className:"h5"},"Thank you for visiting, and if you have an old copy of Warhammer Quest, I hope you find this site useful.")),r.a.createElement("img",{className:"ml-3 myimage",src:"questbox2.jpg",alt:"Quest Box",style:{width:"300px",height:"211px"}})))))};var L=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-fluid justify-content-center text-center mt-4"},r.a.createElement("div",{className:"d-flex flex-column container col-6"},r.a.createElement("div",{className:"row media mb-2"},r.a.createElement("div",{className:"media-body text-left"},r.a.createElement("h3",{className:"my-2 text-center"},"About My Warhammer Quest Project"),r.a.createElement("p",{className:"h5"},"So, I'm a huge tabletop gaming nerd."),r.a.createElement("p",{className:"h5"},"Board games, role-playing games (like Dungeons and Dragons), card games, miniatures games...if you can gather around a table and play it, I probably have."),r.a.createElement("p",{className:"h5"},"Many years ago my friends and I played this tabletop miniatures game called ",r.a.createElement("a",{className:"font-weight-bold",href:"https://en.wikipedia.org/wiki/Warhammer_Quest"},"Warhammer Quest"),".")),r.a.createElement("img",{className:"ml-3 myimage",src:"questbox2.jpg",alt:"Quest Box",style:{width:"300px",height:"211px"}})),r.a.createElement("div",{className:"row media mb-2"},r.a.createElement("img",{className:"ml-3 myimage",src:"minis.jpg",alt:"Quest Miniatures",style:{width:"300px",height:"212px"}}),r.a.createElement("div",{className:"media-body text-left"},r.a.createElement("p",{className:"h5 mt-3 ml-3"},"It is a fantasy adventure board game simulating a Dungeons-and-Dragons style dungeon crawl, but without a dungeon master controlling the monsters."),r.a.createElement("p",{className:"h5 ml-3"},"The game presented a set of rules for how the monsters behaved and attacked the players. "),r.a.createElement("p",{className:"h5 ml-3"},"With many different mechanics to generate and control the monsters, all you needed were some other players to sit down with you and play."))),r.a.createElement("div",{className:"row media mb-2"},r.a.createElement("div",{className:"media-body text-left"},r.a.createElement("p",{className:"h5 mt-3"},"The one mechanic that I found to be the most tedious was the random monster tables layed out in the rule book for all the higher level monsters. (monsters past level 1)"),r.a.createElement("p",{className:"h5"},"Each new encounter became this tiresome process of rolling on a table for the monsters... "),r.a.createElement("p",{className:"h5"},"Then looking elsewhere in the book for all the special rules that monster had..."),r.a.createElement("p",{className:"h5"},"Then rolling on another chart to see what treasures those monsters were carrying... "),r.a.createElement("img",{className:"myimage mx-auto d-block",src:"Rage2.jpg",alt:"Rage",style:{width:"133px",height:"75px"}})),r.a.createElement("img",{className:"ml-3 myimage",src:"monsterchart3.jpg",alt:"Monster Chart",style:{width:"300px",height:"227px"}})),r.a.createElement("div",{className:"row media mb-2 mt-2"},r.a.createElement("img",{className:"ml-3 myimage",src:"helper2.jpg",alt:"My Excel Helper",style:{width:"350px",height:"200px"}}),r.a.createElement("div",{className:"media-body text-left"},r.a.createElement("p",{className:"h5 mt-3 ml-3"},"I fealt there had to be a way to speed up this process."),r.a.createElement("p",{className:"h5 ml-3"},"At the time I was good with Excel and I was learning VBA to automate some processes for my job, so I decided to build a monster generator in an Excel spreadsheet. "),r.a.createElement("p",{className:"h5 ml-3"},"I brought in all the monster tables and rules into the excel file as different Excel sheets, essentially my 'database'."),r.a.createElement("p",{className:"h5 ml-3"},"I used Visual Basic to create the logic of generating the monsters and treasures."))),r.a.createElement("div",{className:"row media mb-2"},r.a.createElement("div",{className:"media-body text-left"},r.a.createElement("p",{className:"h5 mt-3"},"It was clunky, but it worked."),r.a.createElement("p",{className:"h5"},"My friends and I used my little Excel pet project many times over the years, with Warhammer Quest spread out on a kitchen table, and a laptop running my little app sitting next to it. "),r.a.createElement("p",{className:"h5"},"Fast forward about fifteen years, and I now find myself with the skills to take my little pet project and turn it into a proper full-stack web application."),r.a.createElement("p",{className:"h5 mt-3"},"So here we are..."))))))},T=[{d66:"",level:"",number:"",monster_name:"",wounds:"",move:"",weapon_skill:"",ballistic_skill:"",strength:"",toughness:"",initiative:"",attacks:"",gold:"",armour:"",damage:"",special_rules:[]}],I=[{treasure_type:"",treasure_name:"",treasure_cost:"",treasure_description:""}],k=[{event_n_haz_id:"",event_n_haz_type:"",event_n_haz_name:"",event_n_haz_roll:"",event_n_haz_has_sub:"",event_n_haz_description:""}],D=[{label:"Choose a Level for Monsters...",value:"DEFAULT"},{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"},{label:"Four",value:"4"},{label:"Five",value:"5"},{label:"Six",value:"6"},{label:"Seven",value:"7"},{label:"Eight",value:"8"},{label:"Nine",value:"9"},{label:"Ten",value:"10"}],j=[{label:"Choose a Type of Treasure...",value:"DEFAULT"},{label:"Dungeon Room Treasure",value:"DRT"},{label:"Objective Room Treasure",value:"ORT"}],z=[{label:"Choose a Type of Event/Hazard...",value:"DEFAULT"},{label:"Dungeon Event",value:"dungeon event"},{label:"Settlement Event",value:"settlement event"},{label:"Travel Hazard",value:"travel hazard"}],M=[{label:"My Warhammer Quest Project",value:"TAB_HELLO",key:"1"},{label:"Monsters",value:"TAB_MONSTERS",key:"2"},{label:"Treasures",value:"TAB_TREASURES",key:"3"},{label:"Events and Hazards",value:"TAB_EVENTS",key:"4"},{label:"About the Project",value:"TAB_ABOUT",key:"5"}];function O(e){return r.a.createElement("ul",{className:"nav nav-tabs nav-justified"},e.tabsArray.map((function(t){var a=t.label,n=t.value,s=t.key;return r.a.createElement("li",{className:"nav-item",key:s,onClick:function(){e.updateTab(n)}},r.a.createElement("a",{href:"# ",className:"".concat(n===e.activeTab?"font-weight-bold nav-link active":"nav-link"),style:{fontSize:"x-large"}},a))})))}function A(e){return"TAB_HELLO"===e.activeTab?r.a.createElement(w,null):"TAB_MONSTERS"===e.activeTab?r.a.createElement(v,{monsterList:e.monsterList,updateMonsterList:e.updateMonsterList,monDropdownItems:e.monDropdownItems,updateMonDropdownItems:e.updateMonDropdownItems,monDropdownValue:e.monDropdownValue,updateMonDropdownValue:e.updateMonDropdownValue}):"TAB_TREASURES"===e.activeTab?r.a.createElement(f,{treasureList:e.treasureList,updateTreasureList:e.updateTreasureList,tresDropdownItems:e.tresDropdownItems,updateTresDropdownItems:e.updateTresDropdownItems,tresDropdownValue:e.tresDropdownValue,updateTresDropdownValue:e.updateTresDropdownValue}):"TAB_EVENTS"===e.activeTab?r.a.createElement(_,{eventList:e.eventList,updateEventList:e.updateEventList,eventDropdownItems:e.eventDropdownItems,updateEventDropdownItems:e.updateEventDropdownItems,eventDropdownValue:e.eventDropdownValue,updateEventDropdownValue:e.updateEventDropdownValue}):r.a.createElement(L,null)}var S=function(){var e=Object(n.useState)("TAB_HELLO"),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(T),m=Object(o.a)(l,2),c=m[0],i=m[1],d=Object(n.useState)(I),u=Object(o.a)(d,2),p=u[0],v=u[1],h=Object(n.useState)(k),b=Object(o.a)(h,2),E=b[0],f=b[1],y=Object(n.useState)(D),x=Object(o.a)(y,2),N=x[0],g=x[1],_=Object(n.useState)("DEFAULT"),w=Object(o.a)(_,2),L=w[0],S=w[1],V=Object(n.useState)(j),B=Object(o.a)(V,2),F=B[0],C=B[1],R=Object(n.useState)("DEFAULT"),W=Object(o.a)(R,2),H=W[0],Q=W[1],U=Object(n.useState)(z),G=Object(o.a)(U,2),P=G[0],q=G[1],J=Object(n.useState)("DEFAULT"),K=Object(o.a)(J,2),X=K[0],Y=K[1];return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:""},r.a.createElement(O,{tabsArray:M,activeTab:a,updateTab:s})),r.a.createElement("section",{className:"container-fluid"},r.a.createElement(A,{activeTab:a,monsterList:c,updateMonsterList:i,treasureList:p,updateTreasureList:v,eventList:E,updateEventList:f,monDropdownItems:N,updateMonDropdownItems:g,monDropdownValue:L,updateMonDropdownValue:S,tresDropdownItems:F,updateTresDropdownItems:C,tresDropdownValue:H,updateTresDropdownValue:Q,eventDropdownItems:P,updateEventDropdownItems:q,eventDropdownValue:X,updateEventDropdownValue:Y})))))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ecc494f9.chunk.js.map