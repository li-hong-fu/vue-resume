const BasicLayout = () =>
  import(/* webpackChunkName: "BasicLayout" */ "@/components/BasicLayout.vue");
const Home = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home.vue");


export default [
  {
    path:"/",
    name:"BasicLayout",
    component:BasicLayout,
    children:[
      {
        path:"/",
        name:"Home",
        component:Home,
        meta:{
          title:"黎鸿福 - web前端工程师"
        }
      }
    ]
  }
]