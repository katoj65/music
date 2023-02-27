<template>
<layout-component>
{{ item }}
{{ error }}
</layout-component>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


export default{
components:{
LayoutComponent,


},

data(){return{

item:null,
error:null,


}},




// setup(){
// const getFiles=async ()=>{
// const showFiles= await Filesystem.readFile({
// path:'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
// });
//  console.log('data:', contents);
// return {
// getFiles

// }
// }

methods:{
show(){

const res= Filesystem.readdir({
path: '',
directory: Directory.Documents
});
res.then((response)=>{
this.item=response;
}).catch(error=>{
this.error=error;
});
















}

},

mounted(){
this.show();



}


}

</script>
