import React  from 'react';

import showCountries from '../functions/showCountries';
import { countryList } from '../../../utils/functions/utilData';

function Activities({
    data,
    monthOrder,
    changeState
}) {
    return data.activities.map(activity => (
        <div key={activity.id} className="table-row">
            <div className="table-column activity">
                <span>{activity.name}</span>
                <div className="activity-actions">
                    <span
                        className="add"
                        onClick={() => changeState({
                            show: true,
                            method: "AddNoteWarning",
                            activityId: activity.id,
                            activity: activity
                        })}
                    ><i className="fas fa-plus" /></span>
                    {activity.warning ? (
                        <span
                            className="warning"
                            onClick={() => changeState({
                                warning: {
                                    ...activity.warning,
                                    name: activity.name,
                                }
                            })}
                        ><i className="fas fa-exclamation-circle" /></span>
                    ) : null}
                </div>
            </div>
            
            {monthOrder.map(monthId => (
                <div key={monthId} className="table-column">
                    {data.notes[activity.id] && data.notes[activity.id][monthId] ? (
                        <React.Fragment>
                            <div
                                className="circle countries-toggle pointer"
                                onClick={showCountries}
                            >
                                {data.notes[activity.id][monthId].length}
                                <span className="arrow arrow-down"> &#9660;</span>
                            </div>
                            <div className="countries hide">
                                {data.notes[activity.id][monthId].map((note, i) => (
                                    <img
                                        key={i}
                                        className={`circle country${
                                            note.note !== "" ? " pointer" : ""
                                        }${note.note !== "" ? " has-note" : ""}`}
                                        src={`countries/${countryList[note.countryId].flag}`}
                                        alt={countryList[note.countryId].name}
                                        onClick={() => changeState({
                                            note: {
                                                ...note,
                                                name: countryList[note.countryId].name,
                                            }
                                        })}
                                    />
                                ))}
                            </div>
                        </React.Fragment>
                    ) : null}
                </div>
            ))}
        </div>
    ));
}

export default Activities;
