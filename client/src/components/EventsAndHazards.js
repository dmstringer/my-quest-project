import React, { Fragment } from 'react';

const eventArray = [{ event_n_haz_id: "", event_n_haz_type: "", event_n_haz_name: "", event_n_haz_roll: "", event_n_haz_has_sub: "", event_n_haz_description: "", event_n_haz_subs_visible: "", event_n_haz_subs_descriptions: "" }];

function newEventArray (oldArray, data) {
  let newArray = oldArray.concat(data);
  if (newArray[0].event_n_haz_id === "") {
    newArray.shift();
  }
  return newArray;
}

function removeArrayItem (oldArray, arrayIndex) {
    const filteredArray = oldArray.slice(0, arrayIndex).concat(oldArray.slice(arrayIndex + 1, oldArray.length))
    return filteredArray;
}

function addTheSubsToEvent (returnedEvent, subsReturned) {
    let concatdSubs = "";
    let eventToMod = returnedEvent;
    subsReturned.sort((a, b) => (a.event_n_haz_subs_order > b.event_n_haz_subs_order) ? 1 : -1);
    for (let i = 0; i < subsReturned.length; i++) {
        if (subsReturned[i].event_n_haz_subs_order === 1) {
            concatdSubs = subsReturned[i].event_n_haz_subs_roll + " --- " + subsReturned[i].event_n_haz_subs_description;
        } else {
            concatdSubs = concatdSubs + "\n" + subsReturned[i].event_n_haz_subs_roll + " --- " + subsReturned[i].event_n_haz_subs_description;
        }
    };
    eventToMod.event_n_haz_description = eventToMod.event_n_haz_description + "\n(With some Events/Hazards, it's best for the players NOT to see the accompanying sub-table before rolling. --Click below to toggle visibility--)";
    eventToMod.event_n_haz_subs_visible = false;
    eventToMod.event_n_haz_subs_descriptions = concatdSubs;
    return eventToMod;
};

function EventList (props) {
    const eventListArr = [...Array(props.eventList.length).keys()]
    return (
        <Fragment>
            <div className = "">
                {eventListArr.map((idx) => <MakeAnEventBox key={idx} arrayIndex={idx} eventList={props.eventList} updateEventList={props.updateEventList}/>)}
            </div>
        </Fragment>
    )
};

function MakeAnEventBox (props) {
    return (
        <Fragment>
            <div className="card mb-2 border border-dark" style={{width: "1130px"}}>
                <div className="card-body d-flex flex-row justify-content-center p-3">
                    <div className="p-0 d-flex flex-column" style={{width: "200px"}}>
                        <div className="p-0 border-top border-bottom">Type</div>
                        <div className="p-0 font-weight-bold">{props.eventList[props.arrayIndex].event_n_haz_type}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "300px"}}>
                        <div className="p-0 border-top border-bottom">Event Name</div>
                        <div className="p-0 font-weight-bold">{props.eventList[props.arrayIndex].event_n_haz_name}</div>
                    </div>
                    <div className="p-0 d-flex flex-column" style={{width: "100px"}}>
                        <div className="p-0 border-top border-bottom mx-auto">Roll</div>
                        <div className="p-0 mx-auto font-weight-bold">{props.eventList[props.arrayIndex].event_n_haz_roll}</div>
                    </div>
                </div>
                <div className="card-body p-1 ml-3" style={{whiteSpace: 'pre-wrap'}}>
                    {props.eventList[props.arrayIndex].event_n_haz_description}
                </div>
                <ul className="list-group list-group-flush"
                    onClick={function clickGetEventButton() {
                        let eventListToReturn = JSON.parse(JSON.stringify(props.eventList));
                        if (eventListToReturn[props.arrayIndex].event_n_haz_subs_visible === false) {
                            eventListToReturn[props.arrayIndex].event_n_haz_subs_visible = true;
                        } else {
                            eventListToReturn[props.arrayIndex].event_n_haz_subs_visible = false;
                        }
                        props.updateEventList(eventListToReturn)
                    }}
                >
                    <li className={`${props.eventList[props.arrayIndex].event_n_haz_subs_visible === false ? 'list-group-item p-1 ml-3 invisible' : 'list-group-item p-1 ml-3 visible'}`} style={{whiteSpace: 'pre-wrap'}}>
                        {props.eventList[props.arrayIndex].event_n_haz_subs_descriptions}
                    </li>
                </ul>
                <div className="card-body p-1 ml-3 text-center">
                    <a href="# " className="card-link btn btn-primary btn-sm"
                        onClick={function() { props.updateEventList( removeArrayItem(props.eventList, props.arrayIndex) ) }}
                    >Remove Event/Hazard</a>
                </div>
            </div>
        </Fragment>
    )
};

function EventsAndHazards(props) {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='container col justify-content-center border-right'>
            <div className='container text-center mt-3 d-flex justify-content-center'>
              <select className="custom-select" 
                      style={{width: "300px"}} 
                      value={props.eventDropdownValue} 
                      id='eventType'
                      onChange={e => props.updateEventDropdownValue(e.currentTarget.value)}
              >
                {props.eventDropdownItems.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <a className="btn btn-primary px-2 mx-2" href="# " role="button"
                onClick={function clickGetEventButton() {
                    if (document.getElementById('eventType').value === 'DEFAULT') {
                      alert("Please choose an Event Type!");
                    } else {
                      let eventType = document.getElementById('eventType').value;
                      // fetch(`http://localhost:7878/api/getevent/${eventType}`)
                      fetch(`/api/getevent/${eventType}`)
                      .then(function(response) {return response.json()})
                      .then(function(data) { 
                        let returnedEvent = data;
                        let moddedReturnedEvent = {};
                        if (returnedEvent.event_n_haz_has_sub) {
                            // fetch(`http://localhost:7878/api/getsubs/${eventType}.${returnedEvent.event_n_haz_id}`)
                            fetch(`/api/getsubs/${eventType}.${returnedEvent.event_n_haz_id}`)
                            .then(function(response) {return response.json()})
                            .then(function(data) {
                                let subsReturned = data;
                                moddedReturnedEvent = addTheSubsToEvent(returnedEvent, subsReturned);
                                props.updateEventList( newEventArray(props.eventList, moddedReturnedEvent));
                            })
                        } else {
                            returnedEvent.event_n_haz_subs_descriptions = "";
                            moddedReturnedEvent = returnedEvent;
                            props.updateEventList( newEventArray(props.eventList, moddedReturnedEvent));
                        }
                        })
                    };
                }}
                >Generate an Event/Hazard</a>
              <a className="btn btn-danger px-2" href="# " role="button"
                onClick={function clickClearEventButton(){ props.updateEventList( eventArray );
                }}>Clear all Events/Hazards</a>
            </div>
            <div className='container justify-content-center'>
              <h1 className='text-center mt-3 ml-3'>Events/Hazards List</h1>
              <EventList eventList={props.eventList} updateEventList={props.updateEventList} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EventsAndHazards;