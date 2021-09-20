import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        forecast: {}, 
        loading: true,
    },
    mutations: {
        setForecast(state, payload){
            state.forecast=payload;
        },
        setLoading (state, payload){
            state.loading=payload;
        }
    },
    actions: {
        async fetch ({commit}) {
            const datos = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=2022,%20AU&appid=fed2bc6f945d6bc9b0d0ede3a10fb4be&units=metric&cnt=10&lang=es`)

            const current = new Date();
            const dateReference = new Date(Date.UTC(current.getFullYear(),current.getMonth(),current.getDate(),'20','0','0'));

            const choosenData = datos.data.list.find(el => new Date(el.dt*1000).getTime() >= dateReference.getTime())
            if (choosenData ) {
                commit('setForecast', choosenData)
            } else {
                commit('setForecast', datos.data.list[0])
            }

            commit('setLoading', false);
        },
    },
    modules: {
    }
})