<template>
    <div class="testpage" ref="testpage">
        <!-- 使用动态绑定:class来根据testbuttonClicked变量的值决定是否添加active类 -->
        <button class="testbutton" @click="testtest" :class="{ 'active': testbuttonClicked }"><ion-icon name="arrow-down-circle-outline"></ion-icon></button>
        <div class="loadingtestblock">
            <div class="testcircle"></div>
            <div class="testrunner"></div>
            <div class="rotate right"><div class="testwhite right"></div></div>
            <div class="rotate left"><div class="testwhite left"></div></div>
            <div class="blocker"></div>
        </div>   
    </div>
</template>

<script>
export default {
    data() {
        return {
            testbuttonClicked: false 
        };
    },
    methods: {
        testtest() {
            this.testbuttonClicked = true;
        }
    }
}
</script>

<style>
@import '@/assets/css/loading.css';
</style>
