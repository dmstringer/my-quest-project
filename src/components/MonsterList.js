import React, { Fragment } from "react";

const MonsterList = () => {
    return (
        <Fragment>
            <h1 className='text-center mt-5'>Monster List</h1>
            <div className="card">
                <div className="card-body d-flex flex-row p-3">
                    <div className="p-0 d-flex flex-column" style={{width: "50px"}}>
                        <div className="p-0 border-top border-bottom">#</div>
                        <div className="p-0">6</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "200px"}}>
                        <div className="p-0 border-top border-bottom">Monster Name</div>
                        <div className="p-0">Giant Bats</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Wnds</div>
                        <div className="p-0 mx-auto">1</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Move</div>
                        <div className="p-0 mx-auto">8</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">WS</div>
                        <div className="p-0 mx-auto">2</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">BS</div>
                        <div className="p-0 mx-auto">2</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Stren.</div>
                        <div className="p-0 mx-auto">2</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Tough.</div>
                        <div className="p-0 mx-auto">4</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Init.</div>
                        <div className="p-0 mx-auto">0</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Attacks</div>
                        <div className="p-0 mx-auto">1</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Gold</div>
                        <div className="p-0 mx-auto">15</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Armour</div>
                        <div className="p-0 mx-auto">-</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "70px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Dmg</div>
                        <div className="p-0 mx-auto">1D6</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "50px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Level</div>
                        <div className="p-0 mx-auto">1</div>
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
    )};

export default MonsterList; 