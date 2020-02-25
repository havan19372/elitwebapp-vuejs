<template>
    <b-container fluid class="winner-page-fluid-container">
        <b-container>
            <h2 class="text-color-green text-align-center" style="margin-bottom:40px;">daily play competition winners stage</h2>
            <div class="month-picker-container">
                <h5 style="display: inline-block;color: white;padding: 0px;margin: 0px;">pick month: &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                <vue-monthly-picker
                    v-model="selectedMonth"
                    :monthLabels="monthLabels"
                    placeHolder="Select month"
                    dateFormat="YYYY/MM"
                    alignment="center"
                    selectedBackgroundColor="#dc3545"
                >
                </vue-monthly-picker>
            </div>
        </b-container>
    </b-container>
</template>

<script>
    var moment = require('moment');
    import VueMonthlyPicker from 'vue-monthly-picker'
    export default {
    components:{
        VueMonthlyPicker
    },
    data() {
        return {
            selectedMonth:moment().format(),
            monthLabels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

        }
    }
  }
</script>
<style>
.btn-info {
    background-color: green;
    border-color: green;
    font-family: 'Capriola', sans-serif !important;
}
.btn-info:hover {
    background-color: #27FE01;
    border-color: #27FE01;
    font-family: 'Capriola', sans-serif !important;
}
.month-picker-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.month-picker-container .vue-monthly-picker {
    display: inline-block;
}

</style>
