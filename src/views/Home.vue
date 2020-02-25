<template>
    <b-container fluid class="home-fluid-container">
        <b-container fluid class="home-container">
            <b-row>
                <b-col cols="2" class="charity-box-container">
                    <b-img
                        :src="require('@/assets/charity.png')"
                        center
                        width="250"
                        class="charityStyle"
                    />
                    <b-img
                        :src="require('@/assets/horse.png')"
                        center
                        width="250"
                        height="245"
                        class="horseStyle"
                    />
                    <router-link to="/charity/charity1" class="TC-clickable charity1Style">
                        <b-img
                            :src="require('@/assets/charity1_logo.png')"
                            center
                            width="138"
                            height="50"
                        />
                    </router-link>
                    <router-link to="/charity/charity2" class="TC-clickable charity2Style">
                        <b-img
                            :src="require('@/assets/charity2_logo.png')"
                            center
                            width="138"
                            height="50"
                        />
                    </router-link>
                </b-col>
                <b-col cols="8">
                    <div class="competitions-bootstrap-slider-container">
                        <b-carousel
                            id="carousel1"
                            style="text-shadow: 1px 1px 2px #333;"
                            controls
                            indicators
                            :interval="1000"
                            img-width="1024"
                            img-height="480"
                            v-model="slide"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                            :no-touch="true"
                            ref="bootstrap_slider"
                        >
                            <!-- Text slides with image -->
                            <b-carousel-slide
                                :img-src="
                                    require('@/assets/competitions/competition1.jpg')
                                "
                            >
                                <div style="margin-bottom: 38px;">
                                    <h1>daily play competitions</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                    <b-button variant="danger">Join </b-button>
                                </div>
                            </b-carousel-slide>
                            <b-carousel-slide
                                :img-src="
                                    require('@/assets/competitions/competition6.jpg')
                                "
                            >
                                <div style="margin-bottom: 38px;">
                                    <h1>daily play competitions</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                    <b-button variant="danger">Join </b-button>
                                </div>
                            </b-carousel-slide>
                            <b-carousel-slide
                                :img-src="
                                    require('@/assets/competitions/competition9.jpg')
                                "
                            >
                                <div style="margin-bottom: 38px;">
                                    <h1>daily play competitions</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                    <b-button variant="danger">Join </b-button>
                                </div>
                            </b-carousel-slide>
                        </b-carousel>
                        <div class="competitions-3d-slider-container">
                            <carousel-3d
                                :space="100"
                                :width="180"
                                :height="120"
                                :border="0"
                                :perspective="46"
                                :inverseScaling="10"
                                :controlVisible="true"
                                :display="11"
                                :loop="false"
                                :animationSpeed="1500"
                                :autoplay="false"
                                :autoplayHoverPause="true"
                                :autoplayTimeout="1000"
                            >
                                <slide :index="0">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition1.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="1">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition2.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="2">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition3.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="3">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition4.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="4">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition5.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="5">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition6.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="6">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition7.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="7">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition8.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="8">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition9.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="9">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition10.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="10">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition11.jpg')
                                        "
                                    />
                                </slide>
                                <slide :index="11">
                                    <b-img
                                        :src="
                                            require('@/assets/competitions/competition12.jpg')
                                        "
                                    />
                                </slide>
                            </carousel-3d>
                        </div>
                    </div>

                    <div class="how-it-works-title" style="position: relative;top: 400px;">
                        <h1 class="text-color-yellow text-font-default">
                            how it works
                        </h1>
                    </div>
                    <!-- <iframe 
                        width="420" 
                        height="345" 
                        src="https://www.youtube.com/embed/WmQhyvaBZAg?autoplay=1&playlist=WmQhyvaBZAg&loop=1&controls=0&rel=0&showinfo=0" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen>
                    </iframe> -->
                    
                    <div class="video-frame" style="top: 410px;">
                        <b-img
                            :src="require('@/assets/phone-frame.png')"
                            center
                        />
                        <video
                            autoplay
                            loop
                            muted
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
                    <div class="how-buttons-container" style="margin-top: 420px;">
                        <router-link to="/how-it-works" class="TC-clickable">
                            <b-button style="color: red;font-weight: bold;height:auto;width: 100%;"
                                >WATCH VIDEO <br/>How it Works <br/>With Audio</b-button
                            >
                            <span class="text-font-info">T & C's</span>
                        </router-link>
                    </div>
                </b-col>
                <b-col cols="2" class="membership-button-container">
                    <b-img
                        :src="require('@/assets/membership_group.png')"
                        center
                        width="200"
                        class=""
                    />

                    <router-link to="/personal-account" class="TC-clickable standardStyle">
                        <b-img
                            :src="require('@/assets/standard_button.png')"
                            center
                            width="150"
                            height="70"
                        />
                    </router-link>

                    <router-link to="/standard-signup" class="TC-clickable standardSignupStyle">
                        <b-img
                            :src="require('@/assets/signup-standard.png')"
                            center
                            width="150"
                            height="70"
                        />
                    </router-link>

                    <router-link to="/my-account" class="TC-clickable vipStyle">
                        <b-img
                            :src="require('@/assets/vip_button.png')"
                            center
                            width="150"
                            height="70"
                        />
                    </router-link>
                
                    <!-- <router-link to="/standard-signup" class="TC-clickable">
                        <b-button class="common-button icon-button" style="color: red !important;">standard signup</b-button>
                    </router-link>
                    <router-link to="/vip-signup" class="TC-clickable">
                        <b-button class="common-button icon-button" style="color: red !important;">VIP signup</b-button>
                    </router-link> -->
                    <router-link to="/how-to-play" class="TC-clickable" style="position:absolute;bottom: 260px;">
                        <b-button style="color: red;font-weight: bold;height:auto;width:auto;"
                            >WRITTEN <br/>INSTRUCTIONS <br/>How to Play</b-button
                        >
                        <span class="text-font-info">T & C's</span>
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name: 'home',
    components: {
        Carousel3d,
        Slide
    },
    data() {
        return {
            slide: 0,
            sliding: null
        };
    },
    computed: {},
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    },
    mounted() {
        this.$refs.bootstrap_slider.$el.querySelector(
            'ol.carousel-indicators'
        ).style.bottom = '70px';
        let carousel_captions = this.$refs.bootstrap_slider.$el.querySelectorAll(
            '.carousel-caption'
        );
        carousel_captions.forEach(caption => {
            caption.style.bottom = '60px';
        });
    }
};
</script>

