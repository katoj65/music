
<template>
<div class="container">
<ion-item v-for="n in 50" :key="n" lines="none">
<ion-thumbnail slot="start">
<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
</ion-thumbnail>
<ion-label>
<h3>Song name</h3>
<p class="gray">20 Mins</p>
</ion-label>
<ion-button fill="clear" @click="presentActionSheet(n)">
<ion-icon :icon="ellipsisVertical" class="gray"></ion-icon>
</ion-button>
</ion-item>
<!-- <code>{{ result }}</code> -->
</div>
</template>
<script>

import { ref } from 'vue';
import { actionSheetController,IonItem, IonLabel, IonThumbnail,IonIcon, IonButton } from '@ionic/vue';
import { ellipsisVertical } from 'ionicons/icons';
export default {
components: { IonButton,IonItem, IonLabel, IonThumbnail,IonIcon },
setup() {
const result = ref('');
const presentActionSheet = async (item) => {
const actionSheet = await actionSheetController.create({
header: 'Action',
// subHeader: 'Example subheader',
buttons: [
{
text: 'Delete',
role: 'destructive',
data: {
action: 'delete',
},
},



{
text: 'Share',
data: {
action: 'share',
},
},

{
text: 'Download',
data: {
action: 'share',
},
},


{
text: 'Comment',
data: {
action: 'share',
},
},


{
text: 'Cancel',
role: 'cancel',
data: {
action: 'cancel',
},
},
],



});

await actionSheet.present();

const res = await actionSheet.onDidDismiss();
result.value = JSON.stringify(res, null, 2);
};

return {
result,
presentActionSheet,
};
},

data(){return{
ellipsisVertical,

}},






};
</script>

<style scoped>
.gray{
color:gray;
}
</style>