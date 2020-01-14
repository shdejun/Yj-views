import plateNumber from './plateNumber/index'
const components = {
  plateNumber
}
// const install = (Vue,Opt)=>{
//   // Object.keys(components).forEach(cpt=>{Vue.components(cpt.normalize,cpt)})
// }
const install = Vue => {
  Object.keys(components).forEach(cpt=>{Vue.component(cpt.normalize,cpt)})
}
export default {
  install
}