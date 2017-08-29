<template>
  <div id="freeorderwrap">
    <Headers></Headers>
    <div class="freedaywrap">
      <div class="freebannerbox">
        <img src="http://images.cheertea.com/freeboxbanner.png" alt="">
      </div>
      <h2>活动说明</h2>
      <p class="text">从2017年5月20日起，每月的20日均为“巨柚”商城抽免单日</p>
      <div class="content">
        <h3>在活动当天，都将抽出上个月某个自然日为免单日，当日的所有消费均免单。</h3>
        <h4>这样的好消息，快点击右上角，分享给小伙伴吧！</h4>
        <h6>注：具体日期请关注本页面。</h6>
      </div>
      <h2>巨柚免单日</h2>
      <div class="datebox">
        <!--<div class="calendar"></div>-->
        <div id="container2"></div>
      </div>
      <h5 id="months">本月免单日：7月10号</h5>
    </div>
    <Footers></Footers>
  </div>
</template>
<script>
    // 导入组件
    import Headers from '@/components/common/commonHeader.vue'
    import Footers from '@/components/common/commonFooter.vue'

    //导入scss插件
    import '@/assets/css/common/calendar.scss'

    //导入js插件
    import '@/assets/js/tools/calendar'

    export default {
      data() {
        return {

        }
      },
      components: {
        Headers,
        Footers
      },
      mounted() {
        this.$http.get('lucky/getLuckyDayList.action', { withCredentials: true })
          .then(m => {
            console.log(m);

            var objArr = [];
            var times = [];
            var timesss = [];
            var len = m.data.res_data.luckyDayList.length;

            $.each(m.data.res_data.luckyDayList, function(i) {
              var obj = {};

              var timess = (m.data.res_data.luckyDayList[i].lucky_message).replace(/-/gi, "/");

              obj["stamp"] = +new Date(timess + " 00:00");
              obj["className"] = "able2";
              timesss.push(+new Date(timess + " 00:00"));
              objArr[i] = obj;
            });

            timesss.sort(function(a, b) {
              return b - a;
            });

            new Calendar({

              // 用户传入实际的数据
              container: 'container2',
              angle: 14,
              isMask: false, // 是否需要弹层
              beginTime: [2017, 4, 1],//如空数组默认设置成1970年1月1日开始,数组的每一位分别是年月日。
              endTime: [2020, 12, 31],//如空数组默认设置成次年12月31日,数组的每一位分别是年月日。
              recentTime: [2017, m.data.res_data.luckyDayList[0].lucky_message.split("-")[1], 1],//如空数组默认设置成当月1日,数组的每一位分别是年月日。
              isSundayFirst: true, // 周日是否要放在第一列
              isShowNeighbor: true, // 是否展示相邻月份的月尾和月头
              isToggleBtn: true, // 是否展示左右切换按钮
              isChinese: true, // 是否是中文
              monthType: 0, // 0:1月, 1:一月, 2:Jan, 3: April
              canViewDisabled: false, // 是否可以阅读不在范围内的月份
              beforeRenderArr: objArr,
              success: function (item, arr) {

              },
              switchRender: function (year, month, cal) {
                var data = objArr;
                cal.renderCallbackArr(data);
              }
            });
          })
          .catch(m => {
            console.log(m.data);
          });
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
  .freedaywrap {
    width: 100%;
    padding-top: 1.39rem;
    .freebannerbox {
      width: 100%;
      height: 5rem;
      border-bottom: .15625rem solid #f5f5f5;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    h2 {
      width: 100%;
      height: 1.375rem;
      line-height: 1.375rem;
      font-size: .46875rem;
      font-weight: bold;
      text-align: center;
      color: #1a1a1a;
      border-bottom: .015625rem solid #e5e5e5;
    }
    .text {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      background: #ff7ba4;
      font-size: .3125rem;
      text-align: center;
      color: #fff;
    }
    .content {
      width: 83%;
      height: 2.96875rem;
      padding: .703125rem 8.5%;
      background: #fdebeb;
      border-bottom: .234375rem solid #f5f5f5;
      h3 {
        width: 100%;
        padding-bottom: .46875rem;
        font-size: .375rem;
        line-height: .625rem;
        color: #ff7ba4;
      }
      h4 {
        width: 100%;
        padding-bottom: .390625rem;
        font-size: .375rem;
        text-align: center;
        color: #ff7ba4;
      }
      h6 {
        width: 100%;
        font-size: .28125rem;
        text-align: center;
        color: #999;
      }
    }
    .datebox {
      width: 100%;
      padding-top: .3125rem;
    }
    #months {
      width: 100%;
      height: 150px;
      padding-bottom: 2.34375rem;
      line-height: 150px;
      font-size: .375rem;
      font-weight: 400;
      text-align: center;
      color: #ff7ba4;
    }
  }
  .able2 {
    background: #ff7ba4 !important;
    color: #fff !important;
  }
</style>
