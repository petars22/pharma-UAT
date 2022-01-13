import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import Popup from '../../utils/popup/Popup';
import Activities from './components/Activities';
import NotePopup from './components/NotePopup';

import months from './functions/months';
import getMonthOrder from './functions/getMonthOrder';
import activeNavButtonChange from '../../utils/functions/activeNavButtonChange';

import './Timeline.css';
import getData from './functions/getData';
import WarningPopup from './components/WarningPopup';
import getNotes from './functions/getNotes';
import showCountries from './functions/showCountries';
//TODO add redirect when brandId and indicationId are not set up (maybe put it in session storage)
const currentMonth = new Date().getMonth() + 1;
const year = new Date().getFullYear();

function Timeline({brandId, indicationId, user}) {
    const [monthOrder, setMonthOrder] = useState([]);
    const [state, setState] = useState({
        show: false,
        method: "",
        activity: undefined,
        warning: undefined,
        activityId: undefined,
        refresh: false,
        year: year,
        countriesShow: 1
    });
    const [redirect, setRedirect] = useState(null);
    const [data, setData] = useState({
        activities: [],
        notes: {},
    });
    const initData = {
        country: {name: "Croatia", id: 42},
        month: months[currentMonth],
        year: year,
        brandId: brandId,
        indicationId: indicationId,
        username: user.displayName
    };

    useEffect(() => {
        if(brandId === "" || indicationId === "") setRedirect(<Redirect to="/" />);
        activeNavButtonChange("activity-timeline");
        setMonthOrder(getMonthOrder(1));

        getData(
            initData.brandId,
            initData.indicationId,
            state.year,
            setData
        );
    }, []);

    useEffect(() => {
        if(state.refresh) {
            getData(
                initData.brandId,
                initData.indicationId,
                state.year,
                setData
            );

            setState({
                ...state,
                refresh: false
            });
        }
    }, [state.refresh]);

    useEffect(() => {
        if(data.activities.length > 0) {
            async function refreshNotes() {
                console.log("new notes");
                const notes = await getNotes(
                    initData.brandId,
                    initData.indicationId,
                    state.year,
                    data.activities.map(a => a.id)
                );
    
                setData({
                    ...data,
                    notes
                });
            }
    
            refreshNotes();
        }
    }, [state.year]);

    const changeState = (object) => {
        setState({
            ...state,
            ...object
        });
    }
    
    return (
        <div id="timeline" className="page-container">
            <div className="content-contaiener">
                {redirect}
                
                <div className="buttons-container">
                    <button
                        className="button button-primary"
                        onClick={(e) => {
                            showCountries(e, state.countriesShow);
                            changeState({countriesShow: state.countriesShow * -1});
                        }}
                    >{state.countriesShow === 1 ? "Show" : "Hide"} Countries</button>
                </div>

                <div id="year-container">
                    <span
                        className="pointer"
                        onClick={() => setState({
                            ...state,
                            year: state.year - 1
                        })}
                    ><i className="fas fa-chevron-left" /></span>
                    {state.year}
                    <span
                        className="pointer"
                        onClick={() => setState({
                            ...state,
                            year: state.year + 1
                        })}
                    ><i className="fas fa-chevron-right" /></span>
                </div>
                <div id="table">
                    <div id="table-headers" className="table-row">
                        <div className="table-column activity">
                            <span>Activity</span>
                            <div className="activity-actions">
                                <span
                                    className="add"
                                    onClick={() => changeState({
                                        show: true,
                                        method: "ManageActivities"
                                    })}
                                ><i className="fas fa-edit" /></span>
                            </div>
                        </div>
                        {monthOrder.map(id => (
                            <div key={id} className="table-column">
                                <span>{months[id]}</span>
                            </div>
                        ))}
                    </div>
                    <div id="table-rows">
                        <Activities
                            data={data}
                            initData={initData}
                            monthOrder={monthOrder}
                            changeState={changeState}
                        />
                    </div>
                </div>

                {state.note ? (
                    <NotePopup
                        note={state.note}
                        changeState={changeState}
                    />
                ) : null}

                {state.warning ? (
                    <WarningPopup
                        warning={state.warning}
                        changeState={changeState}
                    />
                ) : null}

                <Popup
                    state={state}
                    setState={setState}
                    initData={initData}
                    activities={data.activities}
                />
            </div>
        </div>
    );
}

export default Timeline;
