<template>
    <b-container fluid class="footer-bar-fluid-container">
        <b-container fluid class="footer-bar-container">
            <b-row>
                
                <b-col cols="3" style="text-align: center;">
                    <p style="color:white;margin-left: 200px;">payment methods:</p>
                    <!-- <router-link to="/my-account" class="TC-clickable" style="float: left;">
                        <b-button class="common-button icon-button" style="width: 100%;height: 40px;">postal entry</b-button>
                    </router-link> -->
                    <div>
                        <router-link to="/my-account" class="TC-clickable" style="display: inline-block;">
                            <b-button class="common-button icon-button" style="height: 50px;width: 100%;color:red !important;">postal entry</b-button>
                        </router-link>
                        <b-img :src="require('@/assets/payment-method/mastercard.png')" width="70" height="40" style="margin-right:8px;"/>
                        <b-img :src="require('@/assets/payment-method/visa.png')" width="70" height="40" style="margin-right:8px;"/>
                        <b-img :src="require('@/assets/payment-method/paypal.jpg')" width="70" height="40"/>
                    </div>
                </b-col>
                <b-col cols="6" style="display: flex; justify-content: center;align-items: center;flex-direction: column;">
                    <div style="color:white;text-align:center;">
                        <div style="display:block;">Copyright © 2019 <a href="http://dailyplay.co.uk/">Daily Play Holdings</a></div>
                        <div><a href="http://dailyplay.co.uk/">Term & Conditions</a> | <a href="http://dailyplay.co.uk/">info@dailyplay.uk</a></div>
                    </div>
                </b-col>
                <b-col cols="3" style="display: flex; justify-content: center;align-items: center;flex-direction: column;">
                    <div class="social-links">
                        <a href="https://www.youtube.com" target="_blank" style="margin-right: 4px;">
                            <b-img :src="require('@/assets/social-icons/youtube.png')" width="50" height="50"/>
                        </a>
                        <a href="https://twitter.com" target="_blank" style="margin-right: 4px;">
                            <b-img :src="require('@/assets/social-icons/twitter.png')" width="46" height="46"/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank">
                            <b-img :src="require('@/assets/social-icons/facebook.png')" width="51" height="51"/>
                        </a>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>
<script>
export default {
    name: 'FooterBar',
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>

<style scoped>
.footer-bar-fluid-container {
    background-color: black;
    border-top: 2px solid red;
}
.footer-bar-container {
    padding: 30px 80px;
}
</style>
