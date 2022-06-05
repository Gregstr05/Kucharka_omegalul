/*import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/

function isLight() {
  return localStorage.getItem("light-mode");
}

function toggleRootClass() {
  document.querySelector(":root").classList.toggle("light");
}

function toggleLocalStorageItem() {
  if (isLight()) {
    localStorage.removeItem("light-mode");
  } else {
    localStorage.setItem("light-mode", "set");
  }
}

if (isLight()) {
  toggleRootClass();
}

document.querySelector("#Dark_Theme").addEventListener("click", () => {
  toggleLocalStorageItem();
  toggleRootClass();
});