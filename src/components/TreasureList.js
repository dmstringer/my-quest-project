import React, { Fragment } from "react";


function removeArrayItem (oldArray, arrayIndex) {
    const filteredArray = oldArray.slice(0, arrayIndex).concat(oldArray.slice(arrayIndex + 1, oldArray.length))
    return filteredArray;
}

function MakeATreasureBox (props) {
    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="card mt-2" style={{width: "600px"}}>
                    <div className="card-body d-flex flex-row p-3">
                        <div className="p-0 d-flex flex-column" style={{width: "250px"}}>
                            <div className="p-0 border-top border-bottom">Name</div>
                            <div className="p-0 font-weight-bold">{props.treasureList[props.arrayIndex].treasure_name}</div>
                        </div>
                        <div className="p-0 d-flex flex-column" style={{width: "230px"}}>
                            <div className="p-0 border-top border-bottom">Treasure Type</div>
                            <div className="p-0 font-weight-normal">{props.treasureList[props.arrayIndex].treasure_type}</div>
                        </div>
                        <div className="p-0 d-flex flex-column" style={{width: "100px"}}>
                            <div className="p-0 border-top border-bottom mx-auto">Cost</div>
                            <div className="p-0 mx-auto font-weight-normal">{props.treasureList[props.arrayIndex].treasure_cost}</div>
                        </div>
                    </div>
                    <div className="card-body p-0 px-3">
                        {props.treasureList[props.arrayIndex].treasure_description}
                    </div>
                    <div className="card-body p-1 ml-3 text-center">
                        <a href="#" className="card-link btn btn-primary btn-sm"
                            onClick={function() { props.updateTreasureList( removeArrayItem(props.treasureList, props.arrayIndex) ) }}
                        >Remove Treasure</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

function TreasureList (props) {
    const treasureListArr = [...Array(props.treasureList.length).keys()]
    return (
        <Fragment>
            <div className = "d-flex flex-column">
                {treasureListArr.map((idx) => <MakeATreasureBox key={idx} arrayIndex={idx} treasureList={props.treasureList} updateTreasureList={props.updateTreasureList}/>)}
            </div>
        </Fragment>
    )
};

export default TreasureList; 