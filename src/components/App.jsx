import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

  const App = () => {
    return (
    <React.Fragment>
      <div className="container-fluid">
        <h4>EVENT FORM</h4>

        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">Title</label>
            <input type="text" className="form-control" id="formEventTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">Body</label>
            <input type="text" className="form-control" id="formEventBody" />
          </div>

          <button className="btn btn-primary">Create Event</button>
          <button className="btn btn-danger">Delete All Events</button>
        </form>

        <h4>Events Table</h4>
        <table className="table table-hover">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default App;