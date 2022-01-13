import React from 'react';

import callApi from '../../../../functions/callApi';

function AddEditActivity({
    state,
    setState,
    initData,
    activity
}) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        const formElements = e.target.elements;
        const formData = {
            name: formElements.name.value,
            brandId: initData.brandId,
            indicationId: initData.indicationId,
            username: initData.username
        };

        const res = await callApi(
            "POST",
            "activity/createActivity",
            formData
        );
    
        if(res) setState({
            ...state,
            method: "Success",
            message: res
        });
    }

    return (
        <div id="add-edit-activity">
            <h3>Create Activity</h3>
            
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={activity ? activity.name : null} />
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

export default AddEditActivity;
