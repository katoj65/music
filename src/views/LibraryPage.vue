<template>
<library-layout>






<ion-card style="margin:0;border-radius:0;padding:0;" v-for="n in 5" :key="n">
<ion-card-header>
<ion-card-title></ion-card-title>
<ion-card-subtitle>Jose Chameleon</ion-card-subtitle>
</ion-card-header>
<ion-card-content style="padding:0;">


<ion-list>

<ion-item lines="none" v-for="n in 20" :key="n">
<ion-thumbnail slot="start">
<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
</ion-thumbnail>
<ion-label>
<h3 style="font-weight:bold;">Song name</h3>
<p>20 minutes</p>
</ion-label>
...
</ion-item>




</ion-list>
</ion-card-content>
</ion-card>






</library-layout>
</template>
<script>
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList, IonThumbnail, IonLabel, IonItem} from '@ionic/vue';
import LibraryLayout from '@/components/LibraryLayout.vue';
export default {
components:{
LibraryLayout,
IonCard,
IonCardContent,
IonCardHeader,
IonCardTitle,
IonList,
IonThumbnail,
IonLabel,
IonItem
}

}
</script>