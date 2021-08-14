const Event = ({event, dispatch}) => {

  const id = event.id
  const handleClickDeleteButton = () => {
    dispatch({type: "DELETE_EVENT", id: id})
  };

  return (
  <tr>
    <td>{id}</td>
    <td>{event.title}</td>
    <td>{event.body}</td>
    <button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button>
  </tr>
  )
};

export default Event;