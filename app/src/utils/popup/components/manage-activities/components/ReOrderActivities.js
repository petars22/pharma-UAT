import React from 'react';

function ReOrderActivities({
    state,
    setState,
    activities,
}) {
    return (
        <div id="re-order-activities">
            <h3>Re Order Activities</h3>

            {activities.map(activity => (
                <div key={activity.id} className="activity">
                    {activity.name}
                    <span
                        className="delete"
                        onClick={(e) => {
                            e.stopPropagation();
                            setState({
                                ...state,
                                show: true,
                                method: "Delete",
                                popup: {
                                    title: `activity: '${activity.name}' and all it's notes?`,
                                    endpoint: "activity/deleteActivity",
                                    id: activity.id
                                }
                            });
                        }}
                    ><i className="fas fa-times-circle" /></span>
                </div>
            ))}

            <button
                className="button button-primary"
            >Submit</button>
        </div>
    );
}

export default ReOrderActivities;
