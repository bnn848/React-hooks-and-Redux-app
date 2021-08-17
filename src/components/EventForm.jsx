import { useState, useContext } from 'react'

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_OPERATION_LOGS
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentToISO } from '../utils';

/** App.jsxからpropsとして渡しているので、EventForm.jsxで
 *  importする必要はない.
  import { useReducer } from 'react'
  import reducer from '../reducer';
  const [state, dispatch] = useReducer(reducer, []);
 */


const EventForm = () => {
  const {state, dispatch} = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  /** ADD */
  const addEvent = e => {
    e.preventDefault()

    // Events関連のdispatch
    dispatch({
        type: CREATE_EVENT,
        title,
        body
    })

    // Logs関連のdispatch
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました。",
      operatedAt: timeCurrentToISO()
    })

      setTitle('');
      setBody('')
  };
  
  /** DELETE */
  const deleteAllEvents = e => {
    e.preventDefault()
    if (window.confirm('全てのイベントを削除しますか？')) {
      dispatch({type: DELETE_ALL_EVENTS})
      dispatch({
        type: ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました",
        operatedAt: timeCurrentToISO()
      })
    }
  };

  /** DELETE_OPERATION_LOGS */
  const deleteAllOperationLogs = e => {
    e.preventDefault()
    if (window.confirm('全ての操作ログを削除しますか？')) {
      dispatch({
        type: DELETE_OPERATION_LOGS,
        description: "全ての操作ログを削除しました",
      })
    }
  };

  return (
    <>
      <h4>EVENT FORM</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            type="text"
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
            />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={title === "" || body === ""}
        >
          イベントを作成
        </button>

        <button 
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除
        </button>

        <button 
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除
        </button>

      </form>
    </>
  )
};

export default EventForm;