<template>
    <b-container fluid>
        <b-container fluid class="competition-detail">
            <b-row>
                <b-col cols="4">
                    <ProductZoomer
                        :base-images="images"
                        :base-zoomer-options="containerRoundOptions"
                    />
                </b-col>
                <b-col cols="1"></b-col>
                <b-col cols="7" class="competition-detail-container">
                    <b-row
                        ><b-col
                            ><h1
                                class="text-color-white"
                                style="margin-bottom: 48px;margin-top: 30px;"
                            >
                                400+BHP 2010 FOCUS RS
                            </h1></b-col
                        ></b-row
                    >
                    <b-row
                        style="display: flex;align-items: baseline;margin-bottom: 30px;"
                    >
                        <b-col cols="5"
                            ><h4 class="text-color-yellow">
                                price per numbered ball
                            </h4></b-col
                        >
                        <b-col cols="7"
                            ><h2 class="text-color-yellow">
                                <b-badge variant="danger" style="background-color: red;">£23.00</b-badge>
                            </h2></b-col
                        >
                    </b-row>
                    <b-row style="margin-bottom: 30px;">
                        <b-col cols="5"
                            ><h4 class="text-color-yellow">
                                competition ends in
                            </h4>
                            <h6 class="text-color-yellow">
                                (or when all numbered balls have sold)
                            </h6>
                        </b-col>
                        <b-col cols="7">
                            <b-row>
                                <b-col>
                                    <h4 style="color: white;">08</h4>
                                    <h4 style="color: #27FE01;">days</h4>
                                </b-col>
                                <b-col>
                                    <h4 style="color: white;">01</h4>
                                    <h4 style="color: #27FE01;">hours</h4>
                                </b-col>
                                <b-col>
                                    <h4 style="color: white;">08</h4>
                                    <h4 style="color: #27FE01;">min</h4>
                                </b-col>
                                <b-col>
                                    <h4 style="color: white;">08</h4>
                                    <h4 style="color: #27FE01;">sec</h4>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row style="margin-bottom:10px;"
                        ><b-col
                            ><h4 class="text-color-yellow">
                                numbered balls remaining
                            </h4></b-col
                        ></b-row
                    >
                    <b-row style="margin-bottom:10px;">
                        <b-col
                            style="display: flex; justify-content: space-between;"
                        >
                            <h4 style="color:#27FE01">0</h4>
                            <h4 style="color:#27FE01">{{ value }}</h4>
                            <h4 style="color:#27FE01">{{ max }}</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <!-- <b-progress :max="max">
                                <b-progress-bar
                                    :value="value"
                                    style="background-color: #dc3545;"
                                />
                            </b-progress> -->
                            <b-progress :value="value" :max="max" animated style="background-color: #2f3338;border: 2px solid rgba(174, 197, 180, 0.25);"/>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="competition-section">
                <h2 style="margin-bottom: 20px;">
                    please select your lucky ball [£00.00 per ball]
                </h2>
                <b-tabs pills card v-model="tabIndex">
                    <b-tab
                        v-for="(title, index) in titles"
                        :key="index"
                        :title="title"
                        :title-item-class="'titleBack'"
                    >
                        <div>
                            <b-button
                                v-for="(item, index) in buttonLists[index]"
                                :key="index"
                                :class="
                                    item.status
                                        ? 'ticket-button-selected'
                                        : 'ticket-button'
                                "
                                @click="ticketClicked(item)"
                            >
                                {{ item.label }}
                            </b-button>
                        </div>
                    </b-tab>
                </b-tabs>
                <div class="number-selection-buttons-container">
                    <!-- <b-button @click="toggleModal" id="toggleBtn">Toggle Modal</b-button> -->
                    <b-button  
                        @click="showModal" 
                        id="showBtn" 
                        class="common-button icon-button" 
                        style="color: #F8F707 !important;background-color: red !important;"
                    >
                        <span>luck dip</span>
                        <font-awesome-icon icon="dice" />
                    </b-button>
                    <div class="shopping-cart-buttons" style="position: absolute; right: 0px;">
                        <div>
                            <div>
                                <span style="color: red;font-size:20px;margin-right: 10px;">No</span>
                                <b-form-checkbox switch v-model="checked" name="check-button" class="cash-alternative-switch">
                                </b-form-checkbox>
                                <span style="color: green;font-size:20px;margin-left: 10px;">No</span>
                            </div>
                            
                            <span style="color: yellow;font-size:20px;display: block;">cash alternative</span>
                        </div>
                        <div style="float:right;margin-top: 5px;margin-left: 5px;">
                            <b-button class="common-button icon-button" style="color: #dc3545 !important;" to="/my-cart">
                                <span style="color: red;">Pay/Cart</span>
                                <font-awesome-icon icon="shopping-cart" style="color: red;"/>
                            </b-button>
                        </div>
                    </div>
                </div>
                <div>
                    <b-modal ref="myModalRef" hide-footer title="Your luck dip! Would you like this number?" style="color:rgb(0,200,0)">
                        <div class="d-block text-center">
                        <h3 class="text-color-red">777</h3>
                        </div>
                        <div style="display:flex; justify-content:space-evenly;margin: 24px 0 10px 0;">
                            <!-- <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Accept</b-button> -->
                            <!-- <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Spin again</b-button> -->
                            <b-button class="mt-2 common-button" style="color:red !important;" block >Accept</b-button>
                            <b-button class="mt-2 common-button" style="color:red !important;" block >Spin again</b-button>                        
                        </div>
                    </b-modal>
                </div>
            </b-row>
            <b-row class="competition-section">
                <b-tabs pills card v-model="descTabIndex">
                    <b-tab :key="0" title="description">
                        <b-card-text
                            >2010 Ford Focus RS Revo Stage 4+ 400+BHP Car: Reg -
                            R T0 5LOW Lux Pack 2 Model 88k Stacks of history 17k
                            on the engine rebuild Full Year MOT Year - 2010 3
                            Keys Engine: Full Stage 4+ Revo Set Up 400BHP with
                            Print Out Fully Forged Engine Rebuild 17k miles ago
                            340LPH Fuel Pump 3" Mongoose Downpipe and Decat KMS
                            Cat Back Stage 1 Hybrid Turbo Forge Actuator Silicon
                            Boost Pipes Mountune Re-Circ Valve 750cc Injectors
                            Induction Kit Front Mounted Intercooler Front Mount
                            Oil Cooler Uprated Oil Breather Kit (common fault)
                            Pumaspeed Inlet Symposer Delete K1 Rods on Forged
                            Weisco Pistons New Clutch New Coil Packs New Cambelt
                            New Waterpump All Belts Running Revo Stage 4+
                            Software All engine work done by SCC Performance
                        </b-card-text>
                    </b-tab>
                    <b-tab :key="1" title="competition history">
                        <b-card-text>Competition history here</b-card-text>
                    </b-tab>
                </b-tabs>
                <!-- </b-card> -->
            </b-row>
        </b-container>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            images: {
                thumbs: [
                    {
                        id: 1,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/7.jpeg'
                    },
                    {
                        id: 2,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/6.jpeg'
                    },
                    {
                        id: 3,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/8.jpeg'
                    },
                    {
                        id: 4,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/9.jpeg'
                    },
                    {
                        id: 5,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/7.jpeg'
                    },
                    {
                        id: 6,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/6.jpeg'
                    },
                    {
                        id: 7,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/8.jpeg'
                    },
                    {
                        id: 8,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/thumbs/9.jpeg'
                    }
                ],
                normal_size: [
                    {
                        id: 1,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/7.jpeg'
                    },
                    {
                        id: 2,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/6.jpeg'
                    },
                    {
                        id: 3,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/8.jpeg'
                    },
                    {
                        id: 4,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/9.jpeg'
                    },
                    {
                        id: 5,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/7.jpeg'
                    },
                    {
                        id: 6,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/6.jpeg'
                    },
                    {
                        id: 7,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/8.jpeg'
                    },
                    {
                        id: 8,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/normal_size/9.jpeg'
                    }
                ],
                large_size: [
                    {
                        id: 1,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/7.jpeg'
                    },
                    {
                        id: 2,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/6.jpeg'
                    },
                    {
                        id: 3,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/8.jpeg'
                    },
                    {
                        id: 4,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/9.jpeg'
                    },
                    {
                        id: 5,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/7.jpeg'
                    },
                    {
                        id: 6,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/6.jpeg'
                    },
                    {
                        id: 7,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/8.jpeg'
                    },
                    {
                        id: 8,
                        url:
                            'http://yoohooworld.com/images/vue_product_zoomer/large_size/9.jpeg'
                    }
                ]
            },
            containerRoundOptions: {
                zoomFactor: 4,
                pane: 'container-round',
                hoverDelay: 300,
                namespace: 'inline-zoomer',
                move_by_click: true,
                scroll_items: 8,
                choosed_thumb_border_color: '#bbdefb'
            },
            max: 1200,
            value: 700,
            active: null,
            titles: ['1-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-1000', '1001-1100', '1101-1200', '1201-1300', '1301-1400', '1401-1500', '1501-1600'],
            buttonLists: [
                [
                    { label: 1, status: false },
                    { label: 2, status: false },
                    { label: 3, status: false },
                    { label: 4, status: false },
                    { label: 5, status: false },
                    { label: 6, status: false },
                    { label: 7, status: false },
                    { label: 8, status: false },
                    { label: 9, status: false },
                    { label: 10, status: false },
                    { label: 11, status: false },
                    { label: 12, status: false },
                    { label: 13, status: false },
                    { label: 14, status: false },
                    { label: 15, status: false },
                    { label: 16, status: false },
                    { label: 17, status: false },
                    { label: 18, status: false },
                    { label: 19, status: false },
                    { label: 20, status: false },
                    { label: 21, status: false },
                    { label: 22, status: false },
                    { label: 23, status: false },
                    { label: 24, status: false },
                    { label: 25, status: false },
                    { label: 26, status: false },
                    { label: 27, status: false },
                    { label: 28, status: false },
                    { label: 29, status: false },
                    { label: 30, status: false },
                    { label: 32, status: false },
                    { label: 33, status: false },
                    { label: 34, status: false },
                    { label: 35, status: false },
                    { label: 36, status: false },
                    { label: 37, status: false },
                    { label: 38, status: false },
                    { label: 39, status: false },
                    { label: 40, status: false },
                    { label: 41, status: false },
                    { label: 42, status: false },
                    { label: 43, status: false },
                    { label: 44, status: false },
                    { label: 45, status: false },
                    { label: 46, status: false },
                    { label: 47, status: false },
                    { label: 48, status: false },
                    { label: 49, status: false },
                    { label: 50, status: false },
                    { label: 51, status: false },
                    { label: 52, status: false },
                    { label: 53, status: false },
                    { label: 54, status: false },
                    { label: 55, status: false },
                    { label: 56, status: false },
                    { label: 57, status: false },
                    { label: 58, status: false },
                    { label: 59, status: false },
                    { label: 60, status: false },
                    { label: 61, status: false },
                    { label: 62, status: false },
                    { label: 63, status: false },
                    { label: 64, status: false },
                    { label: 65, status: false },
                    { label: 66, status: false },
                    { label: 67, status: false },
                    { label: 68, status: false },
                    { label: 69, status: false },
                    { label: 70, status: false },
                    { label: 71, status: false },
                    { label: 72, status: false },
                    { label: 73, status: false },
                    { label: 74, status: false },
                    { label: 75, status: false },
                    { label: 76, status: false },
                    { label: 77, status: false },
                    { label: 78, status: false },
                    { label: 79, status: false },
                    { label: 80, status: false },
                    { label: 81, status: false },
                    { label: 82, status: false },
                    { label: 83, status: false },
                    { label: 84, status: false },
                    { label: 85, status: false },
                    { label: 86, status: false },
                    { label: 87, status: false },
                    { label: 68, status: false },
                    { label: 69, status: false },
                    { label: 70, status: false },
                    { label: 71, status: false },
                    { label: 72, status: false },
                    { label: 73, status: false },
                    { label: 74, status: false },
                    { label: 75, status: false },
                    { label: 76, status: false },
                    { label: 77, status: false },
                    { label: 78, status: false },
                    { label: 79, status: false },
                    { label: 80, status: false }
                ],
                [
                    { label: 31, status: false },
                    { label: 32, status: false },
                    { label: 33, status: false },
                    { label: 34, status: false },
                    { label: 35, status: false },
                    { label: 36, status: false },
                    { label: 37, status: false },
                    { label: 38, status: false },
                    { label: 39, status: false },
                    { label: 40, status: false },
                    { label: 41, status: false },
                    { label: 42, status: false },
                    { label: 43, status: false },
                    { label: 44, status: false },
                    { label: 45, status: false },
                    { label: 46, status: false },
                    { label: 47, status: false },
                    { label: 48, status: false },
                    { label: 49, status: false },
                    { label: 50, status: false },
                    { label: 51, status: false },
                    { label: 52, status: false },
                    { label: 53, status: false },
                    { label: 54, status: false },
                    { label: 55, status: false },
                    { label: 56, status: false },
                    { label: 57, status: false },
                    { label: 58, status: false },
                    { label: 59, status: false },
                    { label: 60, status: false }
                ],
                [
                    { label: 61, status: false },
                    { label: 62, status: false },
                    { label: 63, status: false },
                    { label: 64, status: false },
                    { label: 65, status: false },
                    { label: 66, status: false },
                    { label: 67, status: false },
                    { label: 68, status: false },
                    { label: 69, status: false },
                    { label: 70, status: false },
                    { label: 71, status: false },
                    { label: 72, status: false },
                    { label: 73, status: false },
                    { label: 74, status: false },
                    { label: 75, status: false },
                    { label: 76, status: false },
                    { label: 77, status: false },
                    { label: 78, status: false },
                    { label: 79, status: false },
                    { label: 80, status: false }
                ]
            ],
            competitionName: '',
            selectedTickets: [],
            tabIndex: 0,
            descTabIndex: 0,
            checked:false
        };
    },
    methods: {
        ticketClicked(ticket) {
            ticket.status = !ticket.status;
            if (ticket.status) {
                this.selectedTickets.push(ticket.label);
            } else {
                this.selectedTickets = this.selectedTickets.filter(
                    item => item !== ticket.label
                );
            }
        },
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
    },
    mounted() {
        this.competitionName = this.$route.params.competitionName;
    }
};
</script>
<style>
.competition-detail{
    padding: 10px 150px;
}
.preview-box .responsive-image{
    border: 4px solid #27fe01;
    border-radius: 4px;
    padding: 5px;
}

