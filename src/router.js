import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/read-instructions',
            name: 'read-instructions',
            component: () => import('./views/ReadInstructions.vue')
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: () => import('./views/FAQ.vue')
        },
        {
            path: '/competitions/active-competitions',
            name: 'active-competitions',
            component: () =>
                import('./views/Competitions/ActiveCompetitions.vue')
        },
        {
            path: '/competitions/competition-detail',
            name: 'competition-detail',
            component: () =>
                import('./views/Competitions/CompetitionDetail.vue')
        },
        {
            path: '/competitions/live-draws',
            name: 'live-draws',
            component: () => import('./views/Competitions/LiveDraws.vue')
        },
        {
            path: '/competitions/winner-podium',
            name: 'winner-podium',
            component: () => import('./views/Competitions/WinnerPodium.vue')
        },
        {
            path: '/charity/charity1',
            name: 'charity1',
            component: () => import('./views/Charity/Charity1.vue')
        },
        {
            path: '/charity/charity2',
            name: 'charity2',
            component: () => import('./views/Charity/Charity2.vue')
        },
        {
            path: '/how-to-play',
            name: 'how-to-play',
            component: () => import('./views/HowToPlay.vue')
        },
        {
            path: '/how-it-works',
            name: 'how-it-works',
            component: () => import('./views/HowItWorks.vue')
        },
        {
            path: '/my-account',
            name: 'my-account',
            component: () => import('./views/MyAccount.vue')
        },
        {
            path: '/personal-account',
            name: 'personal-account',
            component: () => import('./views/PersonalAccount.vue')
        },
        {
            path: '/my-cart',
            name: 'my-cart',
            component: () => import('./views/MyCart.vue')
        },
        {
            path: '/newsletter',
            name: 'newsletter',
            component: () => import('./views/NewsLetter.vue')
        },
        {
            path: '/postal-entry',
            name: 'postal-entry',
            component: () => import('./views/PostalEntry.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/standard-membership',
            name: 'standard-membership',
            component: () => import('./views/StandardMembership.vue')
        },
        {
            path: '/testimonial',
            name: 'testimonial',
            component: () => import('./views/Testimonial.vue')
        },
        {
            path: '/vip-membership',
            name: 'vip-membership',
            component: () => import('./views/VIPMembership.vue')
        },
        {
            path: '/watch-video',
            name: 'watch-video',
            component: () => import('./views/WatchVideo.vue')
        },
        {
            path: '/winner',
            name: 'winner',
            component: () => import('./views/Winner.vue')
        },
        {
            path: '/MyCompetitions',
            name: 'MyCompetitions',
            component: () => import('./views/MyCompetitions.vue')
        },
        {
            path: '/standard-signup',
            name: 'standard-signup',
            component: () => import('./views/StandardSignup.vue')
        },
        {
            path: '/vip-signup',
            name: 'vip-signup',
            component: () => import('./views/VipSignup.vue')
        }
    ]
});
