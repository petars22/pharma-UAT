import React from 'react';

import callApi from '../../../functions/callApi';

function AddWarning({state, setState, initData, closePopUp}) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        const formElements = e.target.elements;
        const formData = {
            warning: formElements.warning.value,
            activityId: state.activityId,
            brandId: initData.brandId,
            indicationId: initData.indicationId,
            username: initData.username
        };
    
        const res = await callApi(
            "POST",
            "activity/addWarning",
            formData
        );
    
        if(res) setState({
            ...state,
            method: "Success",
            message: res
        });
    }
    
    return (
        <div id="add-warning">
            <h3>Add New Warning</h3>

            <form onSubmit={handleSubmit}>
                <div className="input-container disabled">
                    <label htmlFor="activity">Activity:</label>
                    <select disabled name="activity">
                        <option value={state.activity.id}>{state.activity.name}</option>
                    </select>
                </div>

                <div className="input-container">
                    <label htmlFor="warning">Warning:</label>
                    <textarea name="warning"></textarea>
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

export default AddWarning;
