<script setup lang="ts"></script>

<template>
  <router-view #default="{ Component }">
    <keep-alive :max="10">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped>
p {
  color: $danger;
}
</style>
