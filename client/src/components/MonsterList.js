import React, { Fragment } from "react";

function MakeTheSpecialsList (props) {
    return (
        <li className="list-group-item p-1 ml-3" style={{whiteSpace: 'pre-wrap'}}>
            <span className="font-weight-bold">{props.thisMonster.special_rules[props.arrayIndex].rule_name}</span> {props.thisMonster.special_rules[props.arrayIndex].rule_description}
        </li>
    )
}

function removeArrayItem (oldArray, arrayIndex) {
    const filteredArray = oldArray.slice(0, arrayIndex).concat(oldArray.slice(arrayIndex + 1, oldArray.length))
    return filteredArray;
}

function MakeAMonsterBox (props) {
    const specialsListArr = [...Array(props.monsterList[props.arrayIndex].special_rules.length).keys()]
    return (
        <Fragment>
            <div className="card mb-2 border border-dark" style={{width: "1130px"}}>
                <div className="card-body d-flex flex-row p-3">
                    <div className="p-0 d-flex flex-column" style={{width: "50px"}}>
                        <div className="p-0 border-top border-bottom">#</div>
                        <div className="p-0 font-weight-bold">{props.monsterList[props.arrayIndex].number}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "180px"}}>
                        <div className="p-0 border-top border-bottom">Monster Name</div>
                        <div className="p-0 font-weight-bold">{props.monsterList[props.arrayIndex].monster_name}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Wnds</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].wounds}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Move</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].move}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "60px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">WS</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].weapon_skill}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "60px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">BS</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].ballistic_skill}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "90px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Strength</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].strength}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Tough.</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].toughness}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Init.</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].initiative}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Attacks</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].attacks}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Gold</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].gold}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Armour</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].armour}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "110px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Dmg</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].damage}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "50px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Level</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.monsterList[props.arrayIndex].level}</div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {specialsListArr.map((idx) => <MakeTheSpecialsList key={idx} arrayIndex={idx} thisMonster={props.monsterList[props.arrayIndex]} />)}
                </ul>
                <div className="card-body p-1 ml-3 text-center">
                    <a href="# " className="card-link btn btn-primary btn-sm"
                        onClick={function() { props.updateMonsterList( removeArrayItem(props.monsterList, props.arrayIndex) ) }}
                    >Remove Monster</a>
                </div>
            </div>
        </Fragment>
    )
};

function MonsterList (props) {
    const monsterListArr = [...Array(props.monsterList.length).keys()]
    return (
        <Fragment>
            <div className = "">
                {monsterListArr.map((idx) => <MakeAMonsterBox key={idx} arrayIndex={idx} monsterList={props.monsterList} updateMonsterList={props.updateMonsterList}/>)}
            </div>
        </Fragment>
    )
};

export default MonsterList; 