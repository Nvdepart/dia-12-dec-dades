<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <div v-if="numeroDeProductesALaCistella">
              Tens {{numeroDeProductesALaCistella}} 
              productes a la cistella</div>
            <div v-else>La cistella està buida</div>
          </v-col>
        </v-row>
      </v-container>
      <nuxt />

    </v-main>
  </v-app>
</template>

<script>
export default{
  computed:{
    numeroDeProductesALaCistella(){
      return this.$store.getters['botiga/numeroDeProductes']
    }
  }
}
</script>
