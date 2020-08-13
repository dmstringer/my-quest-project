import React, { useState, Fragment } from 'react';
import './App.css';
import Monsters from './components/Monsters';
import Treasures from './components/Treasures';
import EventsAndHazards from './components/EventsAndHazards';
import HelloQuest from './components/HelloQuest';
import AboutProject from './components/AboutProject';


const monsterArray = [{ d66: "", level: "", number: "", monster_name: "", wounds: "", move: "", weapon_skill: "", ballistic_skill: "", strength: "", toughness: "", initiative: "", attacks: "", gold: "", armour: "", damage: "", special_rules: [] }];

const treasureArray = [{ treasure_type: "", treasure_name: "", treasure_cost: "", treasure_description: "" }];

const eventArray = [{ event_n_haz_id: "", event_n_haz_type: "", event_n_haz_name: "", event_n_haz_roll: "", event_n_haz_has_sub: "", event_n_haz_description: "" }];

const monsterDropdownArray = [{ label: "Choose a Level for Monsters...", value: "DEFAULT"}, { label: "One", value: "1"}, { label: "Two", value: "2"}, { label: "Three", value: "3"}, { label: "Four", value: "4"}, { label: "Five", value: "5"}, { label: "Six", value: "6"}, { label: "Seven", value: "7"}, { label: "Eight", value: "8"}, { label: "Nine", value: "9"}, { label: "Ten", value: "10"}];

const treasureDropdownArray = [{ label: "Choose a Type of Treasure...", value: "DEFAULT"}, { label: "Dungeon Room Treasure", value: "DRT"}, { label: "Objective Room Treasure", value: "ORT"}];

const eventDropdownArray = [{ label: "Choose a Type of Event/Hazard...", value: "DEFAULT"}, { label: "Dungeon Event", value: "dungeon event"}, { label: "Settlement Event", value: "settlement event"}, { label: "Travel Hazard", value: "travel hazard"}];

const tabsArray = [
  { label: "My Warhammer Quest Project", value: "TAB_HELLO", key: "1" },
  { label: "Monsters", value: "TAB_MONSTERS", key: "2" },
  { label: "Treasures", value: "TAB_TREASURES", key: "3" },
  { label: "Events and Hazards", value: "TAB_EVENTS", key: "4" },
  { label: "About the Project", value: "TAB_ABOUT", key: "5" }
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
    return (<Monsters
              monsterList={props.monsterList}
              updateMonsterList={props.updateMonsterList}
              monDropdownItems={props.monDropdownItems}
              updateMonDropdownItems={props.updateMonDropdownItems}
              monDropdownValue={props.monDropdownValue}
              updateMonDropdownValue={props.updateMonDropdownValue}
            />);
  } else if (props.activeTab === "TAB_TREASURES") {
    return (<Treasures
              treasureList={props.treasureList}
              updateTreasureList={props.updateTreasureList}
              tresDropdownItems={props.tresDropdownItems}
              updateTresDropdownItems={props.updateTresDropdownItems}
              tresDropdownValue={props.tresDropdownValue}
              updateTresDropdownValue={props.updateTresDropdownValue}
            />);
  } else if (props.activeTab === "TAB_EVENTS") {
    return (<EventsAndHazards 
              eventList={props.eventList}
              updateEventList={props.updateEventList}
              eventDropdownItems={props.eventDropdownItems}
              updateEventDropdownItems={props.updateEventDropdownItems}
              eventDropdownValue={props.eventDropdownValue}
              updateEventDropdownValue={props.updateEventDropdownValue} 
            />);
  } else {
    return (<AboutProject />);
  }
}

function App() {
  const [activeTab, updateTab] = useState("TAB_HELLO");                 //tracking the tabs state
  const [monsterList, updateMonsterList] = useState(monsterArray);
  const [treasureList, updateTreasureList] = useState(treasureArray);
  const [eventList, updateEventList] = useState(eventArray);
  const [monDropdownItems, updateMonDropdownItems] = useState(monsterDropdownArray);
  const [monDropdownValue, updateMonDropdownValue] = useState("DEFAULT");
  const [tresDropdownItems, updateTresDropdownItems] = useState(treasureDropdownArray);
  const [tresDropdownValue, updateTresDropdownValue] = useState("DEFAULT");
  const [eventDropdownItems, updateEventDropdownItems] = useState(eventDropdownArray);
  const [eventDropdownValue, updateEventDropdownValue] = useState("DEFAULT");
  return (
    <Fragment>
      <section className="section">
        <div className="container-fluid">
          <div className="">
            <TabCreator tabsArray={tabsArray} activeTab={activeTab} updateTab={updateTab} />
          </div>
          <section className="container-fluid">
            <ContentPicker                                        //passing all the states and the updaters to ContentPicker
              activeTab={activeTab}                               //pass the active tab
              monsterList={monsterList}                           //passing the monster list state
              updateMonsterList={updateMonsterList}               //the updater for it
              treasureList={treasureList}                         //passing the treasure list state
              updateTreasureList={updateTreasureList}             //the updater
              eventList={eventList}                               //passing the event list state
              updateEventList={updateEventList}                   //updater
              monDropdownItems={monDropdownItems}                 //passing the list of dropdown items for monsters
              updateMonDropdownItems={updateMonDropdownItems}     //updater
              monDropdownValue={monDropdownValue}                 //passing a state for the CURRENT dropdown value in monsters
              updateMonDropdownValue={updateMonDropdownValue}     //updater
              tresDropdownItems={tresDropdownItems}               //passing the list of dropdown items for treasures
              updateTresDropdownItems={updateTresDropdownItems}   //updater
              tresDropdownValue={tresDropdownValue}               //passing a state for the CURRENT dropdown value in treasures
              updateTresDropdownValue={updateTresDropdownValue}   //updater
              eventDropdownItems={eventDropdownItems}             //passing the list of dropdown items for events
              updateEventDropdownItems={updateEventDropdownItems} //updater
              eventDropdownValue={eventDropdownValue}             //passing a state for the CURRENT dropdown value in events
              updateEventDropdownValue={updateEventDropdownValue} //updater
            />
          </section>
        </div>
      </section>
    </Fragment>
  );
}

export default App; 
