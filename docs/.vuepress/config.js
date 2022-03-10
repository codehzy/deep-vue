module.exports = {
  title: 'Vuejs设计与实现',
  description: 'Vuejs设计与实现阅读',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '小何尖尖角的 JavaScript 博客',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/codehzy?tab=repositories'
          },
          { text: '掘金', link: 'https://juejin.cn/user/1714893872178823' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [{ title: '学前必读', path: '/' }]
      },
      {
        title: '第一章:权衡艺术',
        path: '/handbook/01_artBalance',
        collapsable: false // 不折叠
      },
      {
        title: '第二章:框架核心的设计要素',
        path: '/handbook/02_coreDesign',
        collapsable: false // 不折叠
      },
      {
        title: '第三章:Vue.js3 的设计思路',
        path: '/handbook/03_desginMind',
        collapsable: false // 不折叠
      }
    ],
    subSidebar: 'auto'
  },
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/deep-vue/'
}
