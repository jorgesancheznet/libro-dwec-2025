<script setup>
import { ref } from "vue";
import CuadroAnadirLista from "@/components/CuadroAnadirLista.vue";
import ItemLista from "@/components/ItemLista.vue";
// Array que almacena las tareas
const listaTareas = ref([]);
// Controla si se muestra el error de duplicado
const errorDuplicado = ref(false);

// Lleva la tarea a la primera posición de la lista
const primeraTarea = (tarea) => {
  const index = listaTareas.value.indexOf(tarea);
  if (index > 0) {
    // Eliminamos la tarea de su posición actual
    listaTareas.value.splice(index, 1);
    // La añadimos al principio de la lista
    listaTareas.value.unshift(tarea);
  }
}


// Añade una tarea a la lista
const anadir = (tarea) => {
  if(listaTareas.value.indexOf(tarea) === -1 ) {
    //No permitimos duplicados
    errorDuplicado.value = false;
    listaTareas.value.push(tarea);
  }
  else{
    errorDuplicado.value = true;
  }
};


// Sube una tarea en la lista
const subirTarea = (tarea) => {
  const index = listaTareas.value.indexOf(tarea);
  if (index > 0) {
    // Intercambiamos la tarea con la anterior
    const temp = listaTareas.value[index - 1];
    listaTareas.value[index - 1] = listaTareas.value[index];
    listaTareas.value[index] = temp;
  }
}

// Baja una tarea en la lista
const bajarTarea = (tarea) => {
  const index = listaTareas.value.indexOf(tarea);
  if (index !== -1 && index < listaTareas.value.length - 1){
    // Intercambiamos la tarea con la siguiente
    const temp = listaTareas.value[index + 1];
    listaTareas.value[index + 1] = listaTareas.value[index];
    listaTareas.value[index] = temp;
  }
}

// Quita una tarea de la lista
const quitarTarea = (tarea) => {
  const index = listaTareas.value.indexOf(tarea);
  if (index !== -1) {
    listaTareas.value.splice(index, 1);
  }
};
// Quita el mensaje de error de duplicado
const borrarError = () => {
  errorDuplicado.value = false;
};

</script>

<template>
  <section id="listaTareas">
    <h1>Lista de tareas</h1>
    <CuadroAnadirLista @anadirTarea = "anadir" @enFoco="borrarError"/>
    <section id="contenedorLista">
     <ItemLista :textoTarea="tarea"
        v-for="(tarea, index) in listaTareas" :key="index"
        @primero="primeraTarea"
        @quitar="quitarTarea"
        @subir="subirTarea"
        @bajar="bajarTarea"
     />

    </section>
    <section id="error" v-if="errorDuplicado">
      <p>La tarea ya existe en la lista</p>
    </section>
  </section>
</template>

<style scoped>
#error{
  background-color: red;
  color:white;
  font-weight: bold;
}
h1{
  font-family: sans-serif;
  font-weight: 700;
  text-align: center;
  color:teal;
  font-size:3em;
}
</style>
