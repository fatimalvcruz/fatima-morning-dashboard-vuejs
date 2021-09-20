<template>
  <div class= "container py-4 border-bottom" > 
     <b-row class="text-md-center" >
        <b-col   class="mb-3 text-md-center">
            <p class="h2 mb-3"> <b-icon icon="flower1" class="rosita"> </b-icon>  Bienvenido a mi página. Hoy es:</p>  
            <p class="h4 mb-4">{{ fecha }}</p>
             <b-button  variant="outline-rosita" class="rosita" @click="displayfrase">Cambiar frase</b-button>
             <p class=  " mt-3 display-6 fst-italic">{{pickupfrase. quote}} </p>
             <p class="my-3 blockquote-footer">{{pickupfrase. autor}}</p>
        </b-col>
     </b-row>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      fecha: '',
      frases:[
        {quote:'La edad no es barrera. Es una limitación que pones en tu mente', autor: 'Walt Disney'},
        {quote:'Piensa, sueña, cree y atrévete', autor: 'Jackie Joyner-Kersee'},
        {quote:'Si puedes soñarlo, puedes hacerlo', autor: 'Walt Disney'},
        {quote:'Para que alguien te tome en serio, primero te tienes que tomar en serio tú', autor: 'Mario Alonso Puig'},
        {quote:'Uno de los ingredientes que aumentan nuestras posibilidades de tener éxito en la vida es el mantener una mentalidad positiva en medio de la dificultad', autor: 'Mario Alonso Puig'},
        {quote:'Cree que puedes y casi lo habrás logrado', autor: 'Theodore Roosevelt'},
        {quote:'Cuando dejo ir lo que soy, me convierto en lo que debería ser', autor: 'Lao Tzu'},
        {quote:'Existe al menos un rincón del universo que con toda seguridad puedes mejorar, y eres tú mismo', autor: 'Aldous Huxley'},
      ], 
      pickupfrase: '',
    }
  },

  props: {
  
    
  },
 
  methods: {
    currentDataTime( ){

        const toTwoDigits = (value) => {
          return ('0'+value.toString()).slice(-2)
        };

      const current = new Date();
      const date= toTwoDigits(current.getDate())+'-'+toTwoDigits(current.getMonth()+1)+'-'+ current.getFullYear();
      const time = toTwoDigits(current.getHours()) + ":" + toTwoDigits(current.getMinutes()) + ":" + toTwoDigits(current.getSeconds());
      const dateTime = date +' '+ time;

      this.fecha = dateTime;
      
      setTimeout(this.currentDataTime, 1000);
      
    }, 
    displayfrase() {
      const  randomfrase = Math.floor(Math.random()*this.frases.length);
      this.pickupfrase = this.frases [randomfrase];
    }

  },

  mounted() {
    this.currentDataTime();
    this.displayfrase();
  }
   
}
</script>

<style scoped>
.rosita {
  color:  #FF1493;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
