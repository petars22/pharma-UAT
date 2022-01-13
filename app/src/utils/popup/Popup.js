import React from 'react';
import components from './components/components';
import './Popup.css';

function Popup(props) {
    const {
        state
    } = props;

    const closePopUp = (e) => {
        e.stopPropagation();
        
        if(e.target.classList.contains("can-close")) props.setState({
            ...state,
            show: false,
            method: ""
        });
    }

    const renderInnerPopup = (method) => {
        const Component = components[method];

        if(Component) return (
            <Component
                {...props}
                closePopUp={closePopUp}
            />
        );
        else return null;
    }

    return (
        <div
            id="popup"
            className="popup can-close"
            style={{
                display: state.show ? "flex" : "none"
            }}
        >
            {renderInnerPopup(state.method)}
        </div>
    );
}

export default Popup;
