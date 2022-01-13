import React from 'react';

function FilePreview({state, initData, closePopUp}) {
    const path = `${process.env.REACT_APP_API_URL}uploaded-files/` +
                `${initData.brandId}/` +
                `${initData.indicationId}/` +
                `${state.file.type}/` +
                `${state.file.path}`;

    return (
        <div id="file-preview" className="popup-inner">
            <h3>Add Brand</h3>
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle can-close" /></span>
            
            <iframe
                src={"https://docs.google.com/viewer?url=" + path + "&embedded=true"}
                title="file"
                width="100%"
                height="600"
            />
        </div>
    );
}

export default FilePreview;
