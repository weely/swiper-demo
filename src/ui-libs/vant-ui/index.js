import {
  Button,
  Cell,
  CellGroup,
  Col,
  Row,
  Icon,
  Form,
  Field,
  Toast,
  Uploader,
  List,
  NumberKeyboard,
  Loading
} from 'vant'

function install(Vue) {
  Vue.use(Button)
  Vue.use(Cell)
  Vue.use(CellGroup)
  Vue.use(Col)
  Vue.use(Row)
  Vue.use(Icon)
  Vue.use(Form)
  Vue.use(Field)
  Vue.use(Toast)
  Vue.use(Uploader)
  Vue.use(List)
  Vue.use(NumberKeyboard)
  Vue.use(Loading )
}

export default {
  install
}
