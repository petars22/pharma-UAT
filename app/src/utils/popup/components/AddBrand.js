import React, { useRef } from 'react';
import callApi from '../../functions/callApi';

function AddBrand({state, setState, closePopUp}) {
    const thumbnail = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        const formElements = e.target.elements;
        const formData = {
            name: formElements.name.value,
            thumbnail: formElements.thumbnail.value
        };

        const res = await callApi(
            "POST",
            "administration/createBrand",
            formData
        );
    
        if(res && res.error === undefined) setState({
            ...state,
            method: "Success",
            message: res
        });
    }
    
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleFileChange = async (e) => {
        if(e.target.files) {
            const base64 = await convertToBase64(e.target.files[0]);
    
            console.log(base64);
            thumbnail.current.value = base64;
        }
    }


    return (
        <div className="popup-inner">
            <h3>Add Brand</h3>
            <span
                className="close can-close"
                onClick={closePopUp}
            ><i className="fas fa-times-circle can-close" /></span>

            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>

                <div className="input-container">
                    <label htmlFor="thumbnail">Thumbnail:</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={handleFileChange}
                    />
                    <input
                        ref={thumbnail}
                        type="text"
                        style={{display: "none"}}
                        name="thumbnail"
                    />
                </div>
                
                <input
                    type="submit"
                    className="button button-primary"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default AddBrand;
