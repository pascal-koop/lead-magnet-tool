<script setup lang="ts">
interface DownloadPreviewProps {
  title: string;
  subtitle: string | null;
  previewImage: string | null;
}
const props = defineProps<DownloadPreviewProps>();
const imageUrl = computed(() => {
  if (props.previewImage === null) {
    return `/img/dummy.png`;
  } else {
    return `/image/${props.previewImage}`;
  }
});
</script>

<style></style>

<template>
  <section class="preview">
    <img class="preview-image" :src="imageUrl" alt="download preview image" />
    <div class="preview-inner">
      <h1 class="preview-title">{{ title }}</h1>
      <p v-if="subtitle" class="preview-subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>
