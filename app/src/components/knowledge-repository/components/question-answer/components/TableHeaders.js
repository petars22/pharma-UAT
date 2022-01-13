import React from 'react';

function TableHeaders() {
    return (
        <div id="table-headers" className="table-row">
            <div className="table-column question">
                <span>Question</span>
            </div>
            <div className="table-column answer">
                <span>Answer</span>
            </div>
            <div className="table-column date">
                <span>Answer Date</span>
            </div>
            <div className="table-column agency-country">
                <span>Name of Agency/Country</span>
            </div>
            <div className="table-column category">
                <span>Category</span>
            </div>
            <div className="table-column similar-question">
                <span>Similar question</span>
            </div>
            <div className="table-column">
                <span>Sources</span>
            </div>
        </div>
    );
}

export default TableHeaders;
