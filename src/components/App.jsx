import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events';
import reducer from '../reducer';
import EventForm from './EventForm';

  const App = () => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
    <React.Fragment>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </React.Fragment>
  );
};

export default App;