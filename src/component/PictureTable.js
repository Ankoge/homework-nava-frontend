import {useState} from "react";
import {useEffectOnce} from "../hook/useEffectOnce";
import fetchGet from "../fetch/FetchGet";
import {Link} from "react-router-dom";
import Delete from "./Delete";


const PictureTable = () => {
    const [pictures, setPictures] = useState(null);
    const refreshTable = (responseStatus) => {
        if (responseStatus === 204) {
            alert("Picture deleted.")
        }
        else if(responseStatus === 404){
            alert(`Picture already deleted or not found.`)
        }
        else if (responseStatus === 500) {
            alert("Sorry, there was some mistake on the server. Try again or contact with our support.")
        }
        fetchGet("/picture").then(data => setPictures(data));
    }

    useEffectOnce(() => {
        fetchGet("/picture").then(data => setPictures(data));
    });

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
                    <td><Link to={`/picture/${picture.id}/update`}>
                        <button>Update</button>
                    </Link></td>
                    <td><Delete id={picture.id} refreshTable={refreshTable}/></td>
                </tr>)
            })}</tbody>

        </table>
    </div>)
}

export default PictureTable;