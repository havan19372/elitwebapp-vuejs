<template>
    <div class="my-tickets-container">
        <b-card no-body>         
            <b-tabs pills card>
                <b-tab title="new active numbers" active>
                    <new-numbers></new-numbers>
                </b-tab>
                <b-tab title="old past numbers">
                    <old-numbers></old-numbers>
                </b-tab>
                <b-tab title="no live numbers">
                    <b-card-text style="color:white;">no active numbers to report</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>
<script>
    import NewNumbers from '@/components/NewActiveNumbers';
    import OldNumbers from '@/components/OldPastNumbers';

    export default {
        components: {
            NewNumbers,
            OldNumbers
        },
        data() {
            return {
        }
    }
}
</script>
<style>
</style>
