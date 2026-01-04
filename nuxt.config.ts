export default defineNuxtConfig({
  srcDir: 'app/',   // ← 保持不变，必须有
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
 

  // ← 新增这一段，支持 Cloudflare Pages
  nitro: {
    preset: 'cloudflare_pages_static'
  }
})
