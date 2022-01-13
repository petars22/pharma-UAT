import React, { useState, useEffect } from 'react'
import downloadFile from '../../../../../utils/functions/downloadFile';

import getDocuments from '../functions/getDocuments';

function Documents({
    initData,
    filters,
    refresh,
    changeState
}) {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        getDocuments(
            initData.brandId,
            initData.indicationId,
            filters,
            setDocuments
        );
    }, [filters]);

    useEffect(() => {
        if(refresh) {
            getDocuments(
                initData.brandId,
                initData.indicationId,
                filters,
                setDocuments
            );

            changeState({refresh: false});
        }
    }, [refresh]);

    const downloadDocument = (e) => {
        const document = JSON.parse(e.target.dataset.document)[0];
        
        downloadFile(
            initData.brandId,
            initData.indicationId,
            "documents",
            document.path,
            document.name
        )
    }

    return (
        <div id="table-rows">
            {documents.map(document => (
                <div key={document.id} className="table-row">
                    <div className="table-column title">
                        <p
                            data-document={document.document}
                            onClick={downloadDocument}
                        >{document.title}</p>
                    </div>
                    <div className="table-column">
                        <span>{document.cohort}</span>
                    </div>
                    <div className="table-column">
                        <span>{document.analysis_set}</span>
                    </div>
                    <div className="table-column">
                        <span>{document.data_cutoff_date}</span>
                    </div>
                    <div className="table-column">
                        <span>{document.endpoint}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Documents
