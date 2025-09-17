<script setup>

import {onMounted, ref} from "vue";
import FichaUsuario from "@/components/FichaUsuario.vue";

const listaUsuarios = ref([])

onMounted(() => {
  fetch('https://randomuser.me/api/?results=10')
      .then((resp) => resp.json())
      .then(data => {
        let datos = data.results;
        //Recorremos los datos de los usuarios
        //entregados por randomuser.me
        for (let usuario of datos) {
          //Generamos un nuevo objeto de usuario
          //en el array con los datos necesarios
          //recogiéndolos en la forma adecuada
          let datosUsuario = {
            foto: usuario.picture.large,
            nombre: usuario.name.first,
            apellido: usuario.name.last,
            email: usuario.email,
            calle: usuario.location.street.name + ", " +
                usuario.location.street.number,
            ciudad: usuario.location.city,
            estado: usuario.location.state
          }
          //Añadimos el usuario al array
          listaUsuarios.value.push(datosUsuario);
        }

      })
      .catch(error => {
        console.log("Error al obtener los usuarios: " + error);
      });
});

</script>

<template>
<section>
  <!-- Se crean tantas fichas de usuario como
  usuarios haya en el array los datos que se envían
  al componente salen de los datos del usuario en el array-->
  <FichaUsuario v-for="(usuario, index) in listaUsuarios" :key="index"
    :foto="usuario.foto" :nombre="usuario.nombre"
    :apellido="usuario.apellido" :email="usuario.email"
    :calle="usuario.calle" :ciudad="usuario.ciudad"
    :estado="usuario.estado"
  />
</section>
</template>

<style scoped>
section{
  text-align: center;
}
</style>