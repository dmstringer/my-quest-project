import React, { Fragment } from 'react';
import MonsterList from './MonsterList.js';
import TreasureList from './TreasureList.js';
//import cloneDeep from 'lodash/cloneDeep';

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

function MonstersAndTreasure(props) {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='container col justify-content-center border-right'>
            <div className='container text-center mt-3 d-flex justify-content-center'>
              <select className="custom-select" style={{width: "300px"}} defaultValue={'DEFAULT'} id='monsterLevel'>
                <option value="DEFAULT">Choose a Level for Monsters...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
                <option value="9">Nine</option>
                <option value="10">Ten</option>
              </select>
              <a className="btn btn-primary px-2 mx-2" href="# " role="button"
                onClick={function clickGetMonsterButton(){
                    if (document.getElementById('monsterLevel').value === 'DEFAULT') {
                      alert("Please choose a Monster Level!");
                    } else {
                      let monsterLevel = document.getElementById('monsterLevel').value;
                      fetch(`http://localhost:7878/api/getmonster/${monsterLevel}`)
                      .then(function(response) {return response.json()})
                      .then(function(data) { 
                        props.updateMonsterList( newMonsterArray(props.monsterList, data))})
                    }
                }}>Generate a Monster</a>
              <a className="btn btn-danger px-2" href="# " role="button"
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
              <select className="custom-select" style={{width: "300px"}} defaultValue={'DEFAULT'} id='treasureType'>
                <option value="DEFAULT">Choose a Type of Treasure...</option>
                <option value="DRT">Dungeon Room Treasure</option>
                <option value="ORT">Objective Room Treasure</option>
              </select>
              <a className="btn btn-primary px-2 mx-2" href="# " role="button"
                onClick={function clickGetTreasureButton(){
                    if (document.getElementById('treasureType').value === 'DEFAULT') {
                      alert("Please choose a Treasure Type!");
                    } else {
                      let roomtype = document.getElementById('treasureType').value;
                      fetch(`http://localhost:7878/api/gettreasure/${roomtype}`)
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
