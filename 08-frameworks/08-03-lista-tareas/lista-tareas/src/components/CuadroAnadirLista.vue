<script setup>
import { ref } from "vue";
const nuevaTarea = ref("");
const emit = defineEmits(["anadirTarea","enFoco"]);
const anadirTarea = () => {
  if (nuevaTarea.value.trim() !== "") {
    // Emitimos el evento "anadirTarea" solo si el campo no está vacío
    emit('anadirTarea', nuevaTarea.value);
    // Limpiar el campo de entrada después de añadir la tarea
    nuevaTarea.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="anadirTarea">
    <input type="text" id="tarea" placeholder="Nueva tarea"
    v-model="nuevaTarea" @input="$emit('enFoco')"/>
    <button id="mas">+</button>
  </form>
</template>

<style scoped>
input{
  width:87%;
  height:56px;
  font-size:1.8em;
  padding-left:.5em;
  font-family: sans-serif;
  border-radius:10px 0 0 10px;
  border:1px solid brown;
  outline:none;
  color:brown;
  text-align: left;
  float:left;
}

button{
  width:10%;
  height:60px;
  font-size:2em;
  color:white;
  font-family: sans-serif;
  font-weight: 700;
  background-color: brown;
  border-radius: 0 10px 10px 0;
  border:none;
  outline:none;
}

button:hover{
  background-color:red;
}
</style>