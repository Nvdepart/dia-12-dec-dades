<template>
    <div style="font-size:40px">
        {{numero}} - {{numDeClicks}}
    </div>
</template>

<script>
    export default{
        data(){
            return{
                numDeClicks:0
            }
        },
        computed:{
            numero(){
                return this.$store.getters['contador/getContador']
            },
            numeroDeClicks(){
                return this.$store.getters['contador/getNumeroDeClicks']
            }
        },
    watch:{
        numero(newValue,oldValue){
            this.numDeClicks++
        }

    }
}
</script>