<style scoped>
.home-fluid-container {
    background-color: #212121;
}

.home-container {
    padding: 0 200px;
}

.charity-box-container {
    /* display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start; */
    text-align: center;
}

.membership-button-container {
    /* display: flex;
    flex-direction: column;
    align-items: flex-end; */
    font-family: 'Capriola', sans-serif !important;
    text-align: center;
}
.competitions-bootstrap-slider-container {
    position: relative;
    height: 540px;
}
.carousel-fade .carousel-item {
    height: 500px !important;
}
.competitions-3d-slider-container {
    position: relative;
    bottom: 110px;
    z-index: 999;
}
.carousel-3d-slide {
    box-shadow: 0px 0px 16px 10px rgba(0, 0, 0, 0.75);
    margin: 20px 0 20px 0 !important;
}
.carousel-3d-container {
    position: absolute;
    height: 180px !important;
}
.video-frame {
    position: relative;
    text-align: center;
    height: 400px;
}

#how-it-works-video {
    position: relative;
    bottom: 345px;
    height: 320px;
    width: 636px;
}
.how-buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.how-it-works-title {
    margin-bottom: 20px;
    text-align: center;
}
.charityStyle{
    position: relative;
    bottom: 36px;
    right: 65px;
}
.horseStyle{
    position: relative;
    bottom: 88px;
    right: 37px;
}
.charity1Style{
    margin-bottom: 0px;
    height: 50px;
    position: relative;
    bottom: 299px;
    width: 138px;
    left: 45px;
}
.charity2Style{
    margin-bottom: 0px;
    height: 50px;
    position: relative;
    bottom: 293px;
    width: 138px;
    left: 45px;
}
.standardStyle{
    position: relative;
    bottom: 210px;
}
.vipStyle{
    position: relative;
    bottom: 290px;
}
.standardSignupStyle{
    position: relative;
    bottom: 251px;
}
</style>
