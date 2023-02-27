<template>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button>
        <ion-icon :icon="chevronUpCircle"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button>
          <ion-icon :icon="document"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="colorPalette"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="globe"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
</template>

<script>
 import { IonFab, IonFabButton, IonFabList, IonIcon, } from '@ionic/vue';
  import { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe } from 'ionicons/icons';
export default {
    components:{
IonFab, IonFabButton, IonFabList, IonIcon,

    },

    setup(){return{

chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe

    }},



}
</script>