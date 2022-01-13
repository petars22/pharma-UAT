import React from 'react';
import "../../assets/css/Accordion.css";

function Accordion(props) {
    const handleToggle = (e) => {
        let element = e.target.nextSibling;

        if(element.style.maxHeight) element.style.maxHeight = null;
        else if(!element.classList.contains("open")) element.style.maxHeight = element.scrollHeight + "px";

        element.classList.toggle("open");
    }

    return (
        <React.Fragment>
            <h2
                className="acordion-title margin-top"
                onClick={handleToggle}
            >{props.title}</h2>
            <div className={`accordion-body ${props.class}`} style={props.style}>
                {props.body}
            </div>
        </React.Fragment>
    );
}

export default Accordion;