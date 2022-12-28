import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffectOnce} from "../hook/useEffectOnce";
import fetchGet from "../fetch/FetchGet";
import fetchPut from "../fetch/FetchPut";

const Update = () => {
    const {id} = useParams();
    const [picture, setPicture] = useState(null);
    const [pictureUpdate, setPictureUpdate] = useState(
        {
            id: id,
            name: "",
            author: "",
            view: null,
        }
    );


    useEffectOnce(async () => {
        fetchGet(`/picture/${id}`)
            .then(response => {
                setPicture(response)
                setPictureUpdate({
                    ...pictureUpdate,
                    ...response,
                })
            })
            .then(response => {
                if (response.status === 204) {
                    alert(`Sorry, picture "${id}" not found in the database.`);
                }
            })


    })


    function handleFieldChange(event) {
        setPictureUpdate({
            ...pictureUpdate,
            [event.target.dataset.fieldName]: event.target.value,
        })
    }


    function handleResetClick() {
        resetInput();
    }


    const resetInput = () => {
        setPictureUpdate({
            ...picture,
        })
    }


    async function handleUpdateClick() {
        const response = await fetchPut(`/picture/${id}/update`, pictureUpdate);
        if (response.status === 204) {
            alert(`Sorry, picture "${id}" not found in the database.`);
            resetInput();
        }
        if(response.status === 202) {
            alert(`Picture ${id} updated`)
        }
    }


    return picture && (
        <div>
            <div>Picture: {picture.id}</div>
            <div>Viewed: {picture.view.views}</div>
            <input onChange={handleFieldChange} data-field-name="name" value={pictureUpdate.name || ""}/>
            <input onChange={handleFieldChange} data-field-name="author" value={pictureUpdate.author || ""}/>
            <button type={"submit"} onClick={handleUpdateClick}>Update</button>
            <button type={"reset"} onClick={handleResetClick}>Reset</button>
        </div>)
}

export default Update;