import React from 'react';

function NotePopup({
    note,
    changeState
}) {
    return (
        <div className="side-popup">
            <span
                className="close"
                onClick={() => changeState({note: undefined})}
            ><i className="fas fa-times-circle" /></span>

            <div className="popup-title">
                <h2>{note.name}</h2>
                <h3>{note.month}/{note.year}</h3>
            </div>

            <div>
                <h3 className="">Note:</h3>
                <div className="">
                    <p>{note.note}</p>
                </div>
            </div>

            <div className="popup-header button-container">
                <button
                    className="button button-secondary"
                    onClick={() => changeState({
                        show: true,
                        method: "Delete",
                        popup: {
                            title: `note: '${note.name}-${note.month}/${note.year}'`,
                            endpoint: "activity/deleteNote",
                            id: note.id
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

export default NotePopup;
