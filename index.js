const express = require('express');
const cors = require('cors');
//const dotenv = require('dotenv');
//dotenv.config();
const questDB = require('database_logic.js');
const clone = require('rfdc')()
const Random = require("random-js").Random;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//end points---------------------------------------------------------------------------------

app.get('/api/getmonster/:monsterLevel', async function (req, res) {
  var monsterLevel = req.params.monsterLevel;
  let frmMnstObj = await formMonstersObject(monsterLevel);
  res.json(frmMnstObj);
});

app.get('/api/gettreasure/:roomtype', async function (req, res) {
  var roomtype = req.params.roomtype;
  let frmTrsurObj = await formTreasureObject(roomtype);
  res.json(frmTrsurObj);
});

app.get('/api/getevent/:eventtype', async function (req, res) {
  var eventType = req.params.eventtype;
  let eventRoll = randomInteger(1, 100);
  let eventQuery = await questDB.getEventItem(eventType, eventRoll);
  res.json(eventQuery);
});

app.get('/api/getsubs/:eventtype.:eventSubsHazID', async function (req, res) {
  var eventSubsType = req.params.eventtype;
  var eventSubsHazID = req.params.eventSubsHazID;
  const eventAndHazSubsResult = await questDB.getSubsItems(eventSubsType, eventSubsHazID);
  res.json(eventAndHazSubsResult);
});

app.get('/api/getobjectiveroom/:monsterLevel', async function (req, res) {
  var objMonsterLevel = req.params.monsterLevel;
  let objRoomRoll = randomInteger(1, 6);
  let frmMnstObj = [];
  let frmMnstObj1 = [];
  let frmMnstObj2 = [];
  let frmMnstObj3 = [];
  switch (objRoomRoll) {
    case 1:                             //once 2 levels higher, once 1 level higher, once the same
      if (objMonsterLevel > 8) {
        frmMnstObj1 = await formMonstersObject(10);
      } else {
        frmMnstObj1 = await formMonstersObject((parseInt(objMonsterLevel) + 2));
      }
      if (objMonsterLevel > 9) {
        frmMnstObj2 = await formMonstersObject(10);
      } else {
        frmMnstObj2 = await formMonstersObject((parseInt(objMonsterLevel) + 1));
      }
      frmMnstObj3 = await formMonstersObject(objMonsterLevel);
    frmMnstObj = frmMnstObj1.concat(frmMnstObj2, frmMnstObj3)
    break;
    case 2:                             //twice 1 level higher
      if (objMonsterLevel > 9) {
        frmMnstObj1 = await formMonstersObject(10);
        frmMnstObj2 = await formMonstersObject(10);
      } else {
        frmMnstObj1 = await formMonstersObject((parseInt(objMonsterLevel) + 1));
        frmMnstObj2 = await formMonstersObject((parseInt(objMonsterLevel) + 1));
      }
      frmMnstObj = frmMnstObj1.concat(frmMnstObj2)
    break;
    case 3:                             //once 1 level higher, twice the same
      if (objMonsterLevel > 9) {
        frmMnstObj1 = await formMonstersObject(10);
      } else {
        frmMnstObj1 = await formMonstersObject((parseInt(objMonsterLevel) + 1));
      }
      frmMnstObj2 = await formMonstersObject(objMonsterLevel);
      frmMnstObj3 = await formMonstersObject(objMonsterLevel);
      frmMnstObj = frmMnstObj1.concat(frmMnstObj2, frmMnstObj3)
    break;
    case 4:
    case 5:                             //three times on the same
      frmMnstObj1 = await formMonstersObject(objMonsterLevel);
      frmMnstObj2 = await formMonstersObject(objMonsterLevel);
      frmMnstObj3 = await formMonstersObject(objMonsterLevel);
      frmMnstObj = frmMnstObj1.concat(frmMnstObj2, frmMnstObj3)
    break;
    default:                            //twice on the same
      frmMnstObj1 = await formMonstersObject(objMonsterLevel);
      frmMnstObj2 = await formMonstersObject(objMonsterLevel);
      frmMnstObj = frmMnstObj1.concat(frmMnstObj2)
  }
  
  res.json(frmMnstObj);
});

//-------------------------------------------------------------------------------------------
//defining my objects that will be filled with data and passed to the front end

const monstersObject = [];

const monsterObject = { d66: "", level: "", number: "", monster_name: "", wounds: "", move: "", weapon_skill: "", ballistic_skill: "", strength: "", toughness: "", initiative: "", attacks: "", gold: "", armour: "", damage: "", special_rules: [] }

