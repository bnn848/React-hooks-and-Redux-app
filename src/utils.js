
/**
 * operationLogsで用いるため
 * タイムスタンプをISO形式で取得してインスタンス化する
 * 現在時刻を取得するメソッドであり、取得した日時を返す
 */
export const timeCurrentToISO = () => (
  new Date().toISOString()
);