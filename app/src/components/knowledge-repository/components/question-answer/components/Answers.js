import React, { useEffect, useRef, useState } from 'react';

import AddAnswer from './AddAnswer';
import SimilarQuestion from './SimilarQuestion';
import Sources from './Sources';

import downloadFile from '../../../../../utils/functions/downloadFile';
import { countryList } from '../../../../../utils/functions/utilData';
import getAnswers from '../functions/getAnswers';
import AnswerPopup from './AnswerPopup';

function Answers({
    initData,
    filters,
    refresh,
    changeState
}) {
    const [answers, setAnswers] = useState([]);
    const [answerId, setAnswerId] = useState(undefined);
    const inputRef = useRef(null);

    useEffect(() => {
        getAnswers(
            initData.brandId,
            initData.indicationId,
            filters,
            setAnswers
        );
    }, [filters]);

    useEffect(() => {
        if(refresh) {
            getAnswers(
                initData.brandId,
                initData.indicationId,
                filters,
                setAnswers
            );

            changeState({refresh: false});
        }
    }, [refresh]);

    const downloadSource = (e) => {
        /*downloadFile(
            initData.brandId,
            initData.indicationId,
            "answers",
            e.target.dataset.path,
            e.target.dataset.filename
        );*/

        changeState({
            show: true,
            method: "FilePreview",
            file: {
                type: "answers",
                path: e.target.dataset.path,
                filename: e.target.dataset.filename
            }
        });
    }

    return (
        <div id="table-rows">
            <a
                id="download"
                href=""
                ref={inputRef}
                style={{display: "none"}}
            />

            <AddAnswer
                initData={initData}
                changeState={changeState}
                refresh={refresh}
            />

            {answers.map(answer => (
                <div key={answer.id} className="table-row">
                    <div className="table-column question">
                        <span
                            data-content={answer.question}
                        >{answer.question}</span>
                    </div>
                    <div className="table-column answer">
                        <span
                            data-content={answer.answer}
                        >{answer.answer}</span>
                    </div>
                    <div className="table-column date">
                        <span>{answer.answer_date.split("T")[0]}</span>
                    </div>
                    <div className="table-column agency-country">
                        <span>{countryList[answer.origin].name}</span>
                    </div>
                    <div className="table-column category">
                        <span>{answer.category}</span>
                    </div>
                    <SimilarQuestion
                        similarQuestions={answer.similar_question}
                        setAnswerId={setAnswerId}
                    />
                    <Sources
                        sources={answer.sources}
                        downloadSource={downloadSource}
                    />
                </div>
            ))}

            {answerId ? (
                <AnswerPopup
                    answerId={answerId}
                    setAnswerId={setAnswerId}
                    downloadSource={downloadSource}
                />
            ) : null}
        </div>
    );
}

export default Answers;
