<template>
 <ion-page>
    <ion-header class="ion-no-border">

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-button>
       <ion-icon slot="icon-only" :icon="menuOutline"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>
  {{ title==null?name:title }}
  </ion-title>
  <ion-buttons slot="end">
    <ion-button @click="navigate('/search')">
       <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
    </ion-button>
      <ion-button>
       <ion-icon slot="icon-only" :icon="notifications"></ion-icon>
    </ion-button>
      <ion-button>
       <ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>




    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>








<slot></slot>
<fab-component></fab-component>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,  } from '@ionic/vue';
  import { menuOutline, searchOutline,ellipsisVertical, notifications } from 'ionicons/icons';
import FabComponent from '@/components/FabComponent.vue';
export default {
props:{
title:null
},

setup(){return{
menuOutline,
searchOutline,
ellipsisVertical,
notifications

}},

components:{
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
FabComponent,
IonButtons,
IonButton,
// IonIcon



},
data(){return{
name:'HiPitch',


}},
methods:{
navigate(item){
this.$router.push(item);
}




}
}
</script>