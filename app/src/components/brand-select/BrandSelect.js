import React, { useEffect, useState } from 'react';

import Popup from '../../utils/popup/Popup';

import activeNavButtonChange from '../../utils/functions/activeNavButtonChange';
import getBrandsData from './functions/getBrandsData';

import './BrandSelect.css';

function BrandSelect(props) {
    const [brandsData, setBrandsData] = useState([]);
    const [state, setState] = useState({
        show: false,
        method: "",
        brandId: "",
        popup: {},
        refresh: false
    });
    const { changeState } = props;

    useEffect(() => {
        activeNavButtonChange("brand-select");
        getBrandsData(setBrandsData);
    }, []);

    useEffect(() => {
        if(state.refresh) {
            getBrandsData(setBrandsData);

            setState({
                ...state,
                refresh: false
            });
        }
    }, [state.refresh]);

    const showIndications = (e) => {
        e.target.nextSibling.classList.toggle("hide");
    }

    return (
        <div id="brand-select">
            <div className="title_cont"><h2>Choose Your Brand</h2></div>

            <div className="brands">
                {brandsData.map(brand => (
                    <div key={brand.id} className="brand-container">
                        <h4 className="brand-name">{brand.name}</h4>
                        <div
                            className="brand img"
                            onClick={showIndications}
                            style={brand.thumbnail ? {
                                backgroundImage: `url(${brand.thumbnail})`
                            } : {}}
                        >
                            <span
                                className="delete"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setState({
                                        show: true,
                                        method: "Delete",
                                        brandId: brand.id,
                                        popup: {
                                            title: `brand: '${brand.name}' and all it's indications?`,
                                            endpoint: "administration/deleteBrand",
                                            id: brand.id
                                        }
                                    });
                                }}
                            ><i className="fas fa-times-circle" /></span>
                        </div>
                        

                        <div className="indications hide">
                            {brand.indications.map(indication => (
                                <div
                                    key={indication.id}
                                    className="indication"
                                    onClick={() => changeState(
                                        {
                                            brandId: brand.id,
                                            brandThumbnail: brand.thumbnail,
                                            indicationId: indication.id,
                                            indications: brand.indications
                                        },
                                        "/activity-timeline"
                                    )}
                                >
                                    {indication.name}
                                    <span
                                        className="delete"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setState({
                                                show: true,
                                                method: "Delete",
                                                brandId: brand.id,
                                                popup: {
                                                    title: `indication: '${indication.name}' and all it's activities?`,
                                                    endpoint: "administration/deleteIndication",
                                                    id: indication.id
                                                }
                                            });
                                        }}
                                    ><i className="fas fa-times-circle"></i></span>
                                </div>
                            ))}

                            <div
                                className="indication add-indication"
                                onClick={() => setState({
                                    show: true,
                                    method: "AddIndication",
                                    brandId: brand.id
                                })}
                            >+</div>
                        </div>
                    </div>
                ))}
                <div
                    id="add-brand"
                    className="brand"
                    onClick={() => setState({
                        ...state,
                        show: true,
                        method: "AddBrand"
                    })}
                >
                    <span>+</span>
                </div>

                <Popup
                    state={state}
                    setState={setState}
                />
            </div>
        </div>
    );
}

export default BrandSelect;
