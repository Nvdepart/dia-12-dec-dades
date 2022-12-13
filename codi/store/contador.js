export const state = () =>({
    contador:0,
    numeroDeClicks:0,
})

export const getters ={
  
    getContador(state){
        return state.contador
    },
    getNumeroDeClicks(state){
        return state.numeroDeClicks
    }
}

export const mutations = {
    incrementar(state) {
      state.contador ++
      state.numeroDeClicks ++
    },
    decrementar(state){
        state.contador --
        state.numeroDeClicks --
    }
  }