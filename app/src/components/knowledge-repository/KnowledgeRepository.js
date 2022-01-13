import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import Popup from '../../utils/popup/Popup';
import Components from './components/Components';

import activeNavButtonChange from '../../utils/functions/activeNavButtonChange';

import './KnowledgeRepository.css';

function KnowledgeRepository({brandId, indicationId, user}) {
    const [redireect, setRedirect] = useState(null);
    const [state, setState] = useState({
        show: false,
        method: "",
        filters: {},
        refresh: false,
        component: "QuestionAnswer"
    });
    const initData = {
        country: {name: "Croatia", id: 42},
        brandId,
        indicationId,
        username: user.displayName
    };

    useEffect(() => {
        if(brandId === "" || indicationId === "") setRedirect(<Redirect to="/" />);
        activeNavButtonChange("knowledge-repository");
    }, []);

    const changeState = (object) => {
        setState({
            ...state,
            ...object
        });
    }

    const handleFilterChange = (e) => {
        let filters = {...state.filters};

        if(e.target.value !== "") filters[e.target.name] = e.target.value;
        else delete filters[e.target.name];

        changeState({filters});
    }

    const handleComponentChange = (e) => {
        const buttons = e.target.parentElement.children;

        for(let i = 0; i < buttons.length; i++) buttons[i].classList.remove("active");
        e.target.classList.add("active");

        changeState({component: e.target.dataset.component});
    }

    return (
        <div id="knowledge-repository" className="page-container">
            {redireect}
            <div className="component-navigation-container">
                <button
                    className="menu-link active"
                    data-component="QuestionAnswer"
                    onClick={handleComponentChange}
                >Questions And Answers</button>
                <button
                    className="menu-link"
                    data-component="DocumentRepository"
                    onClick={handleComponentChange}
                >Document Repository</button>
            </div>

            <div className="content-contaiener">
                <div id="search-container" className="input-container">
                    <input type="search" id="search" name="search" />
                    <span
                        id="search-icon"
                        onClick={() => handleFilterChange({
                            target: document.getElementById("search")
                        })}
                    >
                        <i className="fas fa-search" />
                    </span>
                </div>
                
                <Components
                    component={state.component}
                    initData={initData}
                    filters={state.filters}
                    refresh={state.refresh}
                    changeState={changeState}
                />
            </div>

            <Popup
                state={state}
                setState={setState}
                initData={initData}
            />
        </div>
    );
}

export default KnowledgeRepository;
