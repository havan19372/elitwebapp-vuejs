<template>
    <div class="account-details-container">
        <b-card>
            <h3 class="pane-title">my details</h3>
            <div class="account-form-group-container">
                <b-form-group label-cols-sm="2" label="full name:" label-align-sm="right" label-for="nestedCity">
                    <b-form-input id="nestedCity" />
                </b-form-group>
                <b-form-group
                label-cols-sm="2"
                label="email:"
                label-align-sm="right"
                label-for="nestedStreet"
                >
                    <b-form-input id="nestedStreet" />
                </b-form-group>
                <b-form-group label-cols-sm="2" label="phone no:" label-align-sm="right" label-for="nestedState">
                <b-form-input id="nestedState" />
                </b-form-group>
                <b-form-group label-cols-sm="2" label="address:" label-align-sm="right" label-for="nestedState">
                <b-form-input id="nestedState" />
                </b-form-group>
                <b-form-group label-cols-sm="2" label="town:" label-align-sm="right" label-for="nestedState">
                <b-form-input id="nestedState" />
                </b-form-group>

                <b-form-group
                label-cols-sm="2"
                label="post code:"
                label-align-sm="right"
                label-for="nestedCountry"
                >
                    <b-form-input id="nestedCountry" />
                </b-form-group>

                <b-form-group label-cols-sm="2" label="gender:" label-align-sm="right" class="mb-0">
                    <b-form-radio-group class="pt-2" :options="['male', 'female']" />
                </b-form-group>
                <b-form-group label-cols-sm="2" class="mb-0" style="text-align: right;margin-top:20px;">
                    <b-button style="background-color:#00c800; border-color:#00c800;">Save</b-button>
                </b-form-group>
                
            </div>
        </b-card>
    </div>
</template>

<style>
.account-details-container .card-body {
    color: white;
    padding:0px;
}


</style>

