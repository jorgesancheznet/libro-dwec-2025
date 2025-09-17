<script setup>
import SeleccionColor from "@/components/SeleccionColor.vue";
const cambiarColorTitulo = (col) => {
  document.getElementById("titulo1").style.color = col;
};
</script>

<template>
  <h1 id="titulo1">Ejemplo de componente</h1>
  <SeleccionColor @cambioColor="cambiarColorTitulo" />
</template>