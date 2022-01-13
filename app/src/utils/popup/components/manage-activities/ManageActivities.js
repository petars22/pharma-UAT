import React, { useState } from 'react';

import AddEditActivity from './components/AddEditActivity';
import ReOrderActivities from './components/ReOrderActivities';

const components = {
    AddEditActivity,
    ReOrderActivities
}

function ManageActivities(props) {
    const closePopUp = props.closePopUp;
    const [component, setComponent] = useState(null);

    const changeComponent = (e) => {
        setComponent(e.target.dataset.component);
    }

    const renderComponent = (component) => {
        const Component = components[component];

        if(Component) return <Component
            {...props}
        />

        else return null;
    }
    return (
        <div id="manage-activities" className="popup-inner">
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle can-close" /></span>

            {component === null ? (
                <div>
                    <span className="add-edit"
                        data-component="AddEditActivity"
                        onClick={changeComponent}
                    >Add Activity</span>
                    <br />
                    <span className="re-oder"
                        data-component="ReOrderActivities"
                        onClick={changeComponent}
                    >Re Order Activities</span>
                </div>
            ) : (
                <span
                    className="back"
                    onClick={() => setComponent(null)}
                ><i className="far fa-arrow-alt-circle-left" /></span>
            )}

            {renderComponent(component)}
        </div>
    );
}

export default ManageActivities;
