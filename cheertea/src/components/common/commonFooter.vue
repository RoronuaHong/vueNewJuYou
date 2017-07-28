<template>
    <div id="footers">
      <mt-tab-container v-model="active">
      </mt-tab-container>
      <mt-tabbar fixed v-model="active">
          <mt-tab-item
            v-for="item in footData"
            :key="item.id"
            :id="item.id"
            @click.native="goTo(item.id)"
          >
            <img
              slot="icon"
              :key="item.id"
              :src="item.src"
              v-if="!(active == item.id)"
            >
            <img
              slot="icon"
              :key="item.id"
              :src="item.srcsel"
              v-if="active == item.id"
            >
            {{item.names}}
          </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>

    //导入组件
    import { Tabbar, TabItem } from 'mint-ui';
//    import { TabContainer, TabContainerItem } from 'mint-ui';
    //import { Toast } from 'mint-ui';

    //Vue.component(TabContainer.name, TabContainer);
    //Vue.component(TabContainerItem.name, TabContainerItem);

    export default {
        data() {
            return {
              active: this.$route.path,
//              active: ["index", "classify", "car", "personcenter"],
              footData: [
                {
                  id: "/index",
                  src: "/static/images/footerbg1.png",
                  srcsel: "/static/images/footerbg11.png",
                  names: "首页"
                },
                {
                  id: "/classify",
                  src: "/static/images/footerbg2.png",
                  srcsel: "/static/images/footerbg22.png",
                  names: "分类"
                },
                {
                  id: "/car",
                  src: "/static/images/footerbg3.png",
                  srcsel: "/static/images/footerbg33.png",
                  names: "购物车"
                },
                {
                  id: "/personcenter",
                  src: "/static/images/footerbg4.png",
                  srcsel: "/static/images/footerbg44.png",
                  names: "个人中心"
                }
              ]
            }
        },
        methods: {
          goTo: function(path) {
            this.active = path;
            this.$router.replace(path);
          }
        }
//        watch: {
//          $route: function (route) {
//
////            var query = route.query;
////            console.log(query);
////            this.page = query.page;
//          },
//        }
    }
</script>
<!--&lt;!&ndash; 样式代码 &ndash;&gt;-->
<!--<style>-->
  <!--.mint-tabbar > .mint-tab-item.is-selected {-->
    <!--color: #0f0;-->
  <!--}-->
<!--</style>-->
