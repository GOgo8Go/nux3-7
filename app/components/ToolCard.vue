<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  icon?: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="tool-card">
    <div class="tool-card-content">
      <div class="tool-card-icon">
        <Icon :icon="icon || 'material-symbols:tools'" class="icon" />
      </div>
      <div class="tool-card-text">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
