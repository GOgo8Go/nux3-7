export default defineNuxtConfig({
  srcDir: 'app/',   // 你的源码在 app/ 子目录，必须保留

  devtools: { enabled: true },

  css: ['./assets/css/main.css'],  // 你的主样式文件

  modules: [
    '@nuxtjs/i18n',            // 多语言模块
  ],

  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', name: '简体中文' },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'ja', iso: 'ja-JP', name: '日本語' },
      { code: 'ko', iso: 'ko-KR', name: '한국어' },
    ],
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts',
  },

  // 纯静态部署配置（推荐用于当前测试阶段，样式 100% 正常）
  nitro: {
    preset: 'cloudflare_pages_static',

    prerender: {
      crawlLinks: false,                  // 关闭自动爬取链接，避免未完成页面导致构建失败
      failOnError: false,                 // 可选：即使个别路由出错也不中断构建

      routes: [
        '/',                                // 首页（中文，默认语言）
        '/image-compress',                  // 图片压缩页面
        '/gif-compress',                    // GIF 压缩页面

        // 多语言版本（确保切换语言后这些页面也正常）
        '/en',
        '/en/image-compress',
        '/en/gif-compress',

        '/ja',
        '/ja/image-compress',
        '/ja/gif-compress',

        '/ko',
        '/ko/image-compress',
        '/ko/gif-compress',
      ],
    },
  },
})
