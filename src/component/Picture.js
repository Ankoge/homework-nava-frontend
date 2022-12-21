import {useParams} from "react-router-dom";
import {useEffectOnce} from "../hook/useEffectOnce";
import fetchGet from "../fetch/FetchGet";
import {useState} from "react";


const Picture = () =>{
    const {id} = useParams();
    const [picture, setPicture] = useState(null);

    useEffectOnce(() => {
        fetchGet(`/picture/${id}`).then(data => setPicture(data))
    })

    return picture && (<div>
        <div>{picture.id}</div>
        <div>{picture.name}</div>
        <div>{picture.author}</div>
        <div>{picture.view.views}</div>
    </div>)
}

export default Picture;