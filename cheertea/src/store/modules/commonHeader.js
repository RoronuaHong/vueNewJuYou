export const state = {
  title: {
    Index: "巨柚",
    Classify: "分类",
    Car: "购物车",
    Personcenter: "个人中心"
  }
}

//变化
export const mutations = {
  title(state) {
    console.log(state.title);
  }
}

//显示名
export const getters = {
  title: (state) => {
    return state.title;
  }
}
