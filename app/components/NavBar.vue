<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const searchQuery = ref('')
const theme = ref('light') // light/dark

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- 左侧 Logo + 站点名 + 导航 -->
      <div class="navbar-left">
        <NuxtLink to="/" class="logo">
          <div class="logo-icon">TS</div>
          <span class="logo-text">ToolSwift</span>
        </NuxtLink>

        <!-- 中文导航 -->
        <nav class="nav-links">
          <NuxtLink to="/" class="nav-link">首页</NuxtLink>
          <NuxtLink to="/image-compress" class="nav-link">图片压缩</NuxtLink>
          <NuxtLink to="/gif-compress" class="nav-link">GIF 压缩</NuxtLink>
          <!-- <NuxtLink to="/category/pdf" class="nav-link">PDF 工具</NuxtLink> -->  <!-- 临时注释 -->
        </nav>
      </div>

      <!-- 右侧工具区 -->
      <div class="navbar-right">
        <!-- 搜索框 -->
        <div class="search-wrapper">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="搜索工具..."
            class="search-input"
          />
        </div>

        <!-- 语言切换 -->
        <select class="lang-select">
          <option value="zh">中文</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
        </select>

        <!-- 主题切换 -->
        <button class="theme-toggle" @click="toggleTheme">
          <Icon :icon="theme==='light' ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'" class="theme-icon" />
        </button>
      </div>
    </div>
  </header>
</template>

