<script setup lang="ts">
import ToolCard from '~/components/ToolCard.vue'

// 页面 SEO 信息
const pageTitle = 'ToolSwift - 在线工具集合'
const pageDescription = 'ToolSwift 提供图片压缩、GIF 压缩、去背景、PDF 合并与分割等实用在线工具，一站式优化您的文件处理体验。'
const pageKeywords = '图片压缩,GIF压缩,去背景,PDF合并,PDF分割,在线工具,ToolSwift'
</script>

<template>
  <div class="page-wrapper">

    <!-- SEO Meta -->
    <head>
      <title>{{ pageTitle }}</title>
      <meta name="description" :content="pageDescription" />
      <meta name="keywords" :content="pageKeywords" />

      <!-- Open Graph -->
      <meta property="og:title" :content="pageTitle" />
      <meta property="og:description" :content="pageDescription" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:image" content="https://yourdomain.com/preview-home.png" />

      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" :content="pageTitle" />
      <meta name="twitter:description" :content="pageDescription" />
      <meta name="twitter:image" content="https://yourdomain.com/preview-home.png" />
    </head>

    <!-- 原始页面内容保持不变 -->
    <section class="tools-container">
      <div class="tools-grid">
        <ToolCard
          title="图片压缩"
          desc="快速压缩图片，减小体积不失真"
          icon="material-symbols:image"
          to="/image-compress"
        />
        <ToolCard
          title="GIF 压缩"
          desc="批量压缩 GIF 动图，支持多级别"
          icon="material-symbols:gif-box"
          to="/gif-compress"
        />
        <ToolCard
          title="去背景"
          desc="一键智能抠图，去除背景"
          icon="material-symbols:auto-awesome"
          to="/image-remove-bg"
        />
        <ToolCard
          title="PDF 合并"
          desc="多个 PDF 文件合并成一个"
          icon="material-symbols:merge"
          to="/pdf-merge"
        />
        <ToolCard
          title="PDF 分割"
          desc="按页面分割 PDF 文件"
          icon="material-symbols:content-cut"
          to="/pdf-split"
        />
      </div>
    </section>
  </div>
</template>
