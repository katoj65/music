<template>
<ion-item>
<ion-thumbnail slot="start" v-for="n in 40" :key="n">
<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
</ion-thumbnail>
<ion-label>
Thumbnail Item
</ion-label>
</ion-item>
</template>
<script>
import {IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
export default {
components:{
IonItem, IonLabel, IonThumbnail
},

data(){return{





}}


}
</script>