const specialRulesObject = { rule_name: "", rule_description: ""};

const treasureObject = { treasure_type: "", treasure_name: "", treasure_cost: "", treasure_description: "" };

//-------------------------------------------------------------------------------------------
//this function generates a random integer between a min and max, basiclly to emulate a dice roll, it is called from many places in the code


function randomInteger (min, max) {
  const random = new Random();
  const value = random.integer(min, max);
  return value;
}

// function randomInteger (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function getAD66 () {
  let tensDig = randomInteger(1, 6);              // get the random tens and ones digits
  let onesDig = randomInteger(1, 6);
  let d66 = (tensDig * 10) + onesDig;
  return d66;
}

//-------------------------------------------------------------------------------------------
//this function fills in the data for the individual monster objects and then pushes then to the main 'Monsters' object

async function fillInNewMonsterObject (numMonsters, getMonsterStatsResult, levelToPass, d66ToPass) {
  const newMonsterObject = clone(monsterObject);
  newMonsterObject.d66 = d66ToPass;
  newMonsterObject.level = levelToPass;
  newMonsterObject.number = numMonsters;
  if (numMonsters === 1) {
    newMonsterObject.monster_name = getMonsterStatsResult.monster_name;
  } else {
    newMonsterObject.monster_name = getMonsterStatsResult.monster_name + "(s)";
  }
  newMonsterObject.wounds = getMonsterStatsResult.wounds;
  newMonsterObject.move = getMonsterStatsResult.move;
  newMonsterObject.weapon_skill = getMonsterStatsResult.weapon_skill;
  newMonsterObject.ballistic_skill = getMonsterStatsResult.ballistic_skill;
  newMonsterObject.strength = getMonsterStatsResult.strength;
  newMonsterObject.toughness = getMonsterStatsResult.toughness;
  newMonsterObject.initiative = getMonsterStatsResult.initiative;
  newMonsterObject.attacks = getMonsterStatsResult.attacks;
  newMonsterObject.gold = getMonsterStatsResult.gold;
  newMonsterObject.armour = getMonsterStatsResult.armour;
  newMonsterObject.damage = getMonsterStatsResult.damage;
  //this loop will go thru the 13 notes fields in the monster stats, creating and pushing a 'special rules' object into the array at the end of the monsterObject
  for (let i = 1; i < 13; i++) {
    if (getMonsterStatsResult["notes" + (i).toString()] !== '') {
      const specialRuleResult = await questDB.getSpecialRule(getMonsterStatsResult["notes" + (i).toString()]);
      const newSpecialRulesObject = clone(specialRulesObject)
      newSpecialRulesObject.rule_name = getMonsterStatsResult["notes" + (i).toString()] + " (" + getMonsterStatsResult["notes" + (i).toString() + "_val"] + ")";
      switch (getMonsterStatsResult["notes" + (i).toString()]) {
        case "Dragon Breath (Ambush Magic Auto)":
          const dragonBreathResult = await questDB.getSpecialTableItem("Dragon Breath", randomInteger(1,6));
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description + "\n" + " --- (" + dragonBreathResult.specialtable_name + ") --- " + dragonBreathResult.specialtable_description;
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Giant Attacks":
          const giantAttackResult = await questDB.getSpecialTableItem("Giant Attacks", randomInteger(1,6));
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description + "\n" + " --- (" + giantAttackResult.specialtable_name + ") --- " + giantAttackResult.specialtable_description;
          if (giantAttackResult.specialtable_name === "Pick Up") {
            const giantPickUpResult = await questDB.getSpecialTableItem("Giant Pickup", randomInteger(1,6));
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + "\n" + " --- (" + giantPickUpResult.specialtable_name + ") --- " + giantPickUpResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Vampire":
          const vampireResult = await questDB.getSpecialTableItem("Vampire Abilities", randomInteger(1,6));
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description + "\n" + " --- (" + vampireResult.specialtable_name + ") --- " + vampireResult.specialtable_description;
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Treasure Hoarde":
          const treasureHoardResult = await questDB.getSpecialTableItem("Treasure Hoard", (randomInteger(1,6) + parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10) ));
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description + "\n" + " --- (" + treasureHoardResult.specialtable_name + ") --- " + treasureHoardResult.specialtable_description;
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Magic Armour":
          const magicArmourResult = await questDB.getSpecialTableItem("Magic Armour", randomInteger(1,6));
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description + "\n" + " --- (" + magicArmourResult.specialtable_name + ") --- " + magicArmourResult.specialtable_description;
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Magic Item":
          var magicItemResult = await questDB.getSpecialTableItem("Magic Items", randomInteger(1,6));
          for (let z = 0; z < newMonsterObject.special_rules.length; z++) {
            if ( newMonsterObject.special_rules[z].rule_description.search(magicItemResult.specialtable_name) > -1 ) {
              magicItemResult = await questDB.getSpecialTableItem("Magic Items", randomInteger(1,6));
            }
          }
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description + "\n" + " --- (" + magicItemResult.specialtable_name + ") --- " + magicItemResult.specialtable_description;
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Magic Weapon":
          const magicWeaponResult = await questDB.getSpecialTableItem("Magic Weapons", randomInteger(1,6));
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description + "\n" + " --- (" + magicWeaponResult.specialtable_name + ") --- " + magicWeaponResult.specialtable_description;
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Beastman Magic":
          for (let x = 0; x < parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10); x++) {
            const beastmanResult = await questDB.getSpecialTableItem("Beastmen/Chaos/Darkelf", ((randomInteger(1,6) + randomInteger(1,6)) - 1));
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + specialRuleResult.rule_description + "\n" + " --- (" + beastmanResult.specialtable_name + ") --- " + beastmanResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Chaos Magic":
        case "Dark Elf Magic":
          for (let x = 0; x < parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10); x++) {
            const darkElfResult = await questDB.getSpecialTableItem("Beastmen/Chaos/Darkelf", (randomInteger(1,6) + randomInteger(1,6)) );
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + specialRuleResult.rule_description + "\n" + " --- (" + darkElfResult.specialtable_name + ") --- " + darkElfResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Chaos Dwarf Magic":
          for (let x = 0; x < parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10); x++) {
            const chaosDwarfResult = await questDB.getSpecialTableItem("Chaos Dwarf", randomInteger(1,6));
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + specialRuleResult.rule_description + "\n" + " --- (" + chaosDwarfResult.specialtable_name + ") --- " + chaosDwarfResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Necromantic Magic":
          for (let x = 0; x < parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10); x++) {
            const necromanticResult = await questDB.getSpecialTableItem("Necromantic", randomInteger(1,6));
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + specialRuleResult.rule_description + "\n" + " --- (" + necromanticResult.specialtable_name + ") --- " + necromanticResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Orc Magic":
          for (let x = 0; x < parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10); x++) {
            const orcMagicResult = await questDB.getSpecialTableItem("Orcs and Goblins", ((randomInteger(1,6) + randomInteger(1,6)) + 2));
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + specialRuleResult.rule_description + "\n" + " --- (" + orcMagicResult.specialtable_name + ") --- " + orcMagicResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Goblin Magic":
          for (let x = 0; x < parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10); x++) {
            const goblinMagicResult = await questDB.getSpecialTableItem("Orcs and Goblins", ((randomInteger(1,6) + randomInteger(1,6))));
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + specialRuleResult.rule_description + "\n" + " --- (" + goblinMagicResult.specialtable_name + ") --- " + goblinMagicResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        case "Skaven Magic":
          for (let x = 0; x < parseInt(getMonsterStatsResult["notes" + (i).toString() + "_val"], 10); x++) {
            const skaneMagicResult = await questDB.getSpecialTableItem("Skaven", randomInteger(1,6));
            newSpecialRulesObject.rule_description = newSpecialRulesObject.rule_description + specialRuleResult.rule_description + "\n" + " --- (" + skaneMagicResult.specialtable_name + ") --- " + skaneMagicResult.specialtable_description;
          }
          newMonsterObject.special_rules.push(newSpecialRulesObject);
        break;
        default:
          newSpecialRulesObject.rule_description = specialRuleResult.rule_description;
          newMonsterObject.special_rules.push(newSpecialRulesObject);
      }
    } else {
      break     //once I hit a notes field that is blank, break out of the loop
    }
  }
  return newMonsterObject;
};

