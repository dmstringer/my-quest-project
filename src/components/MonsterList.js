import React, { Fragment } from "react";
//const clone = require('rfdc')()
//const _ = require('lodash');

function MakeAMonsterBox (props) {
    return (
        <Fragment>
            <div className="card">
                <div className="card-body d-flex flex-row p-3">
                    <div className="p-0 d-flex flex-column" style={{width: "50px"}}>
                        <div className="p-0 border-top border-bottom">#</div>
                        <div className="p-0">{props.monsterList.monsters[props.arrayIndex].number}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "200px"}}>
                        <div className="p-0 border-top border-bottom">Monster Name</div>
                        <div className="p-0">{props.monsterList.monsters[props.arrayIndex].monster_name}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Wnds</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].wounds}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Move</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].move}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">WS</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].weapon_skill}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">BS</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].ballistic_skill}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Stren.</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].strength}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Tough.</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].toughness}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Init.</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].initiative}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Attacks</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].attacks}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Gold</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].gold}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Armour</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].armour}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "90px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Dmg</div>
                        <div className="p-0 mx-auto">{props.monsterList.monsters[props.arrayIndex].damage}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "50px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Level</div>
                        <div className="p-0 mx-auto">{props.monsterList.level}</div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-1 ml-3">Cras justo odio</li>
                    <li className="list-group-item p-1 ml-3">Dapibus ac facilisis in</li>
                    <li className="list-group-item p-1 ml-3">Vestibulum at eros</li>
                </ul>
                <div className="card-body p-1 ml-3">
                    <a href="#" className="card-link">Delete Monster</a>
                </div>
            </div>
        </Fragment>
    )
};


function MonsterList (props) {
    const monsterListArr = [...Array(props.monsterList.monsters.length).keys()]
    console.log(props.monsterList)
    return (
        <Fragment>
            <h1 className='text-center mt-5'>Monster List</h1>
            <div className = "">
                {monsterListArr.map((idx) => <MakeAMonsterBox key={idx} arrayIndex={idx} monsterList={props.monsterList} updateMonsterList={props.updateMonsterList}/>)}
            </div>
        </Fragment>
    )
};

export default MonsterList; 