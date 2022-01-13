import React from 'react';

function Sources({sources, downloadSource}) {
    const sourcesArray = sources !== "" ? JSON.parse(sources) : [];

    return (
        <div className="table-column sources">
            {sourcesArray.map((s, i) => (
                <p
                    key={i}
                    data-path={s.path}
                    data-filename={s.name}
                    onClick={downloadSource}
                >{s.name}</p>
            ))}
        </div>
    );
}

export default Sources;
