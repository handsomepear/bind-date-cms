import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.less'
import { Button, Form, FormItem, Input, Table, TableColumn, DatePicker, Divider } from 'element-ui'

Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Table)
  .use(TableColumn)
  .use(DatePicker)
  .use(Divider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
