import Vue from 'vue'
import App from './App.vue'
import './assets/global.css';


/** Font Awesome Stuff **/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faBullseye,
    faThumbsUp,
    faThumbsDown
} from '@fortawesome/pro-solid-svg-icons';
import {
    faSortNumericDownAlt,
    faSortNumericUp,
    faSortAlphaUp,
    faSortAlphaDownAlt,
    faLongArrowUp,
    faLongArrowDown,
    faEraser
} from '@fortawesome/pro-light-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(
    faBullseye,
    faThumbsUp,
    faSortNumericUp,
    faSortNumericDownAlt,
    faThumbsDown,
    faEraser,
    faSortAlphaUp,
    faSortAlphaDownAlt,
    faLongArrowUp,
    faLongArrowDown)
Vue.component('fa-icon', FontAwesomeIcon)
/** END Font Awesome Stuff **/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
