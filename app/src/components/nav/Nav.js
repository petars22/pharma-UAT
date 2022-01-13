import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import handleAccordionClick from '../../utils/functions/handleAccordionClick';

import './Nav.css';

export default function Nav({
    user,
    indications,
    indicationId,
    brandThumbnail,
    setSessionData,
    changeState
}) {
    const [redirect, setRedirect] = useState(null);
    const [state, setState] = useState({
        currentIndication: null,
        availableIndications: []
    });

    const logOut = () => {
        sessionStorage.removeItem("userData");
        setSessionData({ isLoggedIn: false, userData: null });
        setRedirect(<Redirect to="/login" />);
    }

    useEffect(() => {
        let availableIndications = [...indications];
        let index = availableIndications.findIndex(i => i.id === indicationId);
        let currentIndication = null;

        if(index !== -1) {
            currentIndication = availableIndications[index];
            availableIndications.splice(index, 1);
        }
        
        setState({
            currentIndication,
            availableIndications
        });
    }, [indicationId]);

    return (
        <div id="navigation">
            {redirect}
            <div id="upper-nav">
                <div
                    id="logo"
                    onClick={() => changeState({
                        brandId: "",
                        indicationId: "",
                        indications: [],
                        brandThumbnail: null,
                    })}
                >
                    <Link to="/">
                        <img
                            src={brandThumbnail}
                            alt="brand-logo"
                            style={{visibility: brandThumbnail ? "initial" : "hidden"}}
                        />
                    </Link>
                </div>

                {indicationId && state.currentIndication ? (
                    <div id="indications">
                        <div
                            className="current-indication accordion-toggle"
                            onClick={handleAccordionClick}
                            style={{pointerEvents: state.availableIndications.length > 0 ? "initial" : "none"}}
                        >
                            {state.currentIndication.name}
                            {state.availableIndications.length > 0 ? (
                                <i className="fas fa-chevron-down arrow" />
                            ) : null}
                        </div>
                        
                        <div id="indications-dropdown" className="accordion-body hide">
                            {state.availableIndications.map(indication => (
                                <div key={indication.id} className="indication">{indication.name}</div>
                            ))}
                        </div>
                    </div>
                ) : null}

                <div id="user-info">
                    <div
                        className="accordion-toggle"
                        onClick={handleAccordionClick}
                    >
                        <i className="fas fa-user" /> | {user.displayName}
                        <i className="fas fa-chevron-down arrow" />
                    </div>
                    <div id="user-info-dropdown" className="accordion-body hide">
                        <button
                            className="menu-link log-out"
                            onClick={() => logOut()}
                        >
                            Log Out <i className="fas fa-sign-out-alt" />
                        </button>
                    </div>
                </div>
            </div>
            {indicationId ? (
                <nav id="bottom-nav">
                    <Link className="menu-link" id="activity-timeline" to="/activity-timeline">Activity Timeline</Link>
                    <Link className="menu-link" id="knowledge-repository" to="/knowledge-repository">Knowledge Repository</Link>
                </nav>
            ) : null}
        </div>
    );
};
