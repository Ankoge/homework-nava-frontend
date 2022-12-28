import fetchDelete from "../fetch/FetchDelete";

const Delete = props => {

    function handleDelete() {
        console.log(props.id)
        fetchDelete(`/picture/${props.id}/delete`).then(response => {

            props.refreshTable(response.status)
            }
        )
    }

    return (
        <div>
            <button type={"submit"} onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Delete;