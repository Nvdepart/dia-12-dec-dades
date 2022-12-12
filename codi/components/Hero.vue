<template>
    <v-img v-if="heroInfo"
    height="100vh"
    :src="heroInfo.imatge"
    gradients="to top right, rgba(0,0,0,0.33), rgba(0,0,0, 0.7)">
        <v-container
         style="height:100%">
            <v-row style="height:100%" align="center">
                <v-col 
                cols="12" md="4" offset-md="3"
                align="center">
                <h3>{{heroInfo.subtitol}}</h3>
                <h1>{{heroInfo.titol}}</h1>
                <p>{{heroInfo.text}}</p>
                <v-btn v-if="heroInfo.botoType='extern'"
                    target="_blank"
                    :href="heroInfo.botoUrl"
                    style="background-color:yellow color:blue">
                    {{heroInfo.botoText}}</v-btn>
                    <v-btn v-else
                    :to="heroInfo.botoUrl"
                    style="background-color:yellow color:blue">
                    {{heroInfo.botoText}}</v-btn>
                </v-col>
            </v-row>

        </v-container>
    </v-img>
</template>
<script>
    export default{
        props: ["heroInfo"]
    }
</script>