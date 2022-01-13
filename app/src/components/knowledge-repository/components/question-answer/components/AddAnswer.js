import React, { useState, useEffect, useRef } from 'react';

import CustomSelect from '../../../../../utils/components/CustomSelect';

import getAnswers from '../functions/getAnswers';
import callApi from '../../../../../utils/functions/callApi';
import { countryList } from '../../../../../utils/functions/utilData';

const keys = Object.keys(countryList);
let today = new Date();
today = `${today.getFullYear()}-${today.getMonth()}-${
    today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;

function AddAnswer({initData, changeState, refresh}) {
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
    
        const res = await callApi(
            "POST",
            "shared/uploadFilesAndInsertData",
            formData,
        );
    
        if(res) changeState({
            show: true,
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

    useEffect(() => {
        if(refresh) getAnswers(
            initData.brandId,
            initData.indicationId,
            {},
            (answers) => setAnswers(answers.map(a => {
                return {id: a.id, text: a.question}
            }))
        );
    }, [refresh]);

    return (
        <div id="add-answer" className="table-row hide">
            <form
                style={{
                    display: "flex",
                    width: "100%"
                }}
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div className="table-column question">
                    <div className="input-container">
                        <textarea name="question"></textarea>
                    </div>
                </div>
                <div className="table-column answer">
                    <div className="input-container">
                        <textarea name="answer"></textarea>
                    </div>
                </div>
                <div className="table-column date">
                    <div className="input-container">
                        <input
                            type="date"
                            name="answerDate"
                            defaultValue={today}
                        />
                    </div>
                </div>
                <div className="table-column agency-country">
                    <div className="input-container">
                        <select name="origin" defaultValue="">
                            <option disabled value="">Select Origin</option>
                            {keys.map(key => (
                                <option key={key} value={key}>{countryList[key].name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="table-column category">
                    <div className="input-container">
                        <input type="text" name="category" />
                    </div>
                </div>

                <div className="table-column similar-question">
                    <div className="input-container">

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
                </div>

                <div className="table-column sources">
                    <div className="input-container" style={{marginBottom: "0px"}}>
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
                </div>
            </form>

        </div>
    );
}

export default AddAnswer;
