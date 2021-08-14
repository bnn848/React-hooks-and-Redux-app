import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

  const App = () => {
    return (
    <React.Fragment>
      <div className="container-fluid">
        <h4>EVENT FORM</h4>

        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input type="text" className="form-control" id="formEventTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">内容</label>
            <input type="text" className="form-control" id="formEventBody" />
          </div>

          <button className="btn btn-primary">イベントを作成</button>
          <button className="btn btn-danger">全てのイベントを削除</button>
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
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default App;