<template>
    <div class="testpage" ref="testpage">
        <!-- 使用动态绑定:class来根据testbuttonClicked变量的值决定是否添加active类 -->
        <button class="testbutton" @click="testtest" :class="{ 'active': testbuttonClicked }">123123</button>
        <div class="loadingtestblock">
            <div class="testcircle">
                <div class="testrunner">
                    <div class="testwhite"></div>
                </div>
            </div>
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
