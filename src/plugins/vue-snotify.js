import Vue from 'vue'
import Snotify, { SnotifyPosition} from 'vue-snotify'

const options = {
    toast: {
        position: SnotifyPosition.rightBottom,
    }
}

Vue.use(Snotify, options)

export default {}