<template>
<ion-app>
<ion-router-outlet />
</ion-app>
</template>
<script>
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
export default{
components:{
IonApp,
IonRouterOutlet
},
data(){return{
name:'outlet',



}},

methods:{
statusbar(){
StatusBar.setBackgroundColor({ color: '#FFFFFF' });
}
},
mounted(){
this.statusbar();
}






}
</script>
