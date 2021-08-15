import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events';
import reducer from '../reducer';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';

console.log({AppContext});

  const App = () => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;