<template>
<v-container fluid>
  <v-row>
    <v-col style="padding:0">
        <Hero
        :heroInfo="info.inici">
        </Hero>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6">
      <!--Galeria-->
      <Galeria 
      :imatges="info.galeria"
      :color="colorSelecionat"
      ></Galeria>
    </v-col>
    <v-col cols="12" md="6">
      <!-- Opcions i preus-->
      <!-- <v-radio-group v-model="colorSelecionat">
          <v-radio
            :label="color"
            :value="color"
          v-for="color in info.colors">

          </v-radio>
        </v-radio-group> -->
        <Color
          @canviColorComponent="canviDeColor"
        ></Color>
       <v-spacer></v-spacer>
       <h1 v-if="info.inici">{{info.inici.subtitol}}</h1>
        <div v-if="info.inici" style="font-size:100px">
          {{info.inici.preu}}€</div>
        <v-btn @click="afegirProducteALaCistella">comprar</v-btn>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import dades from '@/dades/dades.js';
console.log(dades)
export default {
  mounted(){
    this.info = dades
  },
  data(){
  return {
    colorSelecionat:"light",
    info:{},
    }  
  },
  methods:{
    canviDeColor(nouColor){
      console.log("l'usuari ha canvait de color",nouColor)
      this.colorSelecionat = nouColor
    },
    afegirProducteALaCistella(){
      console.log(this.info.inici.subtitol)
      this.$store.commit("botiga/afegirProducte",{"producte":this.info.inici.subtitol})
      console.log(this.$store.getters['botiga/getProductes'])
    }
  }
}
</script>
