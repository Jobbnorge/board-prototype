import Vue from 'vue'
import App from './App.vue'
import './../public/global.css'

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
    faEraser,
    faBriefcase,
    faPhone,
    faEnvelope,
    faCalendarAlt,
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
    faLongArrowDown,
    faEnvelope,
    faPhone,
    faBriefcase,
    faCalendarAlt,
    )
Vue.component('fa-icon', FontAwesomeIcon)
/** END Font Awesome Stuff **/

Vue.config.productionTip = false

window.Vue = Vue; 

new Vue({
  render: h => h(App),
}).$mount('#app')
