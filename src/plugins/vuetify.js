// Styles
import '@mdi/font/css/materialdesignicons.css'
import { VProgressLinear } from 'vuetify/lib/components/index.mjs';
import { Ripple } from 'vuetify/directives';
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VProgressLinear
  },
  directives: {
    Ripple,
  }
})
