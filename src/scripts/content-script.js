import Vue from 'vue';
import App from './app'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import addTargetBlank from './lib/add-target-blank'

library.add(faSyncAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
const appElement = document.createElement('div');
appElement.id = 'page-tree-incremental-search';
const nav = document.getElementsByClassName('acs-nav-sections')[0];

if (nav) {
  addTargetBlank()
  nav.parentNode.insertBefore(appElement, nav.nextElementSibling);

  const app = new Vue({
    store,
    render: h => h(App),
  }).$mount();

  appElement.appendChild(app.$el)
}
