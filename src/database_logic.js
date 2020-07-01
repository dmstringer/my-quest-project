const knexLib = require('knex')
const dbCfg = require('../knexfile')

// this will hold our database connection
let conn = null

//REMEMBER------this should return a promise
function connect () {
  return new Promise(function (resolve, reject) {
    conn =  knexLib(dbCfg.development)
    conn.raw('SELECT 1 + 1')
      .then((result) => {
        console.log(result)
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
      })
      .catch((err) => {
        reject(err)
      })
  })
}

//--------------------------------------------------------------------
// Public API

module.exports = {
  connect: connect
  //-------
}



// REMEMBER ---- in app.js or index.js you will need to have something like (at the top)....
// 
// const questData = require('./src/database_logic')