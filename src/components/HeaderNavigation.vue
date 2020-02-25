<template>
    <b-container fluid class="header-navigation-fluid-container">
        <b-container fluid class="header-navigation-container">
            <b-img
                class="logo-box"
                :src="require('@/assets/new_dailyplay_logo.png')"
                left
                width="400"
            />
            <p
                class="text-font-default text-color-white text-size-50 text-align-center"
            >
                enter the world of winning
            </p>
            <div>
                <div class="header-navbar">
                    <b-button class="common-button header-button" to="/"><span>Home</span></b-button>
                    <b-button
                        class="common-button header-button"
                        to="/competitions/active-competitions"
                        ><span>all competitions</span></b-button
                    >
                    <b-button class="common-button header-button" to="/competitions/winner-podium"><span>winners stage</span></b-button>
                    <b-button class="common-button header-button" to="/testimonial"><span>our testimonials</span></b-button>
                    <b-button class="common-button header-button" to="/faqs"><span>faq's</span></b-button>
                    <b-dropdown text="My Cart & My Account" class="mydropdown">
                        <b-dropdown-item href="/my-cart" style="border-bottom:2px solid rgb(23, 150, 0)"><span>my cart</span><font-awesome-icon icon="shopping-cart" style="color: red;"/></b-dropdown-item>
                        <b-dropdown-item href="/login"><span style="color: red;">my account</span></b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <b-img
                class="chinese-box"
                :src="require('@/assets/chinese_full.png')"
                right
                width="200"
            />
        </b-container>
    </b-container>
</template>
<script>
export default {
    name: 'HeaderNavigation',
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>

<style scoped>
.header-navigation-fluid-container {
    background-color: black;
    border-bottom: 2px solid red;
}
.header-navigation-container {
    padding: 30px 95px;
}
.header-navbar {
    justify-content: flex-end;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 0px 185px;
}
.logo-box {
    position: absolute;
    top: 0px;
    left: 25px;
}
.chinese-box {
    position: absolute;
    top: 0px;
    right: 140px;
}
span{
    color: red;
}
.header-button{
    width: 130px;
    height: 58px;
}
</style>
<style>
.mydropdown{
    margin-left:10px;
}
.mydropdown button{
    border-radius: 20px;
    background-color: rgb(248, 247, 7);
    color: red;
    font-weight: 500;
    border: 5px ridge rgb(36, 234, 1);
}
.mydropdown button:hover{
    border-radius: 20px;
    background-color: rgb(248, 247, 7);
    color: red;
    font-weight: 500;
    border: 5px ridge rgb(36, 234, 1);
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    border-radius: 20px !important;
    background-color: rgb(248, 247, 7) !important;
    color: red !important;
    font-weight: 500 !important;
    border: 5px ridge rgb(36, 234, 1) !important;
}
.mydropdown .dropdown-menu{
    border-radius: 10px;
    background-color: rgb(248, 247, 7);
    color: red;
    font-weight: 500;
    border: 5px ridge rgb(36, 234, 1);
    left: 45px !important;
}
.mydropdown .dropdown-item:hover{
    background-color: rgb(248, 247, 7);
}

</style>
