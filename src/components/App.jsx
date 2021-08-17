import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducer';
import AppContext from '../contexts/AppContext';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';

  const App = () => {

    // rootReducerにて各Reducerはオブジェクト形式で保管されている
    // stateはそれぞれの状態を一元管理しているので、初期値に注意
    const initialState = {
      events: [],
      operationLogs: []
    };
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;