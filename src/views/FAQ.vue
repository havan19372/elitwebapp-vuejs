<template>
    <b-container fluid>
        <b-container>
            <h2 class="page-title">FAQ's about the competitions & procedures</h2>
            <div role="tablist">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#" v-b-toggle.accordion1 variant="info">What if the competitions aren’t full when the timer runs out?</b-button>
                    </b-card-header>
                    <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <p class="card-text">
                                If the competition is not full, the timer will add some time in order for all the tickets to sell on the competition. This will happen a maximum of 4 times then if the competition is still not sold out a cash alternative will be awarded instead and only the people that have entered will go into the live draw.
                            </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#" v-b-toggle.accordion2 variant="info">If I win, how long will it take for my prize to be delivered?</b-button>
                    </b-card-header>
                    <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <p class="card-text">
                                Your prize will be hand delivered from an Elite Competitions team member within 5 days of the winner being announced.
                            </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#" v-b-toggle.accordion3 variant="info">Is 'Bernie' The ball machine totally random?</b-button>
                    </b-card-header>
                    <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <p class="card-text">
                                Yes, Elite Competitions guarantee that 'Bernie' the ball machine is totally random and nothing can influence the outcome of a live draw.
                            </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#" v-b-toggle.accordion4 variant="info">How many entrants am I allowed to have in any one draw?</b-button>
                    </b-card-header>
                    <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <p class="card-text">
                                Each player can enter any one competition a maximum of 5 times
                            </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>                
            </div>
        </b-container>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
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
</style>
