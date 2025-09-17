<script setup>
defineProps({
  textoTarea: {
    type: String,
    default : ""
  }
});
</script>

<template>
<p>
  <span class='texto' @click="$emit('primero',textoTarea)">
    {{  textoTarea }}</span>
  <a href="#" class="menos"
     @click="$emit('quitar',textoTarea)">quitar</a>
  <a href="#" class="subir"
     @click="$emit('subir',textoTarea)">subir</a>
  <a href="#" class="bajar"
     @click="$emit('bajar',textoTarea)">bajar</a>
</p>
</template>

<style scoped>
p{
  display:list-item;
  list-style-type: disc;
  margin:.5em 0 .5em 1em;
  font-size:2em;
  color:teal;
  font-family:sans-serif;
}

a{
  text-decoration: none;
  border-radius:10px;
  color:white;
  padding-left:.5em;
  margin-left:.2em;
  padding-right:.5em;
  font-size:.5em;
}
a.menos:hover{
  background-color:red;
}

a.menos{
  background-color: brown;
}

a.subir,a.bajar{
  background-color: darkgreen;
}
a.subir:hover,a.bajar:hover{
  background-color:green;
}
</style>