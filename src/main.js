import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.less'
import { Button, Form, FormItem, Input, Table, TableColumn, DatePicker, Divider, Message, Loading } from 'element-ui'
import Clipboard from 'vue-clipboard2'
Vue.use(Clipboard)
Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Table)
  .use(TableColumn)
  .use(DatePicker)
  .use(Divider)
  .use(Loading)

Vue.prototype.$message = Message
Vue.prototype.$loading = Loading
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
