import React, {useState, useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event.jsx';
import reducer from '../reducer';

  const App = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [state, dispatch] = useReducer(reducer, []);

    const addEvent = e => {
      e.preventDefault()
      dispatch(
        {
          type: "CREATE_EVENT",
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
        dispatch({type: "DELETE_ALL_EVENTS"})
      }
  };
  
    return (
    <React.Fragment>
      <div className="container-fluid">
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
            disabled={state.length === 0}
          >
            全てのイベントを削除
          </button>

        </form>

        <h4>Events Table</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>内容</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              state.map((event,index) => (
                <Event key={index} event={event} dispatch={dispatch} />
              ))
            }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default App;