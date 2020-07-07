import React, { useState, Fragment } from 'react';
import './App.css';
import MonsterList from './components/MonsterList';

const monsterArray = 
  { level: "", 
    d66: "", 
    monsters: [
    { number: "", monster_name: "", wounds: "", move: "", weapon_skill: "", ballistic_skill: "", strength: "", toughness: "", initiative: "", attacks: "", gold: "", armour: "", damage: "", special_rules: [{rule_name: "", rule_description: ""}] }
    ] 
  };


function App() {
  const [monsterList, updateMonsterList] = useState(monsterArray);
  return (
    <Fragment>
      <div className='container'>
        <div className='container text-center mt-3'>
          <a className="btn btn-primary" href="#" role="button"
            onClick={function clickGetMonsterButton(){
                fetch("http://localhost:7878/api/getmonster/1")
                .then(function(response) {return response.json()})
                .then(data => updateMonsterList(data))
            }}
          >Generate a Monster</a>
        </div>
        <MonsterList monsterList={monsterList} updateMonsterList={updateMonsterList} />
      </div>
    </Fragment>
  );
}

export default App; 