//-------------------------------------------------------------------------------------------
//this function gets a monster tables result and forms the main 'Monsters' object

async function formMonstersObject (passedLevel) {
  const monsterTableRollResult = await getMonsterTableRoll(passedLevel);
  const newMonstersObject = clone(monstersObject);
  var numMonsters = 0;

  const levelToPass = monsterTableRollResult.monstertable_level;
  const d66ToPass = monsterTableRollResult.monstertable_d66;
  //this is for reading thru the 6 possible monster groups in the monsterTableRollResult
  //if there is a group it will be read into a monsterObject and pushed into the array at monstersObject.monsters

  let skipBecauseOfOr = false;
  for (let i = 1; i < 7; i++) {
    //calculate the number of that monster group
    if (monsterTableRollResult["monster" + (i).toString() + "_numdice"] === 1) {
      numMonsters = randomInteger(1, monsterTableRollResult["monster" + (i).toString() + "_dietype"]) + monsterTableRollResult["monster" + (i).toString() + "_plus"]
    } else if (monsterTableRollResult["monster" + (i).toString() + "_numdice"] === 2) {
      numMonsters = randomInteger(1, monsterTableRollResult["monster" + (i).toString() + "_dietype"]) + randomInteger(1, monsterTableRollResult["monster" + (i).toString() + "_dietype"]) + monsterTableRollResult["monster" + (i).toString() + "_plus"]
    } else {
      numMonsters = monsterTableRollResult["monster" + (i).toString() + "_plus"]
    }

    if (monsterTableRollResult["monster" + (i).toString() + "_andor"] === 'or') {
      //determine randomly to use this one or the next iteration
      const flipACoin = randomInteger(1, 2);
      if (flipACoin === 1) {
        //use first, READ IN this iteration
        const getMonsterStatsResult = await questDB.getMonsterStats(monsterTableRollResult["monster" + i.toString() + "_name"])
        const fillInNewMonsterObjResult = await fillInNewMonsterObject(numMonsters, getMonsterStatsResult, levelToPass, d66ToPass);
        newMonstersObject.push(clone(fillInNewMonsterObjResult));
        skipBecauseOfOr = true;
        if (monsterTableRollResult["monster" + (i).toString() + "_name"] === 'Wild Cave Squig') {
          skipBecauseOfOr = false;
          break
        }
      } else {
        //use second, DO NOTHING at this iteration, wait to read in the next
      }
    } else if ((monsterTableRollResult["monster" + (i).toString() + "_andor"] === 'and') && skipBecauseOfOr === false) {
        //READ IN this iteration and let the loop continue to the next monster group
        const getMonsterStatsResult = await questDB.getMonsterStats(monsterTableRollResult["monster" + i.toString() + "_name"])
        const fillInNewMonsterObjResult = await fillInNewMonsterObject(numMonsters, getMonsterStatsResult, levelToPass, d66ToPass);
        newMonstersObject.push(clone(fillInNewMonsterObjResult));
    } else if ((monsterTableRollResult["monster" + (i).toString() + "_andor"] === 'and') && skipBecauseOfOr === true) {
        //DO NOTHING: you've hit an AND and used the first in a previous OR
        skipBecauseOfOr = false;
    } else if ((monsterTableRollResult["monster" + (i).toString() + "_andor"] === '') && skipBecauseOfOr === true) {
        //DO NOTHING: you've hit a blank ANDOR right after an OR choice where you read in the first
        skipBecauseOfOr = false;
    } else if (monsterTableRollResult["monster" + (i).toString() + "_name"] === '') {
        //you've hit a blank monster block, DO NOTHING and break out
        break
    } else {
        //this will be if there is no 'and' and no 'or', READ IN this iteration and them break out of loop
        const getMonsterStatsResult = await questDB.getMonsterStats(monsterTableRollResult["monster" + i.toString() + "_name"])
        const fillInNewMonsterObjResult = await fillInNewMonsterObject(numMonsters, getMonsterStatsResult, levelToPass, d66ToPass);
        newMonstersObject.push(clone(fillInNewMonsterObjResult));
      break
    };
  };
  //console.log(newMonstersObject)
  return newMonstersObject;
};

