import Progress from './src/progress'

Progress.install = (Vue) => {
  Vue.component(Progress.name, Progress)
}

export default Progress