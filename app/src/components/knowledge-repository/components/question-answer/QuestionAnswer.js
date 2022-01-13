import React from 'react';

import TableHeaders from './components/TableHeaders';
import Answers from './components/Answers';

function QuestionAnswer({
    initData,
    filters,
    refresh,
    changeState
}) {
    const toggleAddAnswer = (e) => {
        const ele = document.getElementById("add-answer");
        if(ele) ele.classList.toggle("hide");
    }

    return (
        <React.Fragment>
            <div className="buttons-container">
                <button
                    className="button button-primary"
                    onClick={toggleAddAnswer}
                >Toggle Add Answer</button>
            </div>

            <div id="table">
                <TableHeaders />

                <Answers
                    initData={initData}
                    filters={filters}
                    refresh={refresh}
                    changeState={changeState}
                />
            </div>
        </React.Fragment>
    );
}

export default QuestionAnswer;