//-------------------------------------------------------------------------------------------

//this function generates a d66, then calls the database .getMonsters method to get the monster table result
async function getMonsterTableRoll (levelChoice) {      //the monster table level will get passed in
  let mnstLevel = levelChoice;

  // let tensDig = randomInteger(1, 6);              // get the random tens and ones digits
  // let onesDig = randomInteger(1, 6);
  // let d66 = (tensDig * 10) + onesDig;             // making the d66 roll

  let D66 = getAD66();

  if (D66 === 11 || D66 === 66) {                 //this is to check if the first roll is 11 or 66
    mnstLevel = ++mnstLevel;                      //if so, bump up the monster level
    if (mnstLevel > 10) {
      mnstLevel = 10;                             //monster level cant be bumped past 10
    };
    do {                                          //and then drop into a do/while loop to keep generating
      // tensDig = randomInteger(1, 6);              //a new d66 roll until you get a result OTHER than 11 or 66
      // onesDig = randomInteger(1, 6);
      // d66 = (tensDig * 10) + onesDig;
      D66 = getAD66();
    }
    while (D66 === 11 || D66 === 66);
  }
  
  let getMonsterResult = await questDB.getMonsters(mnstLevel, D66)

  return getMonsterResult;
}

//-------------------------------------------------------------------------------------------

