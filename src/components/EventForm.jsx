import { useState, useContext } from 'react'

import { CREATE_EVENT,DELETE_ALL_EVENTS } from '../actions';
import AppContext from '../contexts/AppContext';

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

  const addEvent = e => {
    e.preventDefault()
    dispatch(
      {
        type: CREATE_EVENT,
        title,
        body
      }
      );
      setTitle('');
      setBody('')
  };
    
  const deleteAllEvents = e => {
    e.preventDefault()
    if (window.confirm('全てのイベントを削除しますか？')) {
      dispatch({type: DELETE_ALL_EVENTS})
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

      </form>
    </>
  )
};

export default EventForm;