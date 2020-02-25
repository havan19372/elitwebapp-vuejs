<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Please select your ticket for
                {{ $route.params.competitionName }}</v-flex
            >
        </v-layout>
        <v-layout row>
            <div>
                <v-tabs
                    v-model="active"
                    color="black"
                    dark
                    slider-color="yellow"
                >
                    <v-tab v-for="title in titles" :key="title" ripple>
                        {{ title }}
                    </v-tab>
                    <v-tab-item
                        v-for="(list, index) in buttonLists"
                        :key="index"
                    >
                        <v-btn
                            :color="item.status ? 'red' : 'grey'"
                            v-for="(item, index) in list"
                            :key="index"
                            class="my-ticket-button"
                            @click="ticketClicked(item)"
                            >{{ item.label }}</v-btn
                        >
                    </v-tab-item>
                </v-tabs>

                <div class="text-xs-center mt-3">
                    <v-btn @click="goToCart">Go to cart</v-btn>
                </div>
            </div>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            active: null,
            titles: ['1-50', '31-60', '61-80'],
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
                    { label: 30, status: false }
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
            selectedTickets: []
        };
    },
    methods: {
        next() {
            const active = parseInt(this.active);
            this.active = active < 2 ? active + 1 : 0;
        },
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
        goToCart() {
            this.$router.push({
                name: 'my-cart',
                params: {
                    competitionName: this.competitionName,
                    selectedTickets: this.selectedTickets
                }
            });
        }
    },
    mounted() {
        this.competitionName = this.$route.params.competitionName;
    }
};
</script>

<style>
.my-ticket-button {
    height: 46px;
    width: 98px;
}
</style>
