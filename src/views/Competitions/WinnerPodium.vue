<template>
    <b-container fluid class="winner-page-fluid-container">
        <b-container>
            <h2 class="text-color-green text-align-center" style="margin-bottom:40px;">dailyplay.uk competition winner's stage</h2>
            <div class="month-picker-container">
                <h5 style="display: inline-block;color: white;padding: 0px;margin: 0px;">pick a month: &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                <div style="border: 3px solid yellow">
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
            </div>
            <div class="competitions-container">
                <h3 style="text-align:center;color:yellow;">the results</h3>
                <div style="display:flex;justify-content: center;">
                    <div style="width: 100px;margin-top: 10px;border: 0px;border-bottom: 1.5px solid yellow;">
                    </div>
                </div>
                <div style="position: relative;top: 60px;">
                    <div>
                        <div style="text-align:center;position: relative;top: 40px;">
                            <img src="@/assets/winner.png" width="100px" height="80px">
                        </div>
                        <div style="display: flex;justify-content: flex-start;">
                            <div style="width: 50%;border-right: 2px dotted yellow;padding: 0 100px;margin-left:1px;">
                                <h4 style="text-align:center;color:yellow;margin-bottom:30px;">Monday 1st</h4>
                                <div class="card-container">
                                    <b-card
                                        title="Winner: Phil Jenkinson - E63 AMG(Ticket: #892)"
                                        :img-src="require('@/assets/competitions/competition1.jpg')"
                                        img-alt="Image"
                                        img-top
                                        tag="article"
                                        class="mb-2"
                                    >
                                        <div class="winner-card-buttons">
                                            <b-button class="common-button" variant="primary" @click="showModal">draw video</b-button>
                                            <b-button class="common-button" variant="primary" @click="showModal">winner details</b-button>
                                        </div>
                                    </b-card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="position: relative;bottom: 40px;">
                        <div style="text-align:center;position: relative;top: 40px;">
                            <img src="@/assets/winner.png" width="100px" height="80px">
                        </div>
                        <div style="display: flex;justify-content: flex-end;">
                            <div style="width: 50%;border-left: 2px dotted yellow;padding: 0 100px;margin-right:1px;">
                                <h4 style="text-align:center;color:yellow;margin-bottom:30px;">Tuesday 13th</h4>
                                <div class="card-container">
                                    <b-card
                                        title="Winner: Lee Ireland - 65 LG TV(Ticket: #115)"
                                        :img-src="require('@/assets/competitions/competition2.jpg')"
                                        img-alt="Image"
                                        img-top
                                        tag="article"
                                        class="mb-2"
                                    >
                                        <div class="winner-card-buttons">
                                            <b-button class="common-button" variant="primary" @click="showModal">draw video</b-button>
                                            <b-button class="common-button" variant="primary" @click="showModal">winner details</b-button>
                                        </div>
                                    </b-card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="position: relative;bottom: 80px;">
                        <div style="text-align:center;position: relative;top: 40px;">
                            <img src="@/assets/winner.png" width="100px" height="80px">
                        </div>
                        <div style="display: flex;justify-content: flex-start;">
                            <div style="width: 50%;border-right: 2px dotted yellow;padding: 0 100px;margin-left:1px;">
                                <h4 style="text-align:center;color:yellow;margin-bottom:30px;">Friday 20th</h4>
                                <div class="card-container">
                                    <b-card
                                        title="Winner: Sarah Harbert - Ring Doorbell Video(Ticket: #124)"
                                        :img-src="require('@/assets/competitions/competition3.jpg')"
                                        img-alt="Image"
                                        img-top
                                        tag="article"
                                        class="mb-2"
                                    >
                                        <div class="winner-card-buttons">
                                            <b-button class="common-button" variant="primary" @click="showModal">draw video</b-button>
                                            <b-button class="common-button" variant="primary" @click="showModal">winner details</b-button>
                                        </div>
                                    </b-card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="position: relative;bottom: 120px;">
                        <div style="text-align:center;position: relative;top: 40px;">
                            <img src="@/assets/winner.png" width="100px" height="80px">
                        </div>
                        <div style="display: flex;justify-content: flex-end;">
                            <div style="width: 50%;border-left: 2px dotted yellow;padding: 0 100px;margin-right:1px;">
                                <h4 style="text-align:center;color:yellow;margin-bottom:30px;">Saturday 25th</h4>
                                <div class="card-container">
                                    <b-card
                                        title="Winner: John Fletcher - VW Golf R32(Ticket: #619)"
                                        :img-src="require('@/assets/competitions/competition4.jpg')"
                                        img-alt="Image"
                                        img-top
                                        tag="article"
                                        class="mb-2"
                                    >
                                        <div class="winner-card-buttons">
                                            <b-button class="common-button" variant="primary" @click="showModal">draw video</b-button>
                                            <b-button class="common-button" variant="primary" @click="showModal">winner details</b-button>
                                        </div>
                                    </b-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="winner-video-modal-container">
                <b-modal ref="myModalRef" hide-footer title="Winner: Phil Jenkinson - E63 AMG(Ticket: #892)" style="color:rgb(0,200,0)">
                    <div class="d-block text-center">
                        <video
                            width="512"
                            controls
                            id="how-it-works-video"
                        >
                            <source
                                :src="
                                    require('@/assets/videos/how-it-works.mp4')
                                "
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div style="display:flex; justify-content:space-evenly;margin: 24px 0 10px 0;">
                        <!-- <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Accept</b-button> -->
                        <!-- <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Spin again</b-button> -->
                        <!-- <b-button class="mt-2 common-button" style="color:#dc3545 !important;" block >Accept</b-button>
                        <b-button class="mt-2 common-button" style="color:#dc3545 !important;" block >Spin again</b-button>                         -->
                    </div>
                </b-modal>
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
    },
    methods: {
        showModal() {
            this.$refs.myModalRef.show()
        },
        hideModal() {
            this.$refs.myModalRef.hide()
        },
        toggleModal() {
            // We pass the ID of the button that we want to return focus to when
            // the modal has hidden
            this.$refs.myModalRef.toggle('#toggleBtn')
        }
    }
  }
</script>
<style scoped>
.card {
    border-style: ridge !important;
    border-width: 5px !important;
    border-color: #27fe01 !important;
    background-color: #f8f707 !important;
    /* max-width: 14rem; */
}

.card-title {
    font-size: 16px;
    margin: 10px 6px !important;
}

.card-img-top {
    height: 15rem;
    border-bottom: 4px solid #27fe01;
}

.winner-card-buttons {
    display: flex;
    margin: 8px 0px 8px 0px;
}
.card-container {
    margin: 0 !important;
    padding: 0 !important;
}
.card-body {
    padding: 8px 6px 6px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.competitions-container{
    margin-top:50px;
}
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
.vue-monthly-picker {
    border: 3px solid green;
}

</style>
<style>
.winner-video-modal-container .modal-dialog {
    max-width: 550px;

}
.vue-monthly-picker .month-picker-wrapper{
    width: 100px;
    min-width: 0px !important;
}
</style>

