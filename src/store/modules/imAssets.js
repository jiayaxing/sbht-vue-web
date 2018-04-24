/**
 * wenim 工具函数
 * onMsgNotify
 * onConnNotify
 */
function onMsgNotify(newMsgList) {
  console.log(newMsgList)
}

function onConnNotify(resp) {
  switch (resp.ErrorCode) {
    case webim.CONNECTION_STATUS.ON:
      webim.Log.warn('建立连接成功: ' + resp.ErrorInfo);
      break;
    case webim.CONNECTION_STATUS.OFF:
      webim.Log.warn('连接已断开，无法收到新消息，请检查下你的网络是否正常: ' + resp.ErrorInfo);
      break;
    case webim.CONNECTION_STATUS.RECONNECT:
      webim.Log.warn('连接状态恢复正常: ' + resp.ErrorInfo)
      break;
    default:
      webim.Log.error('未知连接状态: =' + resp.ErrorInfo)
      break;
  }
}

const imAssets = {
  state: {
    identifierNick: ''
  },

  mutations: {
    SET_IDENTIFIERNICK: (state, token) => {
      state.identifierNick = token
    }
  },

  actions: {
    /**
     * webim登录
     * @param loginInfo
     * @returns {用户信息}
     */
    imLogin({ commit }, loginInfo) {
      const listeners = { onConnNotify, onMsgNotify }
      return new Promise((resolve, reject) => {
        webim.login(loginInfo, listeners, {}, (res) => {
          commit('SET_IDENTIFIERNICK', res.identifierNick)
          resolve(res)
        }, (err) => {
          reject(err)
        })
      })
    }

  }
}

export default imAssets
