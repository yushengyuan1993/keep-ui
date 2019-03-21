import Dialog from './src/dialog'

Dialog.install = (Vue) => {
  Vue.component(Dialog.name, Dialog)
}

export default Dialog