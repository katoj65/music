<template>
<layout-component :title="title">

<ion-grid>
  <ion-row>
    <ion-col size="6" style="padding:0;" v-for="n in 12" :key="n">


<ion-card style="margin:2px;">
  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
  </ion-card-content>
</ion-card>


    </ion-col>

  </ion-row>
</ion-grid>

</layout-component>
</template>
<script>
import LayoutComponent from '@/components/LayoutComponent.vue';
  import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader,  } from '@ionic/vue';
export default{
components:{
LayoutComponent,
IonCol,
IonGrid,
IonRow,
IonCard,
IonCardContent,
IonCardHeader
},
data(){return{
title:'Album',




}}



}
</script>
