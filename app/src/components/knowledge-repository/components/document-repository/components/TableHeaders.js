import React from 'react';

function TableHeaders() {
    return (
        <div id="table-headers" className="table-row">
            <div className="table-column">
                <span>Title</span>
            </div>
            <div className="table-column">
                <span>Cohort</span>
            </div>
            <div className="table-column">
                <span>Analysis Set</span>
            </div>
            <div className="table-column">
                <span>Data Cutoff Date</span>
            </div>
            <div className="table-column">
                <span>Endpoint</span>
            </div>
        </div>
    );
}

export default TableHeaders;
