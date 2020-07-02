const express = require('express');
const questDB = require('./database_logic');
const randomOrg = require('./random');

const app = express() 

// serve files out of the public directory
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

const port = 7878

// set the template engine
//app.set('view engine', 'hbs')

// the homepage
// app.get('/', function (req, res) {
//   db.getLists()
//     .then((lists) => {
//       res.render('index', { lists: lists })
//     })
//     .catch(() => {
//       // TODO: show an error page here
//     })
// })


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


async function testSomething () {
  let tensDig = await randomOrg.getRndNum(6);
  let onesDig = await randomOrg.getRndNum(6);
  
  let d66 = (tensDig * 10) + onesDig;  // testing a d66 roll

  //let testRndNum = 45;
  let mnstLevel = 1;
  
  questDB.getMonsters(mnstLevel, d66)
    .then((result) => {
      console.log("the monster:")
      console.log(result)
    })

}

// global kickoff point
questDB.connect()
  .then(startExpressApp)
  .then(testSomething)
  .catch(bootupSequenceFailed)