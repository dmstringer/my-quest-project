import React, { useState, Fragment } from 'react';
import './App.css';
import MonstersAndTreasure from './components/MonstersAndTreasure';
import EventsAndHazards from './components/EventsAndHazards';
import HelloQuest from './components/HelloQuest';
//import cloneDeep from 'lodash/cloneDeep';

const monsterArray = [{ d66: "", level: "", number: "", monster_name: "", wounds: "", move: "", weapon_skill: "", ballistic_skill: "", strength: "", toughness: "", initiative: "", attacks: "", gold: "", armour: "", damage: "", special_rules: [] }];

const treasureArray = [{ treasure_type: "", treasure_name: "", treasure_cost: "", treasure_description: "" }];

const eventArray = [{ event_n_haz_id: "", event_n_haz_type: "", event_n_haz_name: "", event_n_haz_roll: "", event_n_haz_has_sub: "", event_n_haz_description: "" }];

const tabsArray = [
  { label: "Hello Quest", value: "TAB_HELLO", key: "1" },
  { label: "Monsters and Treasure", value: "TAB_MONSTERS", key: "2" },
  { label: "Events and Hazards", value: "TAB_EVENTS", key: "3" },
];

function TabCreator (props) {
  return (
    <ul className='nav nav-tabs nav-justified'>
      {props.tabsArray.map(({ label, value, key }) => (
        <li
          className='nav-item' key={key}
          onClick={() => { props.updateTab(value); }}
        >
          <a href="# " className={`${value === props.activeTab ? 'font-weight-bold nav-link active' : 'nav-link'}`} style={{fontSize: "x-large"}}>{label}</a>
        </li>
      ))}
    </ul>
  );
}

function ContentPicker (props) {
  if (props.activeTab === "TAB_HELLO") {
    return (<HelloQuest />);
  } else if (props.activeTab === "TAB_MONSTERS") {
    return (<MonstersAndTreasure
              monsterList={props.monsterList}
              updateMonsterList={props.updateMonsterList}
              treasureList={props.treasureList}
              updateTreasureList={props.updateTreasureList}
            />);
  } else if (props.activeTab === "TAB_EVENTS") {
    return (<EventsAndHazards 
              eventList={props.eventList}
              updateEventList={props.updateEventList}    
            />);
  } else {
    return (<div> Content of Tab {props.activeTab}</div>);
  }
}

function App() {
  const [activeTab, updateTab] = useState("TAB_HELLO");                 //tracking the tabs state
  const [monsterList, updateMonsterList] = useState(monsterArray);
  const [treasureList, updateTreasureList] = useState(treasureArray);
  const [eventList, updateEventList] = useState(eventArray);
  return (
    <Fragment>
      <section className="section">
        <div className="container-fluid">
          <div className="">
            <TabCreator tabsArray={tabsArray} activeTab={activeTab} updateTab={updateTab} />
          </div>
          <section className="container-fluid">
            <ContentPicker                                      //passing all the states and the updaters to ContentPicker
              activeTab={activeTab}                             //pass the active tab
              monsterList={monsterList}
              updateMonsterList={updateMonsterList}
              treasureList={treasureList}
              updateTreasureList={updateTreasureList}
              eventList={eventList}
              updateEventList={updateEventList}
            />
          </section>
        </div>
      </section>
    </Fragment>
  );
}

export default App; 
