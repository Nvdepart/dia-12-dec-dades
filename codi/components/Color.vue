<template>
    <div  @click="colorClick" style="height:200px;background-color:aqua">
        
        <v-btn @click="canviarColor('light')" fab >Light</v-btn>
        <v-btn @click="canviarColor('dark')" fab dark>Dark</v-btn>
        <v-btn @click="canviarColor('green')" fab style="background:green">Green</v-btn>
    
    </div>
</template>
<script>
    export default{
        methods:{
            canviarColor(nouColor){
                this.$emit('canviColorComponent',nouColor)
            },
            colorClick(e){
                console.log(e)
            }
        }
    }
</script>