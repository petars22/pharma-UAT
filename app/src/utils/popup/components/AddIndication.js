import React from 'react';

import callApi from '../../functions/callApi';

function AddIndication({state, setState, closePopUp}) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        const formElements = e.target.elements;
        const formData = {
            name: formElements.name.value,
            brandId: state.brandId
        };

        const res = await callApi(
            "POST",
            "administration/createIndication",
            formData
        );

        if(res && res.error === undefined) setState({
            ...state,
            method: "Success",
            message: res
        });
    }

    return (
        <div id="add-indication" className="popup-inner">
            <h3>Add Indication</h3>
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle can-close" /></span>
            
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                
                <input
                    type="submit"
                    className="button button-primary"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default AddIndication;
