const MESSAGE_TYPE_SUCCESS = 'success'
const messageType = {
  success: 'success',
  error: 'error'
}
export default {
  name: 'Constant',
  install(Vue) {
    Vue.prototype.messageType = messageType
  }
}

