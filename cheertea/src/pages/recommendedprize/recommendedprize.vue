<template>
  <div id="recommendedprize">
    <div class="recom-header">
      <img src="http://images.cheertea.com/recommendedbg.jpg" alt="">
      <div class="green-score">
        <img src="http://images.cheertea.com/recom-green.png" alt="">
        <div class="green-score-list">
          <p>绿积分</p>
          <span class="green-score-ps">564</span>
        </div>
      </div>
      <button class="recom-button invite-button" id="recom-btn">立即邀请</button>
      <div class="recom-content">
        <h2>活动规则：</h2>
        <p>邀请人和被邀请人，都获得10个绿积分</p>
        <p>邀请达5人，获得50绿积分+5次抽奖名额</p>
        <div>
          <p>每邀请达5人</p>
          <p>额外获得50绿积分+5次抽奖名额</p>
          <p>本活动最终解释权归巨柚所有！</p>
        </div>
      </div>
    </div>
    <div class="my-prize">
      <p>我的奖励</p>
      <table>
        <thead>
        <tr>
          <th>绿积分</th>
          <th class="prize-num-title">抽奖名额</th>
          <th>成功邀请</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="my-prize-score">564</td>
          <td class="prize-num">0</td>
          <td class="invite-num">0</td>
        </tr>
        </tbody>
      </table>
      <!--<button  class="recom-button visit-button">访问好友，邀请他们</button>-->
      <div></div>
    </div>
    <div class="invite-list">
      <p class="invite-list-title">邀请排行榜</p>
      <div class="invite-list-img">
        <ul>
          <li class="invite-list-second">
            <!--<div class="list-img">-->
            <!--<img src="../recom-list-2.png" alt="" >-->
            <!--<img src="../recomlistbg.png" alt="" class="imglist">-->
            <!--</div>-->
            <!--<div class="list-content">-->
            <!--<p>测试员</p>-->
            <!--<span>成功邀请：40人</span>-->
            <!--</div>-->
          </li>
          <li class="invite-list-first">
            <!--<div class="list-img">-->
            <!--<img src="../recom-list-1.png" alt="" >-->
            <!--<img src="../recomlistbg.png" alt="" class="imglist">-->
            <!--</div>-->
            <!--<div class="list-content">-->
            <!--<p>测试员</p>-->
            <!--<span>成功邀请：40人</span>-->
            <!--</div>-->
            <div class="list-img"><img src="http://images.cheertea.com/recom-list-1.png" alt=""><img src="http://wx.qlogo.cn/mmopen/3ADuyqKdOCSpVdLgXPnaPicTrX9gYdQic78by1p6ibL4ok0EkGH92sRrJJ6trkVTEYuzWWNlBUkohMDAUhF9RpoPtZIlxl6qd50/0" alt="" class="imglist"></div><div class="list-content"><p>dj</p><span>成功邀请：1人</span></div></li>
          <li class="invite-list-third">
            <!--<div class="list-img">-->
            <!--<img src="../recom-list-3.png" alt="" >-->
            <!--<img src="../recomlistbg.png" alt="" class="imglist">-->
            <!--</div>-->
            <!--<div class="list-content">-->
            <!--<p>测试员</p>-->
            <!--<span>成功邀请：40人</span>-->
            <!--</div>-->
          </li>
        </ul>
      </div>
      <div class="invite-list-table">
        <table>
          <thead>
          <tr>
            <th>排行</th>
            <th>头像</th>
            <th>昵称</th>
            <th>邀请人数</th>
          </tr>
          </thead>
          <tbody class="invite-list-people">
          <!--<tr>-->
          <!--<td>4</td>-->
          <!--<td><img src="../recommendedbg.jpg" alt="" ></td>-->
          <!--<td>风清豆腐彻底超过</td>-->
          <!--<td>10</td>-->
          <!--</tr>-->
          </tbody>
        </table>
        <a href="javascript:;">查看更多 &gt;</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  body {
    display: block;
    background: #e4be9f;
  }
  .recom-header {
    position: relative;
    font-size: 0;
  }
  .recom-header img {
    width: 100%;
  }
  .green-score {
    width: 80%;
    position: absolute;
    left: 50%;
    top: 32%;
    transform: translate(-50%,0);
  }
  .green-score img {
    width: 100%;
  }
  .green-score-list {
    position: absolute;
    top: 13.5%;
    right: 25%;
    text-align: center;
    p {
      color: #0bc13e;
      font-size: .625rem;
      margin-bottom: .4375rem;
    }
    span {
      display: inline-block;
      color: #333;
      font-size: .9375rem;
    }
  }
  .invite-button {
    position: absolute;
    top: 58%;
    left: 50%;
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0);
    font-size: .328125rem;
    -webkit-transform: translate(-50%,0);
  }
  .invite-button {
    position: absolute;
    top: 58%;
    left: 50%;
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0);
    font-size: .328125rem;
    -webkit-transform: translate(-50%,0);
  }
  .recom-button {
    width: 80%;
    height: .96875rem;
    border: none;
    background: #ef7c21;
    outline: 0;
    color: #fff;
    border-radius: .125rem;
    -webkit-box-shadow: 0 -0.046875rem 0.078125rem rgba(0,0,0,.3) inset;
    box-shadow: 0 -0.046875rem 0.078125rem rgba(0,0,0,.3) inset;
  }
  .recom-content {
    color: #ef7c21;
    text-align: center;
    position: absolute;
    top: 68%;
    width: 100%;
    h2 {
      font-weight: 400;
      font-size: .46875rem;
      margin: 0 0 .4375rem;
    }
    p {
      font-size: .375rem;
      line-height: .65625rem;
    }
    div {
      color: #333;
      margin: .46875rem 0 0;
      p {
        line-height: .5625rem;
        font-size: .3125rem;
      }
    }
  }
  .my-prize {
    p {
      color: #fff;
      font-size: .5625rem;
      height: 1.25rem;
      text-align: center;
      line-height: 1.25rem;
      background: #ef7c21;
      width: 100%;
    }
    table {
      width: 100%;
      font-size: .375rem;
      border-collapse: collapse;
      color: #1a1a1a;
      background: #ffecdc;
    }
    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }
    .prize-num, .prize-num-title {
      border-left: .015625rem solid #ef7c21;
      border-right: .015625rem solid #ef7c21;
    }
    tr {
      text-align: center;
      height: .96875rem;
      border-bottom: .015625rem solid #ef7c21;
      th {
        text-align: center;
      }
    }
  }
  .invite-list {
    .invite-list-title {
      font-size: 36px;
      color: #4d4d4d;
      text-align: center;
      margin: 67px 0 0 0;
      letter-spacing: 3px;
    }
    .invite-list-img {
      width:100%;
      height: 258px;
      margin: 58px 0 0 0;
      background:url("http://images.cheertea.com/recomlistbg.png") no-repeat;
      background-size:100%;
    }
    ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      padding: 24px 0 0;
      li {
        position: relative;
        text-align: center;
        .list-img {
          position: relative;
        }
        div {
          margin-top: 12px;
        }
        .imglist {
          position: absolute;
          bottom: .09375rem;
          width: 1.70625rem;
          height: 1.70625rem;
          border-radius: 50%;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
      p {
        font-size: .3125rem;
        color: #1a1a1a;
        line-height: .4375rem;
      }
      span {
        font-size: .3125rem;
        color: #ef7c21;
      }
    }
  }
  .invite-list-table {
    width: 100%;
    background: #ffecdc;
    padding-top: 1.5625rem;
    table {
      width: 95%;
      text-align: center;
      font-size: .375rem;
      margin: 0 2.5%;
      border-collapse: collapse;
      table-layout: fixed;
      tr {
        height: .9375rem;
      }
      th {
        text-align: center;
        width: 25%;
      }
    }
    a {
      font-size: .375rem;
      color: #1a1a1a;
      display: block;
      text-align: center;
      padding: .640625rem 0 1.03125rem;
    }
  }
</style>
