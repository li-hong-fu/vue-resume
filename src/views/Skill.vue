<template>
  <div class="section">
    <div class="grid-content">
      <!-- <h3 class="sub-title">技能熟练度</h3> -->
      <div id="c1"></div>
    </div>
  </div>
</template>

<script>
import { Chart } from "@antv/g2";

export default {
  data() {
    return {
      data: [
        { type: "HTML", value: 1, text: "精通", cat: "Web开发" },
        { type: "CSS", value: 1, text: "精通", cat: "Web开发" },
        { type: "JavaScript", value: 1, text: "精通", cat: "Web开发" },
        { type: "Node.js", value: 0.5, text: "良好", cat: "Web框架" },
        { type: "Express", value: 0.5, text: "良好", cat: "Web框架" },
        { type: "Koa2", value: 0.25, text: "一般", cat: "Web框架" },
        { type: "jQuery", value: 0.25, text: "一般", cat: "前端框架" },
        { type: "Vue.js", value: 0.75, text: "熟练", cat: "前端框架" },
        { type: "Element UI", value: 0.75, text: "熟练", cat: "前端框架" },
        { type: "微信小程序", value: 0.5, text: "良好", cat: "前端框架" },
        { type: "Webpack", value: 0.5, text: "良好", cat: "前端工具" },
        { type: "Gulp", value: 0.25, text: "一般", cat: "前端工具" },
        { type: "Vue CLI3", value: 0.5, text: "良好", cat: "前端工具" },
        { type: "MySQL", value: 0.5, text: "良好", cat: "数据存储" },
        { type: "Git", value: 0.5, text: "良好", cat: "版本管理" },
        { type: "Github", value: 0.5, text: "良好", cat: "版本管理" }
      ]
    };
  },
  mounted() {
    this.handChang();
  },
  methods: {
    handChang() {
      const chart = new Chart({
        container: "c1",
        autoFit: true,
        height: 1000,
        padding: [0, 0, 0, 100],
      });

      chart.data(this.data);

      this.handbd(chart)
    },

    handbd(chart) {
      chart.scale({
        value: {
          max: 1,
          min: 0,
        }
      });

      chart.legend(false);

      chart.axis('value', {
        label: null,
        grid: null,
      });

      chart.coordinate("rect").transpose();
      chart
        .interval()
        .position("type*value")
        .color("cat", [
          "#face1d",
          "#37c461",
          "#2194ff",
          "#CCCC99",
          "#9966FF",
          "#330000"
        ])
        .size(34)
        .label("value", {
          style: {
            fill: "#FFFFFF"
          },
          offset: -20,
          content: originData => {
            return originData.text
          }
        });

      chart.annotation().text({
        top: true,
        position: ["CSS", "min"],
        content: "Web开发",
        style: {
          fill: "#000",
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center"
        },
        offsetX: -90,
        rotate: Math.PI * -0.5
      });

      chart.annotation().text({
        top: true,
        position: ["Express", "min"],
        content: "Web框架",
        style: {
          fill: "#000",
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center"
        },
        offsetX: -90,
        rotate: Math.PI * -0.5
      });

      chart.annotation().text({
        top: true,
        position: ["Vue.js", "min"],
        content: "前端框架",
        style: {
          fill: "#000",
          fontSize: 12,
          fontWeight: "500",
          textAlign: "left"
        },
        offsetX: -90,
        rotate: Math.PI * -0.5
      });

      chart.annotation().text({
        top: true,
        position: ["Gulp", "min"],
        content: "前端工具",
        style: {
          fill: "#000",
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center"
        },
        offsetX: -90,
        rotate: Math.PI * -0.5
      });

      chart.annotation().text({
        top: true,
        position: ["MySQL", "min"],
        content: "数据存储",
        style: {
          fill: "#000",
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center"
        },
        offsetX: -90,
        rotate: Math.PI * -0.5
      });

      chart.annotation().text({
        top: true,
        position: ["Github", "min"],
        content: "版本管理",
        style: {
          fill: "#000",
          fontSize: 12,
          fontWeight: "500",
          textAlign: "right"
        },
        offsetX: -90,
        rotate: Math.PI * -0.5
      });

      chart.annotation().line({
        start: ["-20%", "12.5%"],
        end: ["100%", "12.5%"],
        style: {
          stroke: "#c0c0c0",
          lineDash: [2, 2]
        }
      });

      chart.annotation().line({
        start: ["-20%", "19%"],
        end: ["100%", "19%"],
        style: {
          stroke: "#c0c0c0",
          lineDash: [2, 2]
        }
      });

      chart.annotation().line({
        start: ["-20%", "37.8%"],
        end: ["100%", "37.8%"],
        style: {
          stroke: "#c0c0c0",
          lineDash: [2, 2]
        }
      });

      chart.annotation().line({
        start: ["-20%", "62.8%"],
        end: ["100%", "62.8%"],
        style: {
          stroke: "#c0c0c0",
          lineDash: [2, 2]
        }
      });

      chart.annotation().line({
        start: ["-20%", "81.5%"],
        end: ["100%", "81.5%"],
        style: {
          stroke: "#c0c0c0",
          lineDash: [2, 2]
        }
      });
      chart.interaction("element-active");
      chart.render();
    }
  }
};
</script>

