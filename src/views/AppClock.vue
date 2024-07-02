<template>
    <div class="btnblock">
        <div class="botn">
            <button type="button" class="botn" @click="totaiwan">Taiwan</button>
        </div>

        <div class="botn">
            <button type="button" class="botn" @click="tonewyork">Rome</button>
        </div>

        <div class="botn">
            <button type="button" class="botn"  @click="tokorea">Korea</button>
        </div>
    </div>

    <div class="clock-dial" ref="clockDial">
        <div class="point"></div>
        <div class="hour hour-1">1</div>
        <div class="hour hour-2">2</div>
        <div class="hour hour-3">3</div>
        <div class="hour hour-4">4</div>
        <div class="hour hour-5">5</div>
        <div class="hour hour-6">6</div>
        <div class="hour hour-7">7</div>
        <div class="hour hour-8">8</div>
        <div class="hour hour-9">9</div>
        <div class="hour hour-10">10</div>
        <div class="hour hour-11">11</div>
        <div class="hour hour-12">12</div>

        <div class="minute-hand-wrapper" id="minute-hand">
            <div class="minute-hand">
                <div class="hand"></div>
            </div>
        </div>

        <div class="hour-hand-wrapper" id="hour-hand">
            <div class="hour-hand">
                <div class="hand"></div>
            </div>
        </div>

        <div class="second-hand-wrapper" id="second-hand">
            <div class="second-hand">
                <div class="hand"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick, ref } from 'vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppHeader from '@/components/AppHeader.vue';

let intervalId = null; // 用于存储定时器的ID

export default {
    data(){
        return{
            tooltipContent:'',
            koreatimeshow:'',
            taiwanyes:true,
        }
    },
    components:{AppSidebar,AppHeader},
    mounted() {
        this.startClock();
        
    },
    beforeUnmount() {
        this.stopClock();
    },
    methods: {
        startClock() {
            this.updateClock(); // 立即更新一次时钟
            intervalId = setInterval(this.updateClock, 1000); // 每秒更新一次时钟
        
            this.getkoreaTime();
            intervalId = setInterval(this.getkoreaTime, 1000);
            
            this.getNewYorkTime();
            intervalId =setInterval(this.getNewYorkTime,1000);
        },
        stopClock() {
            clearInterval(intervalId); // 清除定时器
        },
        updateClock() {
            var d = new Date();
            var second = d.getSeconds() * 6;
            var minute = d.getMinutes() * 6;
            var hour = d.getHours() % 12 * 30 + Math.round(minute / 12);
            const clockDial = this.$refs.clockDial;
            if(this.taiwanyes){
                if (clockDial) {
                    const secondHand = clockDial.querySelector("#second-hand");
                    const minuteHand = clockDial.querySelector("#minute-hand");
                    const hourHand = clockDial.querySelector("#hour-hand");
                    if (secondHand) secondHand.style.transform = "rotate(" + second + "deg)";
                    if (minuteHand) minuteHand.style.transform = "rotate(" + minute + "deg)";
                    if (hourHand) hourHand.style.transform = "rotate(" + hour + "deg)";
                } 
            }
            
        },

        getNewYorkTime(){
           var d= new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Rome'}));
           var second = d.getSeconds()* 6 ;
           var minute = d.getMinutes()* 6 ;
           var hour= d.getHours() % 12 * 30 + Math.round(minute / 12);
           const clockDial= this.$refs.clockDial;
           this.timeinnewyork=d.toLocaleDateString()+','+d.toLocaleTimeString();
           
           if(this.newyorkyes){
                
                if(clockDial){
                    const secondhand =clockDial.querySelector('#second-hand');
                    const minutehand =clockDial.querySelector('#minute-hand');
                    const hourhand   =clockDial.querySelector('#hour-hand');
                    
                    if(secondhand) secondhand.style.transform = "rotate("+ second +"deg)"
                    if(minutehand) minutehand.style.transform = "rotate("+ minute +"deg)"
                    if(hourhand) hourhand.style.transform = "rotate("+ hour +"deg)"
                }
            }
           
        },

        getkoreaTime(){
            var d = new Date(new Date().toLocaleString("en-US", {timeZone:"Asia/Seoul"}));
            var second = d.getSeconds()* 6 ;
            var minute = d.getMinutes()* 6 ;
            var hour = d.getHours() % 12 * 30 + Math.round(minute / 12);
            const clockDial = this.$refs.clockDial;
            this.koreatimeshow = d.toLocaleDateString()+','+d.toLocaleTimeString();
            
            if(this.koreayes){
                
                if (clockDial) {
                    const secondHand = clockDial.querySelector("#second-hand");
                    const minuteHand = clockDial.querySelector("#minute-hand");
                    const hourHand = clockDial.querySelector("#hour-hand");
                    if (secondHand) secondHand.style.transform = "rotate(" + second + "deg)";
                    if (minuteHand) minuteHand.style.transform = "rotate(" + minute+ "deg)";
                    if (hourHand) hourHand.style.transform = "rotate(" + hour + "deg)";
                }

            }


    
        },

        tonewyork(){
            this.newyorkyes=true
            this.taiwanyes=false
            this.koreayes=false

        },

        totaiwan(){
            this.taiwanyes=true
            this.koreayes=false
            this.newyorkyes=false
        },

        tokorea(){
            this.koreayes=true
            this.taiwanyes =false
            this.newyorkyes=false
            if(this.koreayes){
                console.log('koreachecked')
            }
        }

    }
}
</script>

<style>
@import '@/assets/css/clock.css';  
</style>
