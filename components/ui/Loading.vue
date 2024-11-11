<template>
  <svg class="loading-icon" width="20" height="20" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="60,60"
      stroke-dashoffset="0">
      <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s"
        repeatCount="indefinite" />
    </circle>
  </svg>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.loading-icon
  animation: spin 2s linear infinite

@keyframes spin 
  0% 
    transform: rotate(0deg)
  100% 
    transform: rotate(360deg)
</style>