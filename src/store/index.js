import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

let config = {
  headers: {
    'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
    'X-RapidAPI-Key': '211f6fcafbmsh50ac3963021fb06p126b20jsn24993f83151c'
  }
};

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    callApi({ commit, state }, payload) {
     
      return new Promise((resolve, reject) => {
        axios
          .get(  'https://randomuser.me/api/',  payload)
          .then(function (response) {
            resolve(response);
          });
      });
    }
  },
  modules: {
  }
})