async function formTreasureObject (roomType) {
  const newTreasureObject = clone(treasureObject);
  let treasureTableType = "";             //this variable will be populated with the type to send to the database quiery
  let numToSend = 0;                      //the number to send to the database quiery
  if (roomType === "DRT") {               //needs to be Dungeon Room Treasure
    let rndmDRT = randomInteger(1, 7);
    switch (rndmDRT) {
      case 1:                             //Roll of 1 - Valuables: either Gold Roll or Commodities
        let valuablesRoll = randomInteger(1, 6);
        if (valuablesRoll < 4) {          //gold roll
          treasureTableType = "Gold Roll";
        } else {                          //commodities
          treasureTableType = "Commodities";
        }
      break;
      case 2:                             //Roll 2-4 - Magic Items: either Scroll, Potions & Trinkets
      case 3:                             //One Use Magic Items, Minor Treasures, or Jewelry
      case 4: 
        let magicItemsRoll = randomInteger(1, 6);
        switch (magicItemsRoll) {
          case 1:
            treasureTableType = "Scroll";
          break;
          case 2:
            treasureTableType = "Potions and Trinkets";
          break;
          case 3:
            treasureTableType = "One Use Magic Items";
          break;
          case 4:
          case 5:
            treasureTableType = "Minor Treasures";
          break;
          default:
            treasureTableType = "Jewelry";
        }
      break;
      default:                            //Roll 5-6 - Weapons & Armor: either Armor & Shields, Swords, or Other Weapons
        let weaponsArmorRoll = randomInteger(1, 6);
        switch (weaponsArmorRoll) {
          case 1:
          case 2:
            treasureTableType = "Armor and Shields";
          break;
          case 3:
          case 4:
            treasureTableType = "Swords";
          break;
          default:
            treasureTableType = "Other Weapons";
        }
    }
  } else {                                //otherwise it is Objective Room Treasure
    let rndmORT = randomInteger(1, 6);
    if (rndmORT < 4) {
      treasureTableType = "Obj Room Magic Items";
    } else {
      treasureTableType = "Obj Room Weapons and Armor";
    }
  }

  if (treasureTableType === "Gold Roll" || treasureTableType === "Scroll") {
    numToSend = 1;
  } else {
    numToSend = getAD66();
  }
  
  const treasureTableRollResult = await questDB.getTreasureItem(treasureTableType, numToSend);
  newTreasureObject.treasure_type = treasureTableRollResult.treasuretable_type;
  newTreasureObject.treasure_name = treasureTableRollResult.treasuretable_name;
  newTreasureObject.treasure_cost = treasureTableRollResult.treasuretable_cost;
  newTreasureObject.treasure_description = treasureTableRollResult.treasuretable_description;
  return newTreasureObject;
}


// global kickoff point
//-------------------------------------------------------------------------------------------

const startExpressApp = () => {
  app.listen(process.env.PORT, () => {
    console.log('express is listening on port ' + process.env.PORT)
  })
}

const bootupSequenceFailed = (err) => {
  console.error('Unable to connect to the database:', err)
  console.error('Goodbye!')
  process.exit(1)
}

// const testingEventQuerys = async function () {
//   let eventTest = "settlement event";
//   let eventTestRoll = 6;
//   let eventSubsHazID = 206;
//   const eventAndHazResult = await questDB.getEventItem(eventTest, eventTestRoll);
//   console.log("----------------------------------------------------------------");
//   console.log(eventAndHazResult);
//   console.log("----------------------------------------------------------------");
//   const eventAndHazSubsResult = await questDB.getSubsItems(eventTest, eventSubsHazID);
//   console.log(eventAndHazSubsResult);
// }

questDB.connect()
  .then(startExpressApp)
  .catch(bootupSequenceFailed)