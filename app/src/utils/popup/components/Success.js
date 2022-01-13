import React from 'react';

function Success({state, setState}) {
    return (
        <div id="" className="popup-inner">
            <h3>{state.message}</h3>
            <span
                className="close can-close"
                onClick={() => setState({
                    ...state,
                    show: false,
                    method: "",
                    refresh: true
                })}
            ><i className="fas fa-times-circle can-close" /></span>
        </div>
    )
}

export default Success;
