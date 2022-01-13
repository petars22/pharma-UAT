import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Login from './components/login/Login';
import Timeline from './components/timeline/Timeline';
import BrandSelect from './components/brand-select/BrandSelect';
import KnowledgeRepository from './components/knowledge-repository/KnowledgeRepository';

import './App.css';

function App() {
    const getSessionData = () => {
        let userData = JSON.parse(sessionStorage.getItem("userData"));
        if(userData) return { isLoggedIn: true, userData };
        return { isLoggedIn: false, userData: null };
    }

    const handleRedirect = (data) => {
        if(data.isLoggedIn === false) {
            if(window.location.href.indexOf("login") < 0)
                return <Redirect to="/login" />
            else return null;
        }
        else {
            if(window.location.href.indexOf("login") > -1)
                return <Redirect to="/" />
            else return null;
        }
    }

    const changeState = (object, redirect) => {
        setState({
            ...state,
            ...object,
            redirect: redirect ? <Redirect to="/activity-timeline" /> : null
        });
    }

    const [sessionData, setSessionData] = useState(getSessionData());
    const [state, setState] = useState({
        brandId: "",
        indicationId: "",
        indications: [],
        brandThumbnail: null,
        redirect: null
    });
    //sessionData.isLoggedIn = true;

    return (
        <div
            className={`App ${sessionData.isLoggedIn ?
                " logged-in"
            : ""}`}
        >
            <Router basename="/pharma-app">
                <React.Fragment>
                    {handleRedirect(sessionData)}
                    {state.redirect}
                    {sessionData.isLoggedIn ?
                        <Nav
                            user={sessionData.userData}
                            indications={state.indications}
                            indicationId={state.indicationId}
                            brandThumbnail={state.brandThumbnail}
                            setSessionData={setSessionData}
                            changeState={changeState}
                        />
                    : null}
                    <Switch>
                        <Route exact path="/login">
                            <Login
                                setSessionData={setSessionData}
                            />
                        </Route>

                        {sessionData.isLoggedIn ? (
                            <React.Fragment>
                                <Route exact path="/">
                                    <BrandSelect
                                        changeState={changeState}
                                        user={sessionData.userData}
                                    />
                                </Route>

                                <Route exact path="/activity-timeline">
                                    <Timeline
                                        brandId={state.brandId}
                                        indicationId={state.indicationId}
                                        user={sessionData.userData}
                                    />
                                </Route>

                                <Route exact path="/knowledge-repository">
                                    <KnowledgeRepository
                                        brandId={state.brandId}
                                        indicationId={state.indicationId}
                                        user={sessionData.userData}
                                    />
                                </Route>
                            </React.Fragment>
                        ) : null}
                    </Switch>
                </React.Fragment>
            </Router>
        </div>
    );
}

export default App;
