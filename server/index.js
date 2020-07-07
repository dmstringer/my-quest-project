const express = require('express');
const cors = require('cors');
const questDB = require('./database_logic');
const clone = require('rfdc')()
//const randomOrg = require('./random');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 7878;

app.get('/api/getmonster/:level', async function (req, res) {
  var level = req.params.level;
  let frmMnstObj = await formMonstersObject(level);
  console.log(frmMnstObj);
  console.log(level);
  res.json(frmMnstObj);
  
});

function randomInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollTwoDieSix () {
  let rollOne = randomInteger(1, 6);
  let rollTwo = randomInteger(1, 6);
  return rollOne + rollTwo;
}

const startExpressApp = () => {
  app.listen(port, () => {
    console.log('express is listening on port ' + port)
  })
}

const bootupSequenceFailed = (err) => {
  console.error('Unable to connect to the database:', err)
  console.error('Goodbye!')
  process.exit(1)
}

const monstersObject = { level: "", d66: "", monsters: [] }

const monsterObject = { number: "", monster_name: "", wounds: "", move: "", weapon_skill: "", ballistic_skill: "", strength: "", toughness: "", initiative: "", attacks: "", gold: "", armour: "", damage: "", special_rules: [] }

async function fillInNewMonsterObject (numMonsters, getMonsterStatsResult) {
  let newMonsterObject = monsterObject;
  newMonsterObject.number = numMonsters;
  newMonsterObject.monster_name = getMonsterStatsResult.monster_name;
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
      newMonsterObject.special_rules.push({rule_name: getMonsterStatsResult["notes" + (i).toString()] + " (" + getMonsterStatsResult["notes" + (i).toString() + "_val"] + ")",
                                          rule_description: specialRuleResult.rule_description});
    } else {
      break     //once I hit a notes field that is blank, break out of the loop
    }
  }
  return newMonsterObject;
};

async function formMonstersObject (level) {
  const monsterTableRollResult = await getMonsterTableRoll(level);
  let newMonstersObject = monstersObject;
  let numMonsters = 0;
  //console.log(monsterTableRollResult);

  newMonstersObject.level = monsterTableRollResult.monstertable_level;
  newMonstersObject.d66 = monsterTableRollResult.monstertable_d66;
  //this is for reading thru the 6 possible monster groups in the monsterTableRollResult
  //if there is a group it will be read into a monsterObject and pushed into the array at monstersObject.monsters

  for (let i = 1; i < 7; i++) {
    let skipBecauseOfOr = false;
    //calculate the number of that monster group
    if (monsterTableRollResult["monster" + (i).toString() + "_numdice"] === 1) {
      numMonsters = randomInteger(1, monsterTableRollResult["monster" + (i).toString() + "_dietype"]) + monsterTableRollResult["monster" + (i).toString() + "_plus"]
    } else if (monsterTableRollResult["monster" + (i).toString() + "_numdice"] === 2) {
      numMonsters = randomInteger(1, monsterTableRollResult["monster" + (i).toString() + "_dietype"]) + randomInteger(1, monsterTableRollResult["monster" + (i).toString() + "_dietype"]) + monsterTableRollResult["monster" + (i).toString() + "_plus"]
    } else {
      numMonsters = monsterTableRollResult["monster" + (i).toString() + "_plus"]
    }

    if (skipBecauseOfOr === true) {
      //skipBecauseOfOr is only flagged by using the 1st group of monsters in the 'or' below, this force skips an iteration
      //essntially DO NOTHING until the next iteration
      skipBecauseOfOr = false;
    } else {
      if (monsterTableRollResult["monster" + (i).toString() + "_andor"] === 'or') {
        //determine randomly to use this one or the next iteration
        if (randomInteger(1, 2) === 1) {
          //use first, READ IN this iteration
          let getMonsterStatsResult = await questDB.getMonsterStats(monsterTableRollResult["monster" + i.toString() + "_name"])
          //will need to do something besides log this
          let fillInNewMonsterObjResult = await fillInNewMonsterObject(numMonsters, getMonsterStatsResult)
          newMonstersObject.monsters.push(clone(fillInNewMonsterObjResult));
          skipBecauseOfOr = true;
        } else {
          //use second, DO NOTHING at this iteration, wait to read in the next
        }
      } else if (monsterTableRollResult["monster" + (i).toString() + "_andor"] === 'and') {
          //READ IN this iteration and let the loop continue to the next monster group
          let getMonsterStatsResult = await questDB.getMonsterStats(monsterTableRollResult["monster" + i.toString() + "_name"])
          //will need to do something besides log this
          let fillInNewMonsterObjResult = await fillInNewMonsterObject(numMonsters, getMonsterStatsResult)
          
          newMonstersObject.monsters.push(clone(fillInNewMonsterObjResult));
      } else if (monsterTableRollResult["monster" + (i).toString() + "_name"] === '') {
          //you've hit a blank monster block, DO NOTHING and break out
          break
      } else {
          //this will be if there is no 'and' and no 'or', READ IN this iteration and them break out of loop
          let getMonsterStatsResult = await questDB.getMonsterStats(monsterTableRollResult["monster" + i.toString() + "_name"])
          //will need to do something besides log this
          let fillInNewMonsterObjResult = await fillInNewMonsterObject(numMonsters, getMonsterStatsResult)
          
          newMonstersObject.monsters.push(clone(fillInNewMonsterObjResult));
        break
      };
    };
  };
  return newMonstersObject;
  //console.log(newMonstersObject);
};


//this function generates a d66 then calls the .getMonsters method to get the monster table result
async function getMonsterTableRoll (levelChoice) {      //the monster table level will get passed in
  let mnstLevel = levelChoice;

  let tensDig = randomInteger(1, 6);              // get the random tens and ones digits
  let onesDig = randomInteger(1, 6);
  let d66 = (tensDig * 10) + onesDig;             // making the d66 roll

  if (d66 === 11 || d66 === 66) {                 //this is to check if the first roll is 11 or 66
    mnstLevel = mnstLevel + 1;                    //if so, bump up the monster level
    if (mnstLevel > 10) {
      mnstLevel = 10;                             //monster level cant be bumped past 10
    };
    do {                                          //and then drop into a do/while loop to keep generating
      tensDig = randomInteger(1, 6);              //a new d66 roll until you get a result OTHER than 11 or 66
      onesDig = randomInteger(1, 6);
      d66 = (tensDig * 10) + onesDig;
    }
    while (d66 === 11 || d66 === 66);
  }
  
  let getMonsterResult = await questDB.getMonsters(mnstLevel, d66)

  return getMonsterResult;
}

// global kickoff point
questDB.connect()
  .then(startExpressApp)
  .catch(bootupSequenceFailed)