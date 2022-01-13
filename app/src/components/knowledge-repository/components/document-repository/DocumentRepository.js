import React from 'react';
import Documents from './components/Documents';

import TableHeaders from './components/TableHeaders';


function DocumentRepository({
    initData,
    filters,
    refresh,
    changeState
}) {

    return (
        <div id="document-repository">
            <div className="buttons-container">
                <button
                    className="button button-primary"
                    onClick={() => changeState({show: true, method: "AddDocuments"})}
                ><i className="fas fa-plus" /> Add Documents</button>
            </div>

            <div id="table">
                <TableHeaders />

                <Documents
                    initData={initData}
                    filters={filters}
                    refresh={refresh}
                    changeState={changeState}
                />
            </div>
        </div>
    );
}

export default DocumentRepository;
