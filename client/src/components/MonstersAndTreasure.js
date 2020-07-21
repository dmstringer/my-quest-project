import React, { Fragment } from 'react';
import MonsterList from './MonsterList.js';
import TreasureList from './TreasureList.js';

const monsterArray = [{ d66: "", level: "", number: "", monster_name: "", wounds: "", move: "", weapon_skill: "", ballistic_skill: "", strength: "", toughness: "", initiative: "", attacks: "", gold: "", armour: "", damage: "", special_rules: [] }];

const treasureArray = [{ treasure_type: "", treasure_name: "", treasure_cost: "", treasure_description: "" }];

function newMonsterArray (oldArray, data) {
  let newArray = oldArray.concat(data);
  if (newArray[0].d66 === "") {
    newArray.shift();
  }
  return newArray;
}

function newTreasureArray (oldArray, data) {
  let newArray = oldArray.concat(data);
  if (newArray[0].treasure_type === "") {
    newArray.shift();
  }
  return newArray;
}

function MonstersAndTreasure (props) {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='container col justify-content-center border-right'>
            <div className='container text-center mt-3 d-flex justify-content-center'>
              <select className="custom-select" 
                      style={{width: "300px"}} 
                      value={props.monDropdownValue} 
                      id='monsterLevel'
                      onChange={e => props.updateMonDropdownValue(e.currentTarget.value)}
              >
                {props.monDropdownItems.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <a className="btn btn-primary mx-2" href="# " role="button"
                onClick={function clickGetMonsterButton(){
                    if (document.getElementById('monsterLevel').value === 'DEFAULT') {
                      alert("Please choose a Monster Level!");
                    } else {
                      let monsterLevel = document.getElementById('monsterLevel').value;
                      //fetch(`http://localhost:7878/api/getmonster/${monsterLevel}`)
                      fetch(`/api/getmonster/${monsterLevel}`)
                      .then(function(response) {return response.json()})
                      .then(function(data) { 
                        props.updateMonsterList( newMonsterArray(props.monsterList, data))})
                    }
                }}>Dungeon Room Monsters</a>
              <a className="btn btn-warning" href="# " role="button"
                onClick={function clickGetObjMonstersButton(){
                    if (document.getElementById('monsterLevel').value === 'DEFAULT') {
                      alert("Please choose a Monster Level!");
                    } else {
                      let monsterLevel = document.getElementById('monsterLevel').value;
                      // fetch(`http://localhost:7878/api/getobjectiveroom/${monsterLevel}`)
                      fetch(`/api/getobjectiveroom/${monsterLevel}`)
                      .then(function(response) {return response.json()})
                      .then(function(data) { 
                        props.updateMonsterList( newMonsterArray(props.monsterList, data))})
                    }
                }}>Objective Room Monsters</a>
              <a className="btn btn-danger mx-2" href="# " role="button"
                onClick={function clickClearMonsterButton(){ props.updateMonsterList( monsterArray );
                }}>Clear all Monsters</a>
            </div>
            <div className='container justify-content-center'>
              <h1 className='text-center mt-3 ml-3'>Monster List</h1>
              <MonsterList monsterList={props.monsterList} updateMonsterList={props.updateMonsterList} />
            </div>
          </div>
          <div className='container col-5 justify-content-center'>
            <div className='container text-center mt-3 d-flex justify-content-center'>
              <select className="custom-select" 
                      style={{width: "300px"}} 
                      value={props.tresDropdownValue} 
                      id='treasureType'
                      onChange={e => props.updateTresDropdownValue(e.currentTarget.value)}
              >
                {props.tresDropdownItems.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <a className="btn btn-primary px-2 mx-2" href="# " role="button"
                onClick={function clickGetTreasureButton(){
                    if (document.getElementById('treasureType').value === 'DEFAULT') {
                      alert("Please choose a Treasure Type!");
                    } else {
                      let roomtype = document.getElementById('treasureType').value;
                      //fetch(`http://localhost:7878/api/gettreasure/${roomtype}`)
                      fetch(`/api/gettreasure/${roomtype}`)
                      .then(function(response) {return response.json()})
                      .then(function(data) { 
                        props.updateTreasureList( newTreasureArray(props.treasureList, data))})
                    }
                }}
              >Generate a Treasure</a>
              <a className="btn btn-danger px-2" href="# " role="button"
                onClick={function clickClearTreasuresButton(){ props.updateTreasureList( treasureArray );
                }}>Clear all Treasures</a>
            </div>
            <div className='container justify-content-center'>
              <h1 className='text-center mt-3'>Treasure List</h1>
              <TreasureList treasureList={props.treasureList} updateTreasureList={props.updateTreasureList} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MonstersAndTreasure; 
