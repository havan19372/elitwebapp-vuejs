<template>
    <b-container fluid>
        <b-container>
            <h1 style="text-align:center;text-decoration: underline;margin-bottom: 50px;">dailyplay.uk</h1>
            <div class="testimonial-section">
                <h3 class="page-title" style="margin-bottom:25px;">top 3 all time winners</h3>
                <div class="carousel-section1">
                    <b-carousel
                        id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        controls
                        indicators
                    >
                        <!-- Text slides with image -->
                        <b-carousel-slide
                            :img-src="
                                require('@/assets/competitions/competition1.jpg')
                            "
                        >
                            <div>
                                <h1>daily play competitions</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide
                            :img-src="
                                require('@/assets/competitions/competition6.jpg')
                            "
                        >
                            <div>
                                <h1>daily play competitions</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide
                            :img-src="
                                require('@/assets/competitions/competition9.jpg')
                            "
                        >
                            <div>
                                <h1>daily play competitions</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </b-carousel-slide>
                    </b-carousel>
                </div>
            </div>
            <div class="testimonial-section">
                <h3 class="page-title" style="margin-bottom: 25px;">testimonials</h3>
                <div class="carousel-section2">
                    <b-carousel
                        id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        controls
                        indicators
                    >
                        <!-- Text slides with image -->
                        <b-carousel-slide
                            :img-src="
                                require('@/assets/competitions/competition1.jpg')
                            "

                        >
                            <div>
                                <p>
                                    WOW! Thanks to the lads at Elite for making this happen. Heading to the South of France in it next month for a road trip, can't wait! 
                                </p>
                                <hr />
                                <h4>George Stephens</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide
                            :img-src="
                                require('@/assets/competitions/competition6.jpg')
                            "
                        >
                            <div>
                                <p>
                                    I've wanted an M3 for ages and when I saw my number drop out of the machine I was made up! Really happy with the car, it's a beast! Cheers fellas
                                </p>
                                <hr />
                                <h4>James Harris</h4>
                                <p>
                                    Range Rover Sport Riviera Edition.
                                </p>
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide
                            :img-src="
                                require('@/assets/competitions/competition9.jpg')
                            "
                        >
                            <div>
                                <p>
                                    WOW! Thanks to the lads at Elite for making this happen. Heading to the South of France in it next month for a road trip, can't wait! 
                                </p>
                                <hr />
                                <h4>George Stephens</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </b-carousel-slide>
                    </b-carousel>
                </div>
            </div>      
        </b-container>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
          
      }
    }
  }
</script>
<style>
.testimonial-section {
    text-align:center;
    margin-bottom: 50px;
}
.testimonial-section .page-title {
    color: #27FE01;
    margin-left: 0px !important;
}
.testimonial-section .carousel-section1 {
    display: inline-block;
    width: 768px;
    height: 570px !important;
}
.testimonial-section .carousel-section2 {
    display: inline-block;
    width: 768px;
    height: 570px !important;
}
.testimonial-section .carousel-section2 .carousel-item {
    background-color: transparent;
}
.testimonial-section .carousel-section2 .carousel-caption {
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    position: initial;
}
.testimonial-section .carousel-section2 .carousel-item hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid red;
    background-color:red;
}
.testimonial-section .carousel-section2 .carousel-item h4 {
    color: #F8F707;
}
</style>