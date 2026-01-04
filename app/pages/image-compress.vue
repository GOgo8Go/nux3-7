<template>
  <div class="page-container">
    <header class="header">
      <h1>在线图片压缩工具</h1>
      <p>支持点击上传、拖拽图片，所有处理在本地完成，保护隐私</p>
    </header>

    <main class="main-content">
      <div class="upload-area" @dragover.prevent @drop.prevent>
        <input type="file" accept="image/*" id="fileInput" />
        <label for="fileInput">
          📷 点击选择或拖拽图片到这里
        </label>
      </div>

      <div class="preview-placeholder">
        <p>图片预览区域（逻辑待实现）</p>
      </div>
    </main>

    <footer class="footer">
      <p>© 2026 在线图片压缩工具</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// ✅ SEO 设置
useHead({
  title: '在线图片压缩工具 - 支持拖拽和点击上传',
  meta: [
    { name: 'description', content: '免费在线图片压缩工具，支持本地压缩，保护隐私，快速优化图片大小和质量。' },
    { name: 'keywords', content: '图片压缩,在线压缩图片,图片优化,图片处理,免费工具' },
    { name: 'author', content: '你的公司或网站名' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://你的域名.com/image-compress' }
  ]
})
</script>

<style scoped>
/* 之前的 CSS 保持不变 */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  text-align: center;
  padding: 40px 20px;
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1rem;
  color: #555;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.upload-area {
  width: 100%;
  max-width: 600px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 60px 20px;
  text-align: center;
  background: #fafafa;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s;
  margin-bottom: 30px;
}

.upload-area:hover {
  border-color: #0070f3;
  background: #f0f8ff;
}

.upload-area input[type="file"] {
  display: none;
}

.upload-area label {
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;
  display: block;
}

.preview-placeholder {
  width: 100%;
  max-width: 800px;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 1rem;
}

.footer {
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  color: #777;
  font-size: 0.9rem;
}
</style>
