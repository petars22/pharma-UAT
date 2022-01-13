import React, { useEffect, useState } from 'react';

import Sources from './Sources';

import callApi from '../../../../../utils/functions/callApi';

function AnswerPopup({answerId, setAnswerId, downloadSource}) {
    const [answer, setAnswer] = useState(undefined);

    useEffect(() => {
        const getAnswer = async (answerId) => {
            const res = await callApi(
                "GET",
                `knowledgeRepository/getAnswerById?id=${answerId}`
            );
            
            if(res) setAnswer(res[0]);
        }

        getAnswer(answerId);
    }, [answerId]);

    return (
        <div id="answer-info" className="side-popup">
            <span
                className="close"
                onClick={() => setAnswerId(undefined)}
            ><i className="fas fa-times-circle" /></span>

            {answer ? (
                <React.Fragment>
                    <div className="popup-title">
                        <h2>Similar Question</h2>
                    </div>
                    
                    <div>
                        <h3>Question:</h3>
                        <p>{answer.question}</p>
                    </div>

                    <div>
                        <h3>Answer</h3>
                        <p>{answer.answer}</p>
                    </div>

                    <div>
                        <h3>Answer Date:</h3>
                        <p>{answer.answer_date}</p>
                    </div>

                    <div>
                        <h3>Name of Agency/Country:</h3>
                        <p>{answer.origin}</p>
                    </div>

                    <div>
                        <h3>Category:</h3>
                        <p>{answer.category}</p>
                    </div>

                    <div>
                        <h3>Sources</h3>
                        
                        <Sources
                            sources={answer.sources}
                            downloadSource={downloadSource}
                        />
                    </div>
                </React.Fragment>
            ) : null}
        </div>
    );
}

export default AnswerPopup
