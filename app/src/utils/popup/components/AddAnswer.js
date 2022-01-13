import React, { useEffect, useRef, useState } from 'react';
import getAnswers from '../../../components/knowledge-repository/components/question-answer/functions/getAnswers';
import CustomSelect from '../../components/CustomSelect';

import callApi from '../../functions/callApi';
import { countryList } from '../../functions/utilData';

const keys = Object.keys(countryList);
let today = new Date();
today = `${today.getFullYear()}-${today.getMonth()}-${
    today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;

function AddAnswer({state, setState, initData, closePopUp}) {
    const [answers, setAnswers] = useState([]);
    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const formData = new FormData(e.target);
        formData.append("path", "knowledge-repository/addAnswer");
        formData.append("brandId", initData.brandId);
        formData.append("indicationId", initData.indicationId);
        formData.append("username", initData.username);

        console.log(formData);
    
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

    useEffect(() => {
        getAnswers(
            initData.brandId,
            initData.indicationId,
            {},
            (answers) => setAnswers(answers.map(a => {
                return {id: a.id, text: a.question}
            }))
        );
    }, []);

    return (
        <div id="add-answer" className="popup-inner">
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle can-close" /></span>

            <h3>Add New Answer</h3>
            
            <form onSubmit={handleSubmit}  encType="multipart/form-data">
                <div className="input-container">
                    <label htmlFor="question">Question:</label>
                    <textarea name="question"></textarea>
                </div>

                <div className="input-container">
                    <label htmlFor="answer">Answer:</label>
                    <textarea name="answer"></textarea>
                </div>

                <div className="input-container">
                    <label htmlFor="answerDate">Answer Date:</label>
                    <input
                        type="date"
                        name="answerDate"
                        defaultValue={today}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="origin">Name of Agency/country:</label>
                    <select name="origin" defaultValue="">
                        <option disabled value="">Select Origin</option>
                        {keys.map(key => (
                            <option key={key} value={key}>{countryList[key].name}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container">
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" />
                </div>

                <div className="input-container">
                    <label htmlFor="similarQuestion">Similar Question:</label>

                    <CustomSelect
                        items={answers}
                        inputRef={inputRef}
                    />

                    <input
                        ref={inputRef}
                        type="text"
                        name="similarQuestion"
                        style={{display: "none"}}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="source">Source:</label>
                    <input
                        type="file"
                        name="files"
                        multiple={true}
                    />
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

export default AddAnswer;
