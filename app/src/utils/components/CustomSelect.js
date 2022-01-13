import React, { useEffect, useState } from 'react';

import removeItemFromArray from '../functions/removeItemFromArray';
import handleAccordionClick from '../functions/handleAccordionClick';

function CustomSelect({items, inputRef}) {
    const [state, setState] = useState({
        selected: [],
        unselected: []
    });

    useEffect(() => {
        setState({
            selected: [],
            unselected: [...items]
        });
    }, [items]);

    const handleClick = (e) => {
        e.stopPropagation();
        let temp = {...state};
        const target = e.target.classList.contains("item") ? e.target : e.target.parentElement;
        const index = items.findIndex(i => i.id === target.dataset.id);

        if(e.target.dataset.action === "add") {
            temp.selected.push(items[index]);
            temp.unselected = removeItemFromArray(temp.unselected, items[index]);
        }
        else {
            temp.selected = removeItemFromArray(temp.selected, items[index]);
            temp.unselected.push(items[index]);
        }

        console.log(index);
        console.log(e.target.dataset.id);
        inputRef.current.value = JSON.stringify(temp.selected);
        setState(temp);
    }

    return (
        <div className="custom-select">
            <div
                className="selected accordion-toggle"
                onClick={handleAccordionClick}
            >
                {state.selected.length === 0 ? (
                    <div
                        className="empty"
                        style={{
                            width: "100%",
                            justifyContent: "center"
                        }}
                    >Please select</div>
                ) : null}
                {state.selected.map(item => (
                    <div
                        key={item.id}
                        className="item"
                        data-id={item.id}
                        data-action="remove"
                        onClick={handleClick}
                    >{item.text} <i className="fas fa-times-circle" /></div>
                ))}
                <i className="fas fa-chevron-down arrow" />
            </div>

            <div className="un-selected accordion-body hide">
                {state.unselected.map(item => (
                    <div
                        key={item.id}
                        className="item"
                        data-id={item.id}
                        data-action="add"
                        onClick={handleClick}
                    >{item.text}</div>
                ))}
            </div>
        </div>
    );
}

export default CustomSelect;
