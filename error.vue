<script setup lang="ts">
const props = defineProps({
  error: Object
})
</script>

<template>
  <NuxtLayout>
    <div class="error-handling">
      <h2 class="error-handling-title">{{ error.statusCode }}</h2>
      <p class="error-handling-message">{{ error.message }}</p>
    </div>
  </NuxtLayout>
</template>
