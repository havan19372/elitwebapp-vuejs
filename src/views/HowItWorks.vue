<template>
    <b-container fluid>
        <b-container>
            <h3 class="page-title" style="color:#27FE01;">How it works</h3>
            <b-row>
                <b-col cols="5">
                    <div class="howitworks-video-section">
                        <video
                            width="500"
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
                </b-col>
                <b-col cols="7">
                    <div class="howitworks-desc-section">
                        <p>
                            Welcome to Elite Competitions the internet’s most interactive prize competition company. Elite Competitions will be helping people like you realise your dream.
                        </p>
                        <ul>
                            <li>Login/Register</li>
                            <li>Pick the competition you want to enter and press your lucky numbers</li>
                            <li>Proceed to checkout and pay</li>
                            <li>The live draw will take place as soon as the timer runs out and the numbers have sold</li>
                            <li>Treat yourself you deserve it!</li>
                        </ul>
                    </div>
                </b-col>
            </b-row>         
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
.howitworks-desc-section {
    color: white;
}
.howitworks-desc-section p {
    margin: 0 0 30px 70px;
}
.howitworks-desc-section ul {
    margin: 0 0 30px 50px;
}
</style>