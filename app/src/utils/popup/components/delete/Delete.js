import React from 'react';
import callApi from '../../../functions/callApi';

function Delete({state, setState, closePopUp}) {
    const handleDelete = async () => {
        console.log(state.popup);
        const res = await callApi(
            "POST",
            state.popup.endpoint,
            {id: state.popup.id}
        );
    
        if(res) setState({
            ...state,
            method: "Success",
            message: res
        });
    }

    return (
        <div className="popup-inner">
            <h3 style={{marginBottom: "20px"}}>Are you sure you want to delete {state.popup.title}</h3>
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle" /></span>

            <button
                className="button button-primary"
                onClick={handleDelete}
            >Yes</button>
            <button
                className="button button-secondary can-close"
                onClick={closePopUp}
            >No</button>
        </div>
    );
}

export default Delete;
