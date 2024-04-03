<template>
<div class="timeblock">
    <div class="timecard">
        <div class="timename">
         Taiwan
        </div>
        <div class="timearea">
         {{currentTaiwan}}
        </div>
        <div :title="taiwantime">
         <button type="button" class="pressblock" :title="taiwantime"> <!-- @click="gototaiwan" -->
            Taiwan
         </button>
         </div>
        
    </div>
    <div class="timecard">
       <div class="timename">
         Korea
        </div>
        <div class="timearea">
         {{currentKorea}}
        </div>

         <button type="button" class="pressblock" :title="koreatime">          <!--@click="gotokorea" -->
             Korea
         </button>
    </div>
    <div class="timecard">
        <div class="timename">
         Rome
        </div>

        <div class="timearea">
         {{currentRome}}
        </div>

         <button type="button" class="pressblock" :title="rometime">       <!--@click="gotorome"-->
            Rome
         </button>
    </div>
</div>

 <div class="clockarea">
    <div class ="clocktitle">
    click to show the time
    </div>
    <AppClock></AppClock>
    </div>
</template>
<script>
import AppClock from '@/views/AppClock.vue'
export default{
    components:{AppClock},
    data(){
        return {
            currentTaiwan:"",
            currentKorea:"",
            currentRome:"",
            taiwantime:"",
            koreatime:"",
            rometime:"",
            // kGo:false,
            // rGo:false,
            // tGo:true,
        }
    },
    mounted(){
    this.getcurrentTaiwan();
    setInterval(this.getcurrentTaiwan,1000);

    this.getcurrentKorea();
    setInterval(this.getcurrentKorea,1000);

    this.getcurrentRome();
    setInterval(this.getcurrentRome,1000)
},

    methods:{
    getcurrentTaiwan(){
        var now = new Date();
        var hour = now.getHours().toString().padStart(2,'0');
        var minute = now.getMinutes().toString().padStart(2,'0');
        var second = now.getSeconds().toString().padStart(2,'0');

        this.currentTaiwan = `${hour}:${minute}:${second}`;
        this.taiwantime= now.toLocaleDateString()+','+now.toLocaleTimeString();
    
    
    },

    getcurrentKorea(){
        var now = new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Seoul"}));
        var hour = now.getHours().toString().padStart(2,'0');
        var minute = now.getMinutes().toString().padStart(2,'0');
        var second = now.getSeconds().toString().padStart(2,'0');

        // this.clockDial=this.refs.clockDial;
        this.currentKorea = `${hour}:${minute}:${second}`;
        this.koreatime=now.toLocaleDateString()+','+now.toLocaleTimeString();
    
        // if(kGo){
        //     const hourhand = clockDial.querySelector("#hour-hand");
        //     const minuteHand = clockDial.querySelector("#minute-hand");
        //     const secondHand = clockDial.querySelector("#second-hand");
        
        //     if(secondHand) secondHand.style.transform ="rotate("+ second + "deg)";
        //     if(minuteHand) minuteHand.style.transform ="rotate("+ minute+ "deg)";
        //     if(hourHand) hourHand.style.transform ="rotate("+ hour + "deg)";
        // }
    },

     getcurrentRome(){
        var now = new Date(new Date().toLocaleString("en-US",{timeZone:"Europe/Rome"}));
        var hour = now.getHours().toString().padStart(2,'0');
        var minute = now.getMinutes().toString().padStart(2,'0');
        var second = now.getSeconds().toString().padStart(2,'0');

        this.currentRome = `${hour}:${minute}:${second}`;
        this.rometime=now.toLocaleDateString()+','+now.toLocaleTimeString();
    },
    
    // gototaiwan(){
    //     this.kGo=false
    //     this.tGo=true
    //     this.rGo=false
    // },

    // gotokorea(){
    //     this.kGo=true
    //     this.tGo=false
    //     this.rGo=false
    // },

    // gotorome(){
    //     this.kGo=false
    //     this.tGo=false
    //     this.rGo=true
    // },
}

}
</script>

<style>
@import '@/assets/css/style.css'
</style>