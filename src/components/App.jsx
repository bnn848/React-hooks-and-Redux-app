import React, {useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducer';
import AppContext from '../contexts/AppContext';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';

const APP_KEY = 'app'

  const App = () => {
    // rootReducerにて各Reducerはオブジェクト形式で保管されている
    // stateはそれぞれの状態を一元管理しているので、初期値に注意
    const appState = localStorage.getItem(APP_KEY)
    const initialState = appState ? JSON.parse(appState) : {
      events: [],
      operationLogs: []
    };
    
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      localStorage.setItem(APP_KEY, JSON.stringify(state))
    },[state]);


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