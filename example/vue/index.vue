<script setup lang="ts">
import { ref } from 'vue';
import './App.vue';
import React from 'react';
import fs from 'fs';

defineProps({
  name: {
    type: String,
  },
});

const emit = defineEmits(['update:name']);

const todoItems = ref([{ id: 1, done: false, text: '' }]);
const message = ref('Hello World');
const sumVueValue = ref(0);
const add = (value: number) => {
  sumVueValue.value += value;
};
const test = () => {};
</script>

<template>
  <div class="add-button" @click="add(2)">
    {{ message }} - {{ sumVueValue }}
  </div>
  <ul class="todo-list">
    <li
      v-for="(todo, index) in todoItems"
      :key="todo.id"
      class="todo-item"
      :class="{ 'todo-item--done': todo.done }"
      @click="todo.done = !todo.done"
    >
      <span v-if="todo.done">✓</span> {{ todo.text }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.declaration-order {
  /* Positioning */
  position: absolute;
  z-index: 10;

  /* Box Model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  color: #888;
  font:
    normal 16px Helvetica,
    sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
  inset: 0;
}
</style>
