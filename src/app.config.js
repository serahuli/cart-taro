export default {
  pages: [
    'pages/home/home',
    'pages/cart/cart',
    'pages/profile/profile',
    'pages/type/type'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#cdcdcd',
    selectedColor: '#963137',
    list: [{
      pagePath: "pages/home/home",
      text: "首页",
      iconPath: 'static/img/home.svg',
      selectedIconPath: 'static/img/home_active.svg'
    }, {
      pagePath: "pages/type/type",
      text: "分类",
      iconPath: 'static/img/type.svg',
      selectedIconPath: 'static/img/type_active.svg'
    }, {
      pagePath: "pages/cart/cart",
      text: "购物车",
      iconPath: 'static/img/cart.svg',
      selectedIconPath: 'static/img/cart_active.svg'
    }, {
      pagePath: "pages/profile/profile",
      text: "我的",
      iconPath: 'static/img/profile.svg',
      selectedIconPath: 'static/img/profile_active.svg'
    }]
  },
}
