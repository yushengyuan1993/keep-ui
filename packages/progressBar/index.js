import ProgressBar from './src/progressBar'

ProgressBar.install = (Vue) => {
  Vue.component(ProgressBar.name, ProgressBar)
}

export default ProgressBar