<template>
  <section>
    <p>Elige el color</p>
    <input type="color" @input="$emit('cambioColor', color);" v-model="color">
  </section>
</template>

<script setup>
import { ref } from "vue";
defineEmits(["cambioColor"]);
const color = ref("#000000");
</script>

