import React from 'react'

import getTitleFromRtfFile from './functions/getTitleFromRtfFile';
import processTitleData from './functions/processTitleData';
import readFileSync from '../../../functions/readFileSync';
import callApi from '../../../functions/callApi';

let today = new Date();
today = `${today.getFullYear()}-${today.getMonth()}-${
    today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;

function AddDocuments({initData, state, setState, closePopUp}) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = e.target.elements.files.files;

        for(let i = 0; i < files.length; i++) {
            const formData = new FormData();
            const content = await readFileSync(files[i]);
            const data = processTitleData(getTitleFromRtfFile(content));

            formData.append("files", e.target.elements.files.files[0]);
            formData.append("path", "knowledge-repository/addDocument");
            formData.append("brandId", initData.brandId);
            formData.append("indicationId", initData.indicationId);
            formData.append("username", initData.username);
            formData.append("title", data.title);
            formData.append("cohort", data.cohort);
            formData.append("analysisSet", data.analysisSet);
            formData.append("endpoint", data.endpoint);
            formData.append("dataCutoffDate", e.target.elements.dataCutoffDate.value);
            
            const res = await callApi(
                "POST",
                "shared/uploadFilesAndInsertData",
                formData,
            );
        
            if(res) setState({
                ...state,
                method: "Success",
                message: res
            });
        }
    }

    return (
        <div id="add-documents" className="popup-inner">
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle can-close" /></span>

            <h3>Add New Answer</h3>
            
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="dataCutoffDate">Data Cutoff Date:</label>
                    <input
                        type="date"
                        name="dataCutoffDate"
                        defaultValue={today}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="files">Choose documents:</label>
                    <input
                        type="file"
                        name="files"
                        multiple={true}
                        //onChange={handleFileChange}
                    />
                </div>
                
                <input
                    type="submit"
                    className="button button-primary"
                    value="Submit"
                />
            </form>
            
        </div>
    )
}

export default AddDocuments
