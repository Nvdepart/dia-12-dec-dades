<template>
    <div>
        <v-btn @click="incrementar()">Sumar

        </v-btn>
        <v-btn @click="decrementar()">Restar

        </v-btn>
    </div>
</template>

<script>
    export default{
        methods:{
            incrementar(){
                 this.$store.commit('contador/incrementar')
                 //this.$store.commit('contador/incrementarthisNumeroDeClicks')
        },
            decrementar(){
                this.$store.commit('contador/decrementar')
        },
    }
}
</script>