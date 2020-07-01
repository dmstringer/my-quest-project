const knexLib = require('knex')
const dbCfg = require('../knexfile.js')

// this will hold our database connection
let conn = null

//REMEMBER------this should return a promise
function connect () {
  return new Promise(function (resolve, reject) {
    conn =  knexLib(dbCfg.development)
    conn.raw('SELECT 2 + 2 as test')
      .then((result) => {
        console.log(result.rows)
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const getMonstersQuery = `SELECT * FROM monster_table WHERE monstertable_level = 1`

function getMonsters () {
  return conn.raw(getMonstersQuery)
    .then((result) => {
      return result
    })
}


//--------------------------------------------------------------------
// Public API

module.exports = {
  connect: connect,
  getMonsters: getMonsters

}

