import {useState} from "react";
import {useEffectOnce} from "../hook/useEffectOnce";
import fetchGet from "../fetch/FetchGet";
import {Link} from "react-router-dom";


const PictureTable = () => {
    const [pictures, setPictures] = useState(null);

    useEffectOnce(() => {
        fetchGet("/picture").then(data => setPictures(data))
    })

    function onNameClick(event) {

    }

    return pictures && (<div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Author</th>
                <th>Views</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>{pictures.map((picture, index) => {
                return (<tr key={`${index}-row`}>
                    <td>{picture.id}</td>
                    <td><Link to={`/picture/${picture.id}`}>{picture.name}</Link></td>
                    <td>{picture.author}</td>
                    <td>{picture.view.views}</td>
                    <td><Link to={`/picture/${picture.id}/update`}><button>Update</button></Link></td>
                </tr>)
            })}</tbody>

        </table>
    </div>)
}

export default PictureTable;