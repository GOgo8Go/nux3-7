<!-- app/layouts/default.vue -->
<script setup lang="ts">
// 可以放全局逻辑，比如监听路由变化
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- 顶部导航 -->
    <NavBar />

    <!-- 主要内容区域 -->
    <main class="flex-1 container mx-auto px-4 py-8 max-w-7xl">
      <slot />
    </main>

    <!-- 页脚（先简单占位） -->
    <footer class="py-6 text-center text-sm text-gray-500 border-t mt-auto">
      © 2026 ToolSwift - Free Online Tools
    </footer>
  </div>
</template>

<style scoped>
/* Arco Design 默认有自己的 reset，这里加点 flex 布局 */
.min-h-screen { min-height: 100vh; }
</style>