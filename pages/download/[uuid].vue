<script setup lang="ts">
const route = useRoute();
onMounted(async () => {
  const fileUrl = computed(() => `/downloads/${route.params.uuid}`);
  window.location.href = fileUrl.value;
});
</script>

<style></style>

<template>
</template>
