const events = (state = [], action) => {
  switch(action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, {id: id, ...event}];
    case "DELETE_EVENT":
    case "DELETE_ALL_EVENT":
      return [] // 空配列で状態を初期化
    default:
      return state // そのままの状態を返す
  }
};

export default events;s