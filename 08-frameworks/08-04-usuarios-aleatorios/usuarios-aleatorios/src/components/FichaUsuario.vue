<script setup>
import { ref } from "vue";
//Asignamos las propiedades que puede recibir el componente
//para poder inicializar los datos del usuario
const props = defineProps({
  usuario: {
    type: String,
    default:""
  },
  nombre: {
    type: String,
    default:""
  },
  apellido: {
    type: String,
    default:""
  },
  email: {
    type: String,
    default:""
  },
  calle: {
    type: String,
    default:""
  },
  ciudad: {
    type: String,
    default:""
  },
  estado: {
    type: String,
    default:""
  },
});

// Variables reactivas locales inicializadas con las propiedades
// recibidas

const foto = ref(props.foto);
const nombre = ref(props.nombre);
const apellido = ref(props.apellido);
const email = ref(props.email);
const calle = ref(props.calle);
const ciudad = ref(props.ciudad);
const estado = ref(props.estado);

/**
 * Retorna un texto con la primera letra en mayúscula
 * @param {string} texto
 */
const primeraMayus = (texto)=>{
  if(texto.length===0) return "";
  else
    return  texto[0].toUpperCase() +
      texto.slice(1).toLowerCase();
}

/**
 * Obtiene un nuevo usuario aleatorio de randomuser.me
 * y actualiza los datos del usuario mostrado
 */
const cambiarUsuario = () => {
  fetch('https://randomuser.me/api')
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data)
        let usuario=data.results[0];
        //Modificamos los datos del usuario actual
        foto.value=usuario.picture.large;
        email.value=usuario.email;
        nombre.value=usuario.name.first;
        apellido.value=usuario.name.last;
        calle.value=usuario.location.street.name;
        ciudad.value=usuario.location.city;
        estado.value=usuario.location.state;
      })
      .catch(error=>{
        console.log("Error obteniendo usuario aleatorio: "+error);
      });}

</script>

<template>
<article>
  <!-- Mostramos la foto solo si hay datos -->
  <img :src="foto" alt="foto" v-if="foto.length > 0">
  <p>{{primeraMayus(nombre)}} {{primeraMayus(apellido)}}</p>
  <p>{{email}}</p>
  <p>{{calle}}</p>
  <!-- Mostramos ciudad y estado solo si hay datos -->
  <p v-if="ciudad.length>0"> {{primeraMayus(ciudad)}}, ({{primeraMayus(estado)}})</p>
  <p><button @click="cambiarUsuario">Cambiar</button></p>
</article>
</template>

<style scoped>
  article{
    display:inline-block;
    text-align: center;
    padding:1em;
    font-family: sans-serif;
  }
  article:nth-of-type(odd){
    background-color: lightgray;
  }
  article:hover{
    background-color:rgb(88, 230, 230);
  }
  p{
    margin:0;
  }
</style>