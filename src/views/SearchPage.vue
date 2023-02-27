<template>
<ion-page>
<ion-header class="ion-no-border">
<ion-toolbar>
<ion-searchbar placeholder="Search for music, artists.."></ion-searchbar>
</ion-toolbar>
</ion-header>
<ion-content>



 <ion-item lines="none" v-for="n in 20" :key="n">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>Item Lines None</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>




</ion-content>
</ion-page>
</template>
<script>
import {IonPage,IonContent, IonHeader, IonSearchbar, IonToolbar,IonIcon, IonItem, IonLabel  } from '@ionic/vue';
 import { informationCircle, star } from 'ionicons/icons';
export default {
components:{
IonPage,
IonContent,
IonHeader,
IonSearchbar,
IonToolbar,
IonIcon,
IonItem,
IonLabel

},
setup(){return{
informationCircle,
star


}}



}
</script>