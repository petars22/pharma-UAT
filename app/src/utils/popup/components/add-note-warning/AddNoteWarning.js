import React, { useState }  from 'react';
import AddNote from './AddNote';
import AddWarning from './AddWarning';

const components = {
    AddNote,
    AddWarning
};

function AddNoteWarning(props) {
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
        <div className="popup-inner">
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle can-close" /></span>

            {component === null ? (
                <div>
                    <span className="add-note"
                        data-component="AddNote"
                        onClick={changeComponent}
                    >Add Note</span>
                    <br />
                    <span className="add-warning"
                        data-component="AddWarning"
                        onClick={changeComponent}
                    >Add Warning</span>
                </div>
            ) : (
                <span
                    className="back"
                    onClick={() => setComponent(null)}
                ><i className="far fa-arrow-alt-circle-left" /></span>
            )}

            {renderComponent(component)}
        </div>
    )
}

export default AddNoteWarning;
