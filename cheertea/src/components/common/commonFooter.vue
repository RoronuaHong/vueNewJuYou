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
            <em class="emnum" v-if="item.num > 0">{{ item.num }}</em>
            {{item.names}}
          </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>

    //导入组件
    import { Tabbar, TabItem } from 'mint-ui';

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
                names: "购物车",
                num: "0"
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
      mounted() {
        /*获取购物车数据*/
        this.getCatNum();
      },
      methods: {
        goTo(path) {
          this.active = path;
          this.$router.replace(path);
        },
        /*获取登陆后购物车的下标*/
        getCatNum() {
          this.$http.get("member/cart!getNum.do", { withCredentials: true })
            .then(m => {
              (m.data.res_code === 1) && (this.footData[2]["num"] = m.data.res_data.num);
              console.log(this.footData[2]["num"])
            })
            .catch(m => {
//              console.log(m.data);
            });
        }
      },
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .emnum {
    position: absolute;
    top: .05rem;
    right: .85rem;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    font-size: .15rem;
    background: #d82619;
    color: white;
    border-radius: 50%;
  }
</style>

