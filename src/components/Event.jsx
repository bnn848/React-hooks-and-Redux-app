import { useContext } from 'react';
import {
  DELETE_EVENT,
  ADD_OPERATION_LOG,
} from '../actions';

import AppContext from '../contexts/AppContext';
import { timeCurrentToISO } from '../utils';

const Event = ({event}) => {
  const {dispatch} = useContext(AppContext);
  
  const id = event.id
  const title = event.title
  const body = event.body
  
  const handleClickDeleteButton = () => {
    if (window.confirm(`ID: ${id} タイトル: ${title}\nこのイベントを削除しますか？`)) {

      // イベントの削除
      dispatch({type: DELETE_EVENT, id: id})
      // ログの追加
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `${title}: ${body} を削除しました。`,
        operatedAt: timeCurrentToISO()
      })
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