import React from 'react';

function WarningPopup({
    warning,
    changeState
}) {
    return (
        <div className="side-popup">
            <span
                className="close"
                onClick={() => changeState({warning: undefined})}
            ><i className="fas fa-times-circle" /></span>

            <div className="popup-title">
                <h2>{warning.name}</h2>
            </div>
            
            <div>
                <h3 className="">Warning:</h3>
                <div className="">
                    <p>{warning.warning}</p>
                </div>
            </div>

            <div className="popup-header button-container">
                <button
                    className="button button-secondary"
                    onClick={() => changeState({
                        show: true,
                        method: "Delete",
                        popup: {
                            title: `warning for activity: '${warning.name}'`,
                            endpoint: "activity/deleteWarning",
                            id: warning.id
                        }
                    })}
                >Delete</button>

                <button
                    className="button button-primary"
                    onClick={() => {}}
                >Edit</button>
            </div>
        </div>
    );
}

export default WarningPopup;
