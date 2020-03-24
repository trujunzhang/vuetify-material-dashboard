
// Mixins
import Proxyable from 'vuetify/lib/mixins/proxyable'

export default {
  name: 'MaterialTabs',

  mixins: [Proxyable],

  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
