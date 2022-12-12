<template>
    <div>
        <v-carousel>
            <v-carousel-item
              v-for="(imatge, i) in imatgesFiltraPerColor"
              :key="imatge.img"
            >
              <v-img
                :src="imatge.img"
                align="center"
                max-height="80%"
                max-width="80%"
                contain
              >
              </v-img>
            </v-carousel-item>
          </v-carousel>
    </div>
</template>
<script>
export default{
    props:['imatges','color'],
    computed:{
        imatgesFiltraPerColor(){
            var self = this
            if(this.imatges){
                    return this.imatges.filter((imatge)=>{
                    console.log("this",this)
                    console.log("self",self)
                    if(imatge.color == self.color){
                        return true
                    }
                })
            }else{
                return {}
            }
            
        }
    }
}
</script>