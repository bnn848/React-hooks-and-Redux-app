import {
  ADD_OPERATION_LOG,
  DELETE_OPERATION_LOGS,
} from '../actions';

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      return [operationLog, ...state] // 降順になる
    case DELETE_OPERATION_LOGS:
      return [] // 初期状態の空配列に戻す
    default:
      return state // そのままの状態を返す
  }
};

export default operationLogs;