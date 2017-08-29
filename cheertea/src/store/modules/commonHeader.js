export const state = {
  title: {
    Classify: "分类",
    Car: "购物车",
    Personcenter: "个人中心",
    Healthmuseum: "养生馆",
    Focusqrcode: "关注公众号",
    Login: "登录",
    Freeorder: "免单日"
  }
}

//显示名
export const getters = {
  title: (state) => {
    return state.title;
  }
}
