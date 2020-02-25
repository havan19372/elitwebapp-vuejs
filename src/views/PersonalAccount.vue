<template>
    <b-container fluid>
        <b-container>
            <h2 class="page-title">my personal account</h2>
            <div class="my-account-tabs-container">
                <b-card no-body>
                    
                    <b-tabs pills card vertical>
                        <b-tab title="Membership Number STD 0101"></b-tab>
                        <b-tab title="Membership account details" active>
                            <account-details></account-details>
                        </b-tab>
                        <b-tab title="my active numbers">
                            <my-active></my-active>
                        </b-tab>
                        <b-tab title="all my event history">
                            <my-transactions></my-transactions>
                        </b-tab>
                        <b-tab title="add funds">
                            <add-funds></add-funds>
                        </b-tab>
                        <b-tab title="log out"><b-card-text>Log out</b-card-text></b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </b-container>
    </b-container>
</template>

<script>
    import MyCart from './MyCart';
    import AccountDetails from '@/components/AccountDetails';
    import MyTickets from '@/components/MyTickets';
    import MyTransactions from '@/components/MyTransactions';
    import MyActive from '@/components/MyActiveNumbers';
    import AddFunds from '@/components/AddFunds';

    export default {
        components: {
            MyCart,
            AccountDetails,
            MyTickets,
            MyTransactions,
            MyActive,
            AddFunds
        },
        data() {
            return {
        }
    }
}
</script>
<style scoped>
</style>
<style>
.my-account-tabs-container {
    font-family: 'Capriola', sans-serif;
}
.my-account-tabs-container .card {
    background-color: transparent;
    border:none;
}

.my-account-tabs-container .card .tabs {
    min-height: 490px;
}

.my-account-tabs-container .pane-title {
    border-bottom:1px solid #F8F707;
    margin-bottom:28px;
    color: #F8F707;
    padding-bottom: 8px;
}
.my-account-tabs-container .card-header {
    background-color: rgba(0, 255, 0, 0.1) !important;
    /* border-radius:0.25rem !important; */
}
.my-account-tabs-container .tab-content > .tab-pane {
    /* padding:0px !important; */
    background-color: rgba(0, 255, 0, 0.05) !important;
    padding: 30px !important;
    min-height: 490px;
}

.bonus-balance-box {
    font-family: 'Capriola', sans-serif;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 10px 0;
}
.bonus-balance-box .bonus-balance-box-title {
    display: inline-block;
    margin: 0px 12px !important;
}
.bonus-circles-container {
    margin: 8px 0 0 0;
}
.bonus-circle {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
    background-color: red;
    border: 2px solid #f8f707;
    margin:2px;
}
.bonus-circle.filled {
    background-color:green ;
}

</style>

