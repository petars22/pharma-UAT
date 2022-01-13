import React from 'react';

import callApi from '../../../functions/callApi';

function AddNote({state, setState, initData}) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        const formElements = e.target.elements;
        const formData = {
            countryId: formElements.country.value,
            month: formElements.date.value.split("-")[1],
            year: formElements.date.value.split("-")[0],
            note: formElements.note.value,
            activityId: state.activityId,
            brandId: initData.brandId,
            indicationId: initData.indicationId,
            username: initData.username
        };
    
        const res = await callApi(
            "POST",
            "activity/addNote",
            formData
        );
    
        if(res) setState({
            ...state,
            method: "Success",
            message: res
        });
    }

    return (
        <div id="add-note">
            <h3>Add New Note</h3>

            <form onSubmit={handleSubmit}>
                <div className="input-container disabled">
                    <label htmlFor="country">Country:</label>
                    <select disabled name="country">
                        <option value={initData.country.id}>{initData.country.name}</option>
                    </select>
                </div>

                <div className="input-container">
                    <label htmlFor="date">Date:</label>
                    <input type="month" name="date" />
                </div>

                <div className="input-container">
                    <label htmlFor="note">Note:</label>
                    <textarea name="note"></textarea>
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

export default AddNote;
