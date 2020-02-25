<template>
    <v-app>
        <!-- <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"> -->
        <link
            href="https://fonts.googleapis.com/css?family=Capriola"
            rel="stylesheet"
        />
        <!-- <app-navigation></app-navigation> -->
        <header-navigation></header-navigation>
        <v-content transition="slide-x-transition">
            <div class="body-container">
                <router-view></router-view>
            </div>
        </v-content>
        <footer-bar></footer-bar>
    </v-app>
</template>

<script>
import HeaderNavigation from '@/components/HeaderNavigation';
import FooterBar from '@/components/FooterBar';

export default {
    name: 'App',
    components: {
        HeaderNavigation,
        FooterBar
    }
};
</script>

<style>
.body-container {
    padding: 50px 0 70px 0;
    background-color: #212121;
    min-height: 420px;
}
h1,
h2,
h3,
h4,
h5,
h6,
span,
p,
label {
    font-family: 'Capriola', sans-serif;
}
h1,
h2,
h3 {
    color: white;
}
.text-font-default {
    font-family: 'Capriola', sans-serif !important;
}
.text-font-info {
    font-family: sans-serif;
    font-weight: bold;
}
.text-color-white {
    color: white !important;
}
.text-color-red {
    color: red !important;
}
.text-color-yellow {
    color: #f8f707 !important;
}
.text-color-green {
    color: #27fe01 !important;
}
.text-size-50 {
    font-size: 50px !important;
}
.text-align-center {
    text-align: center;
    vertical-align: middle !important;
}
.common-button {
    margin: 0px 6px !important;
    border-radius: 20px !important;
    border-style: ridge !important;
    border-width: 5px !important;
    border-color: #27fe01 !important;
    background-color: #f8f707 !important;
    color: black !important;
    font-size: 16px !important;
    font-family: 'Capriola', sans-serif !important;
    padding: 6px 10px !important;
    /* max-width: 140px !important; */
    line-height: 18px !important;

    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    /* margin */
}
.TC-clickable,
.TC-clickable:hover {
    display: block;
    text-align: center;
    margin-bottom: 30px;
    font-size: 16px;
    text-decoration: none;
    color: white;
    font-family: 'Capriola', sans-serif !important;
}
.TC-clickable span {
    font-family: 'Capriola', sans-serif !important;
}
.TC-clickable button {
    display: block;
    margin: 0px 6px;
    border-radius: 20px;
    border-style: ridge;
    border-width: 5px;
    border-color: #27fe01;
    background-color: #f8f707;
    color: #00ff00;
    font-size: 16px;
    font-family: 'Capriola', sans-serif !important;
    padding: 6px;
    line-height: 18px;
    padding: 10px 12px;
    width: 140px;
    height: 60px;
}
.nav-item a {
    color: white !important;
    font-family: 'Capriola', sans-serif !important;
}
.nav-item a.active {
    background-color: rgb(0, 200, 0) !important;
}
.tabs {
    width: 100%;
}
.icon-button span {
    margin-right: 6px;
}

.icon-button {
    max-width: 170px !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
    padding-top: 8px !important;

    color: #dc3545 !important;
}

table {
  font-family: 'Capriola', sans-serif !important;
}
.table thead tr {
    color: white !important;
    border-bottom: 3px solid #27fe01;
}
.table tbody tr {
    color: white !important;
    border:none;
    border-top: 1px dashed #F8F707;

}
.table th {
    border: none !important;
}
.table th, .table td {
    border-top: none !important;
}
.table thead th {
    border-bottom: none !important;
}
.page-title {
    color: #27fe01 !important;
    text-align: center;
    margin-bottom: 40px;
}
</style>
