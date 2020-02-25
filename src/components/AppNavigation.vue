<template>
    <span>
        <v-img
            :src="require('@/assets/dailyplay_logo.png')"
            width="300"
            height="300"
            contain
        ></v-img>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="black lighten-5"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
            app
            color="black darken-4"
            dark
            scroll-off-screen
            extended
            dense
        >
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <template v-for="(item, index) in items">
                <v-btn
                    v-if="item.title === 'Login' || item.title === 'Register'"
                    :key="index"
                    color="black red darken-1"
                    class="hidden-sm-and-down"
                    :to="item.path"
                    >{{ item.title }}</v-btn
                >
                <template v-else-if="item.subMenuItems != null">
                    <v-menu offset-y :key="index">
                        <v-btn flat class="hidden-sm-and-down" slot="activator">
                            {{ item.title }}
                            <v-icon right dark>keyboard_arrow_down</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile
                                v-for="subItem in item.subMenuItems"
                                :key="subItem.title"
                            >
                                <router-link :to="subItem.path">
                                    <v-list-tile-title>{{
                                        subItem.title
                                    }}</v-list-tile-title>
                                </router-link>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </template>
                <v-btn
                    v-else
                    flat
                    class="hidden-sm-and-down"
                    :to="item.path"
                    :key="index"
                    >{{ item.title }}</v-btn
                >
            </template>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn color="black red darken-1" to="/login">Login</v-btn>
                <v-btn color="black red darken-1" to="/register"
                    >Register</v-btn
                >
            </div>
            <div v-else>
                <v-btn flat to="/about">PROFILE</v-btn>
                <v-btn color="black red darken-1" @click="logout">Logout</v-btn>
            </div>
        </v-toolbar>
    </span>
</template>
<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'ELITE COMPETITIONS',
            drawer: false,
            items: [
                { title: 'Home', path: '/' },
                {
                    title: 'Competitions',
                    subMenuItems: [
                        {
                            title: 'Live Draws',
                            path: '/competitions/live-draws'
                        },
                        {
                            title: 'Active Competitions',
                            path: '/competitions/active-competitions'
                        },
                        {
                            title: 'Winner Podium',
                            path: '/competitions/winner-podium'
                        }
                    ]
                },
                { title: 'How to play', path: '/read-instructions' },
                { title: 'FAQs', path: '/faqs' },
                { title: 'My Account', path: '/my-account' },
                { title: 'My Cart', path: '/my-cart' },
                { title: 'News Letter', path: '/newsletter' },
                { title: 'Postal Entry', path: '/postal-entry' },
                { title: 'Standard Membership', path: '/standard-membership' },
                { title: 'Testimonial', path: '/testimonial' },
                { title: 'VIP', path: '/vip-membership' },
                { title: 'Watch Video', path: '/watch-video' },
                { title: 'Winners', path: '/winner' },
                {
                    title: 'Charity',
                    subMenuItems: [
                        { title: 'Charity 1', path: '/charity/charity1' },
                        { title: 'Charity 2', path: '/charity/charity2' }
                    ]
                }
                // { title: 'Login', path: '/login' },
                // { title: 'Register', path: '/register' },
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
<style>
.v-toolbar__content {
    flex-wrap: wrap;
    /* overflow: auto; */
}
</style>
