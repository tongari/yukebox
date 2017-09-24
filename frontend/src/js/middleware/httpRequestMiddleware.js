/**
 * fetch
*/
const fetch = (action, csrfToken = null) => {

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(action.payload.request.method, action.payload.request.url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (action.payload.request.method.toUpperCase() !== 'GET') xhr.setRequestHeader('X-CSRF-Token', csrfToken);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status < 400) {
        // ログアウトはRailsのDeviseを使ってるためJSON返却形式が違うのでここでハードコート処理
        if (action.payload.request.url === '/users/sign_out') resolve();

        const res = JSON.parse(xhr.response);

        if (action.payload.request.externalApi) {
          res.success = true;
          resolve(res);
        } else if (res.success) {
          resolve(res);
        } else {
          window.alert(res.message);
          resolve(res);
        }
      } else if (xhr.readyState === 4 && xhr.status >= 400) {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => {
      reject(new Error(xhr.statusText));
    };
    xhr.send(JSON.stringify(action.payload.request.params));
  });
};

/**
 * httpRequestMiddleware
 * HTTPリクエスト時の共通処理のミドルウェア
 * @param getState
 * @param dispatch
 * @returns {function(*=)}
 */
const httpRequestMiddleware = ({ getState, dispatch }) => {
  return (next) => {
    return async (action_) => {
      const action = action_;

      // HTTPリクエストのアクションでない場合は処理をスルー
      if (!action.payload || !action.payload.request) {
        return next(action);
      }

      const state = getState();
      const csrfToken = state.app.get('csrfToken');

      // 自身のアクションを発行
      // HTTPリクエスト開始を通知してローディングなどを表示するため
      next(action);

      // HTTPリクエストを実行する
      return fetch(action, csrfToken)
        .then((response) => {
          // リクエスト成功時のアクションを発行
          let nextAction = {
            type: `${action.type}_SUCCESS`,
            response,
          };
          // レスポンスが返却されたが条件がマッチしない場合、エラー扱い
          if (!response.success){
            nextAction.type = `${action.type}_FAILURE`;
          }
          next(nextAction);
          return nextAction;
        })
        .catch((error) => {
          // リクエスト失敗時のアクションを発行
          const nextAction = {
            type: `${action.type}_FAILURE`,
            error,
          };
          next(nextAction);
          return Promise.reject(nextAction);
        });
    };
  };
};

export default httpRequestMiddleware;
