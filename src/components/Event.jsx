import { useContext } from 'react';
import { DELETE_EVENT } from '../actions';

import AppContext from '../contexts/AppContext';

const Event = ({event}) => {
  const {dispatch} = useContext(AppContext);
  
  const id = event.id
  const title = event.title
  
  const handleClickDeleteButton = () => {
    if (window.confirm(`ID: ${id} タイトル: ${title}\nこのイベントを削除しますか？`)) {
      dispatch({type: DELETE_EVENT, id: id})
    }
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