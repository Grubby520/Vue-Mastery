import { Vue } from "./observer/index";


const el = document.getElementById('main');
console.log(el);
const vue$ = new Vue({
  main: 'Hello Vue'
}, el, 'main');

console.log(vue$);

window.setTimeout(() => {
  vue$.data.main = 'Hello SelfVue';
  console.log('main changed');
}, 5000)

export { Vue }