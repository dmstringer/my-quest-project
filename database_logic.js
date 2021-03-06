const knexLib = require('knex')
const dbCfg = require('./knexfile.js')

// this will hold our database connection
let conn = null

//REMEMBER------this should return a promise
function connect () {
  return new Promise(function (resolve, reject) {
    conn =  knexLib(dbCfg.production)
    conn.raw('SELECT 2 + 2 as test')
      .then((result) => {
        //console.log(result.rows)
        //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function getMonsters (mnstLevel, d66) {
  return conn.from('monster_table').select('*').where('monstertable_level', mnstLevel).where('monstertable_d66', d66)

    .then((result) => {
      return result[0]
    })
}

function getMonsterStats (mnstName) {
  return conn.from('monster_stats').select('*').where('monster_name', mnstName)

    .then((result) => {
      return result[0]
    })
}

function getSpecialRule (ruleName) {
  return conn.from('special_rules').select('*').where('rule_name', ruleName)

    .then((result) => {
      return result[0]
    })
}

function getSpecialTableItem (ruleType, tableNum) {
  return conn.from('special_table').select('*').where('specialtable_type', ruleType).where('specialtable_num', tableNum)

    .then((result) => {
      return result[0]
    })
}

function getTreasureItem (treasureType, tableNum) {
  return conn.from('treasure_table').select('*').where('treasuretable_type', treasureType).where('treasuretable_num', tableNum)

    .then((result) => {
      return result[0]
    })
}

function getEventItem (eventType, tableNum) {
  return conn.from('events_and_hazards').select('*').where('event_n_haz_type', eventType).where('event_n_haz_roll', tableNum)

    .then((result) => {
      return result[0]
    })
}

function getSubsItems (eventType, event_n_haz_id) {
  return conn.from('events_and_hazards_subs').select('*').where('event_n_haz_subs_type', eventType).where('event_n_haz_id', event_n_haz_id)

    .then((result) => {
      return result
    })
}

//--------------------------------------------------------------------
// Public API

module.exports = {
  connect: connect,
  getMonsters: getMonsters,
  getMonsterStats: getMonsterStats,
  getSpecialRule: getSpecialRule,
  getSpecialTableItem: getSpecialTableItem,
  getTreasureItem: getTreasureItem,
  getEventItem: getEventItem,
  getSubsItems: getSubsItems
}
 
