<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello World');
const sumVueValue = ref(0);
const add = (value: number) => {
  sumVueValue.value += value;
};
</script>

<template>
  <div @click="add(2)">
    {{ message }} - {{ sumVueValue }}
  </div>
</template>
