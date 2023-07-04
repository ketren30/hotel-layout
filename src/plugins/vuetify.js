// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VProgressLinear } from 'vuetify/lib/components/index.mjs';
import { VRadio } from 'vuetify/lib/components/index.mjs';
import { VRadioGroup, VCardText, VWindow, VWindowItem, VCard, VTabs, VTab } from 'vuetify/lib/components/index.mjs';
import { Ripple } from 'vuetify/directives';
// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VProgressLinear,
    VRadio,
    VRadioGroup,
    VCardText,
    VWindow,
    VWindowItem,
    VCard,
    VTabs,
    VTab
  },
  directives: {
    Ripple,
  }
})
