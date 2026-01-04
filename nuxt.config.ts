export default defineNuxtConfig({
  srcDir: 'app/',   // 必须保留

  devtools: { enabled: true },

  css: ['./assets/css/main.css'],

  modules: [
    '@nuxtjs/i18n',
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

  nitro: {
    preset: 'cloudflare_pages_static',

    prerender: {
      crawlLinks: false,          // 不自动爬取新链接
      ignoreErrors: true,         // 关键！忽略 404 等 prerender 错误，继续构建
      failOnError: false,         // 保险起见也加

      routes: [
        '/',
        '/image-compress',
        '/gif-compress',

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
