const BasicLayout = () =>
  import(/* webpackChunkName: "BasicLayout" */ "@/components/BasicLayout.vue");
const Capacity = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Capacity.vue");
const Experience = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Experience.vue");
const Skill = () => import(/* webpackChunkName: "Home" */ "@/views/Skill.vue");
const Project = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Project.vue");

export default [
  {
    path: "/",
    name: "BasicLayout",
    component: BasicLayout,
    children: [
      {
        path: "/",
        name: "Capacity",
        component: Capacity,
        meta: {
          nav: {
            name: "个人简介"
          },
          title: "黎鸿福--web前端工程师"
        }
      },
      {
        path: "/skill",
        name: "Skill",
        component: Skill,
        meta: {
          nav: {
            name: "技能清单"
          },
          title: "黎鸿福--web前端工程师"
        }
      },
      {
        path: "/experience",
        name: "Experience",
        component: Experience,
        meta: {
          nav: {
            name: "工作经历"
          },
          title: "黎鸿福--web前端工程师"
        }
      },
      {
        path: "/project",
        name: "Project",
        component: Project,
        meta: {
          nav: {
            name: "项目经验"
          },
          title: "黎鸿福--web前端工程师"
        }
      }
    ]
  }
];
