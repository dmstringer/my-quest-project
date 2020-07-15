import React, { Fragment } from 'react';

function HelloQuest() {
  return (
    <Fragment>
      <div className='container-fluid justify-content-center text-left mt-3'>
        <h1 className= 'm-3 text-center'>Welcome to My Warhammer Quest Project!</h1>
        <div className="d-flex flex-column container col-6">
            <div className="row media mb-2">
                <div className="media-body">
                    <p className='h5'>The purpose of this site is to be a random generator for the Monsters, Treasures and Events in a game of <a className='font-weight-bold' href='https://en.wikipedia.org/wiki/Warhammer_Quest'>Warhammer Quest</a>.</p> 
                    <p className='h5'>Instead of using the charts and tables from the Warhammer Quest Roleplay Book, this app allows you to generate what you need at the click of a button.</p>
                    <p className='h5'>In the tabs above you will find:</p>
                    <div className='container justify-content-center'>
                        <ul className='text-left'>
                            <li className='h5'>
                                On the Monsters and Treasures Tab you can:
                                <ul>
                                    <li className='h5 mt-1'>Generate Dungeon Room and Objective Room Monster Groups by Level</li>
                                    <li className='h5'>Generate Dungeon Room and Objective Room Treasures</li>
                                </ul>
                            </li>
                            <li className='h5'>
                                On the Events and Hazards Tab you can:
                                <ul>
                                    <li className='h5 mt-1'>Generate Dungeon Events while within the dungeon</li>
                                    <li className='h5'>Generate Travel Hazards during their weeks of travel to a Settlement</li>
                                    <li className='h5'>Generate Settlement Events for each day they are staying in a village/town/city</li>
                                </ul>
                            </li>
                            <li className='h5'>On the About Tab you can read why I created this project </li>
                        </ul>
                    </div>
                    <p className='h5'>Thank you for visiting, and if you have an old copy of Warhammer Quest, I hope you find this site useful.</p>
                </div>
                <img className="ml-3 myimage" src="questbox2.jpg" alt="Quest Box" style={ {width: '300px', height: '211px' }} />
            </div>
            {/* <div className="row media mb-2">
                <img className="ml-3" src="minis.jpg" alt="Quest Miniatures Image" style={ {width: '300px'}, {height: '212px' }} />
                <div className="media-body">
                    <p className='h5 mt-3 ml-3'>It was basicly a simulation of a Dungeons-and-Dragons style dungeon crawl, but without a dungeon master controlling the monsters.</p>
                    <p className='h5 ml-3'>The game presented a set of rules for how the monsters behaved and attacked the players. </p>
                    <p className='h5 ml-3'>With many different mechanics to generate and control the monsters, all you needed were some players to sit down with you and play.</p>
                </div>
            </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default HelloQuest;