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
    faIcons
} from '@fortawesome/pro-light-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

const FontAwesome = {
    
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
    
}
export default FontAwesome; 

