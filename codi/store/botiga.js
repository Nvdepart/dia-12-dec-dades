export const state = () =>({
    productes:[],
    usuari:{
        informacioPersonal:{},
        informacioFacturacio:{},
        informacioEnviament:{}
    }
})

export const getters ={
    numeroDeProductes(state){
        return state.productes.length
    },
    getProductes(state){
        return state.productes
    },
    usuari(state){
        return state.usuari
    }
}

export const mutations = {
    afegirProducte(state,payload) {
      state.productes.push(payload)
    },
    buidarCistella(state){
        state.productes = []
    }
  }