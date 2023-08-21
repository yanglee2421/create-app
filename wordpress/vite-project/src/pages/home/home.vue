<script lang="ts" setup>
import vue from "@/assets/vue.svg";

console.log(vue);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div>home</div>
  <img :src="vue" />
</template>

<style lang="scss" scoped></style>
