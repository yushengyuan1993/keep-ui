import Toast from './src/toast'

Toast.install = (Vue) => {
  Vue.component(Toast.name, Toast)
}

export default Toast