.ticket-button {
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin: 4px;
    background-color: transparent;
    border: 3px solid #f8f707;
    border-style: dashed;
    font-size: 30px;
    font-weight: bold;
    padding: 0px;
}

.ticket-button:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}

.ticket-button-selected:focus,
.ticket-button-selected:active,
.ticket-button:focus,
.ticket-button:active {
    box-shadow: none;
}

.ticket-button-selected {
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin: 4px;
    background-color: #dc3545 !important;
    border: none;
    color: #dc3545 !important;
}

.competition-section {
    margin-top: 60px;
    padding-top: 40px;
    border-top: 2px solid yellow;
}

.competition-section .tab-pane {
    border-top: 2px solid #f8f707;
    color: white;
}

.number-selection-buttons-container {
    text-align:center;
    position:relative;
    margin:30px 0 0 0;
    width: 100%
}
.number-selection-buttons-container button, 
.number-selection-buttons-container a,
.number-selection-buttons-container div {
    display: inline-block !important;
}
.number-selection-buttons-container .custom-control-label {
    color: #F8F707;
}
.titleBack a{
    background-image: url('../../assets/count_back.png');
    width: 135px;
    height: 51px;
    margin-right: 2px;
    font-size: 20px;
    text-align: center;
    padding-top: 10px;
}
.titleBack a.active {
    background-image: url('../../assets/click_back.png');
    background-color: #202020 !important;
    
}

</style>
<style>
.cash-alternative-switch {
    margin-right:40px;

}
.cash-alternative-switch.custom-control.custom-switch .custom-control-label {
    position: relative;
    font-size: 20px !important;
    top: -4px;
    line-height: 20px;
    padding-left: 4px;
}

.cash-alternative-switch.custom-control.custom-switch .custom-control-label:before {
    top: 4px;
    width: 80px;
    height: 24px;
    border: #27fe01 solid 3px;
}
.cash-alternative-switch .custom-control-input:checked ~ .custom-control-label::before {
    border-color: #dc3545;
    background-color: green;

}
.cash-alternative-switch .custom-control-label::before {
    background-color: red;
}
.cash-alternative-switch.custom-control.custom-switch .custom-control-label:after {
    top:7px;
    width: 40px;
    height: 18px;
    background-color: yellow;
    border-radius: 5px;
    left: -33px;
}
.cash-alternative-switch.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
    left: -11px;
}
/* .number-selection-buttons-container button,
.number-selection-buttons-container a {
    max-width: 170px !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
    padding-top: 8px !important;
} */
</style>
