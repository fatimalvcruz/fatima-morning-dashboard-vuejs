<template>

    <div class="container" v-if="loaded">
    
    <div v-if="datosNasa.media_type == 'video'">
            <div class="video">
                <iframe class="responsive-iframe" :src="datosNasa.url"></iframe>
            </div>    
        </div>
        <div v-else>
            <div class="form-check form-switch mt-3" >
                <input class="form-check-input" type="checkbox"  @change="toggleParallax"/>
                Fijar la imagen
            </div>
            <div :class="toggleclassParallax" id="move">
                <div class="parallax" :style="`background-image: url(${datosNasa.url});`"></div>
                <img :src="datosNasa.url" class="img-fluid fija" />
            </div>
        </div>

        <figure class="figure">
                <figcaption class="figure-caption"> {{datosNasa.title}}  </figcaption>
        </figure>
        <figure class="figure">
                <figcaption class="figure-caption"> {{datosNasa.explanation}} </figcaption>
        </figure>

        </div>
    <div v-else class="text-center">     
        <b-button variant="rosita" disabled>
            <b-spinner small type="grow"></b-spinner>
                Loading...
        </b-button>
    </div>
        
   
</template>


<script>
import axios from "axios";


export default {
    name: 'Nasa',
   
    data() {
        return {
          datosNasa: {},
          toggleclassParallax: 'on',
          loaded: false,
      
        }
    },
    methods:{
        async fetch(){
            const datos = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=YX8T5dmW2tFM4c6lYkkdcbfs8xgVSeSZV3AZVO3h`)
            this.datosNasa = datos.data;
            this.loaded = true
            console.log(this.datosNasa)
        },
        toggleParallax(){
             this.toggleclassParallax = (this.toggleclassParallax == 'on') ? 'off' : 'on' 


           /*   if (this.toggleclassParallax == 'on') {
                 this.toggleclassParallax = 'off'
            }else {
                this.toggleclassParallax = 'on'
            }  */

        },
    
    },
    created(){
        this.fetch()
    }
}
  
        
    
</script>

<style scoped>
.parallax {
    /* Set a specific height */
    min-height: 500px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.fija { width: 100%; }
.on .fija { display: none; }
.off .parallax { display: none; }

.video {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}




</style>
