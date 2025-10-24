import { install } from "element-plus";
import ImageView from "./ImageView/index.vue"
import XtXSku from "./XtxSku/index.vue"

//把components中的组件全局化注册
export const componentsPlugin ={
  //@ts-ignore
  install(app){
    //app.component("组件名称",组件配置对象)
    app.component('XtXImageView',ImageView)
    app.component('XtXSku',XtXSku)
  }
}
