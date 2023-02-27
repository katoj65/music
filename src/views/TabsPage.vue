<template>
<ion-page>
<ion-tabs>

<ion-router-outlet></ion-router-outlet>




<ion-tab-bar slot="bottom" class="ion-no-border">

<ion-tab-button tab="tab1" href="/tabs/tab1">
<ion-icon :icon="musicalNotes" />
<ion-label>Songs</ion-label>
</ion-tab-button>

<ion-tab-button tab="tab2" href="/tabs/tab2">
<ion-icon :icon="list" />
<ion-label>Playlists</ion-label>
</ion-tab-button>

<ion-tab-button tab="tab3" href="/tabs/tab3">
<ion-icon :icon="albums" />
<ion-label>Album</ion-label>
</ion-tab-button>


<ion-tab-button tab="tab3" href="/tabs/tab3">
<ion-icon :icon="grid" />
<ion-label>Artists</ion-label>
</ion-tab-button>

<ion-tab-button tab="tab5" href="/tabs/tab5">
<ion-icon :icon="library" />
<ion-label>Library</ion-label>
</ion-tab-button>


</ion-tab-bar>
</ion-tabs>
</ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, musicalNotes, listCircleSharp, albums,library,grid,list } from 'ionicons/icons';

export default{
components:{
  IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet
},
setup(){return{
ellipse, square, triangle,
musicalNotes,
listCircleSharp,
albums,
library,
grid,
list
}},





}


</script>
