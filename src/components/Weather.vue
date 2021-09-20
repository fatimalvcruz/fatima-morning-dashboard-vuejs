.<template>
  <div class="container bv-example-row" v-if="loading == false">
    <b-row>
      <div class="col-sm-12 col-lg-3" >
             
        <p class="fs-4 ps-1"><b-icon icon="suit-heart" class="rosita"> </b-icon> El día está</p>
        <img :src="`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"  />   
        <p class="Mayu">{{forecast.weather[0].description}}. {{forecast.main.temp}} Grados</p>
      </div>

      <template v-if="forecast.rain == true">
        <div class="col-sm-12 col-lg-6"> 
          <span class="fs-4 ps-1"> <b-icon icon="suit-heart" class="rosita"> </b-icon> Está lloviendo, quizás en un rato se pueda salir a dar un paseo</span> 
           <template>
            <div class="text-md-center">
              <div class="p-4">
                <b-icon class="center rosita" icon="clock" animation="spin" font-scale="4" shift-v="8" ></b-icon>
              </div>
            </div>
          </template>
       
        </div>
      </template>
      <template v-else>
        <div class="col-sm-12 col-lg-6">   
          <span class="fs-4 ps-1"><b-icon icon="suit-heart" class="rosita"> </b-icon> Despierta al cari que nos vamos a dar un paseo</span>
          <template>
            <div class="text-md-center">
              <div class="p-4">
                <b-icon class="center rosita" icon="clock" animation="spin" font-scale="4" shift-v="8" ></b-icon>
              </div>
            </div>
          </template>
        </div>   
        <div class="col-sm-12 col-lg-3">
            <div  v-if="forecast.main.temp < 14">
              <p class="fs-4 ps-1"> <b-icon icon="suit-heart" class="rosita"> </b-icon> Ponte chandal y abrigo</p>
            </div>
            <div  v-else-if="forecast.main.temp >= 14" >
              <p class="fs-4 ps-1"> <b-icon icon="suit-heart" class="rosita"> </b-icon> Ponte solo el chándal</p>
            </div>
            <div  v-else-if="forecast.main.temp >= 21">
              <p class="fs-4 ps-1"><b-icon icon="suit-heart" class="rosita"> </b-icon> Ponte pantalón corto</p>
            </div>
                 <template>
            <div class="text-md-center">
              <div class="p-4">
                   <b-icon icon="emoji-heart-eyes" animation="fade" font-scale="4" class="rosita"></b-icon>
              
             
              
              </div>
            </div>
          </template>
        </div>
      </template>
    </b-row>
  

    <div class="pt-3 mt-4 text-muted border-top"> &copy; By Fatima</div>  
  </div>
 
</template>


<script>

import { mapActions, mapState } from 'vuex';

export default {
    name: 'Weather',
    computed:{
      ...mapState(['forecast', 'loading'])
    },

    data() {
        return {
        }
    },
   methods:{
     ...mapActions(['fetch'])
    },
   async mounted() {
        await this.fetch()
   },
 }
    
</script>
<style scoped>
.Mayu {
  text-transform: capitalize;
}
.rosita {
  color:  #FF1493;
}
</style>