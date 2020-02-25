<template>
    <b-container fluid>
        <b-container style="text-align:center;">
            <h2 class="page-title">Sign up</h2>
            <div class="login-form-container">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <div class="name-field" style="display:flex;justify-content: space-between;">
                        <b-form-select v-model="selected" :options="options" style="width:24%;"/>
                        <b-form-group style="width:24%;">
                            <b-form-input
                                type="text"
                                v-model="form.name"
                                required
                                placeholder="First name"
                            />
                        </b-form-group>
                        <b-form-group style="width:24%;">
                            <b-form-input
                                type="text"
                                v-model="form.name"
                                required
                                placeholder="Middle initial"
                            />
                        </b-form-group>
                        <b-form-group style="width:24%;">
                            <b-form-input
                                type="text"
                                v-model="form.name"
                                required
                                placeholder="Last name"
                            />
                        </b-form-group>
                    </div>
                    <b-form-group label="Full Address:">
                        <b-form-input
                            type="text"
                            v-model="form.name"
                            required
                        />
                    </b-form-group>
                    <b-form-group label="Town:" style="width:50%;">
                        <b-form-input
                            type="text"
                            v-model="form.name"
                            required
                        />
                    </b-form-group>
                    <b-form-group label="County:" style="width:50%;">
                        <b-form-input
                            type="text"
                            v-model="form.name"
                            required
                        />
                    </b-form-group>
                    <b-form-group label="Post Code:" style="width:25%;">
                        <b-form-input
                            type="text"
                            v-model="form.name"
                            required
                        />
                    </b-form-group>
                    <b-form-group label="Phone No:" style="width:40%;">
                        <b-form-input
                            type="text"
                            v-model="form.name"
                            required
                        />
                    </b-form-group>
                    <label for="textEmail">Email address:</label>
                    <b-input type="email" id="textEmail" aria-describedby="emailHelpBlock" />
                    <b-form-text id="emailHelpBlock">
                    We'll never share your email with anyone else.<br/> 
                    We need this address to authenticate you and for notification purposes.
                    </b-form-text>
                    <b-form-group 
                        label="Confirm email:"
                        description="Please confirm your email address."
                    >
                        <b-form-input
                            type="email"
                            v-model="form.email"
                            required 
                        />
                    </b-form-group>

                    <b-form-group label="User Name:" style="width:70%;">
                        <b-form-input
                            type="text"
                            v-model="form.name"
                            required
                        />
                    </b-form-group>
                    <b-form-group
                        label="Password:"
                        description="Your password must be 8-20 characters long, contain letters and numbers, and must not
                        contain spaces, special characters, or emoji." style="width:60%;"
                    >
                        <b-form-input
                            type="password"
                            v-model="form.password"
                            required
                        />
                    </b-form-group>
                    <b-form-group label="Confirm Password:" style="width:60%;">
                        <b-form-input
                            type="password"
                            v-model="form.password"
                            required
                        />
                    </b-form-group>
                    <div style="margin-bottom: 10px;width:70%;">
                        <label>Date of birth:</label>
                        <div style="display:flex;justify-content: space-between;">
                            <b-form-select v-model="selectday" :options="days" style="width:33%;" />
                            <b-form-select v-model="selectmonth" :options="months" style="width:33%;"/>
                            <b-form-select v-model="selectyear" :options="years" style="width:33%;"/>
                        </div> 
                    </div>
                    <b-form-group label-cols-sm="2" label="Gender:" label-align-sm="left" class="mb-0">
                        <b-form-radio-group class="pt-2 gender" :options="['male', 'female']" />
                    </b-form-group>
                    <div style="margin:10px 0px;margin-bottom:20px;">
                        <b-form-checkbox class="age">I am over the age of 18 years.</b-form-checkbox>
                        <b-form-checkbox class="conditions">View Terms & Conditions.</b-form-checkbox>
                    </div>
                    <b-button class="common-button icon-button" type="submit" style="color:red !important;">Sign up</b-button>
                    <b-button class="common-button icon-button" type="reset" style="color:red !important;">Reset</b-button>
                </b-form>
                </div>
        </b-container>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        selected: 0,
        options: [
          { value: 0, text: 'Mr' },
          { value: 1, text: 'Mrs' },
          { value: 2, text: 'Miss' },
          { value: 3, text: 'Ms' }
        ],
        selectday: 0,
        days: [
          { value: 0, text: 'DAY' },
          { value: 1, text: '01' },
          { value: 2, text: '02' },
          { value: 3, text: '03' },
          { value: 4, text: '04' },
          { value: 5, text: '05' },
          { value: 6, text: '06' },
          { value: 7, text: '07' },
          { value: 8, text: '08' },
          { value: 9, text: '09' },
          { value: 10, text: '10' },
          { value: 11, text: '11' },
          { value: 12, text: '12' },
          { value: 13, text: '13' },
          { value: 14, text: '14' },
          { value: 15, text: '15' },
          { value: 16, text: '16' },
          { value: 17, text: '17' },
          { value: 18, text: '18' },
          { value: 19, text: '19' },
          { value: 20, text: '20' },
          { value: 21, text: '21' },
          { value: 22, text: '22' },
          { value: 23, text: '23' },
          { value: 24, text: '24' },
          { value: 25, text: '25' },
          { value: 26, text: '26' },
          { value: 27, text: '27' },
          { value: 28, text: '28' },
          { value: 29, text: '29' },
          { value: 30, text: '30' },
          { value: 31, text: '31' }
        ],
        selectmonth: 0,
        months: [
          { value: 0, text: 'MONTH' },
          { value: 1, text: 'January' },
          { value: 2, text: 'February' },
          { value: 3, text: 'March' },
          { value: 4, text: 'April' },
          { value: 5, text: 'May' },
          { value: 6, text: 'June' },
          { value: 7, text: 'July' },
          { value: 8, text: 'August' },
          { value: 9, text: 'September' },
          { value: 10, text: 'October' },
          { value: 11, text: 'November' },
          { value: 12, text: 'December' }
        ],
        selectyear: 0,
        years: [
          { value: 0, text: 'YEAR' },
          { value: 1, text: '2019' },
          { value: 2, text: '2020' },
          { value: 3, text: '2021' },
          { value: 4, text: '2022' },
          { value: 5, text: '2023' },
          { value: 6, text: '2024' },
          { value: 7, text: '2025' },
          { value: 8, text: '2026' },
          { value: 9, text: '2027' },
          { value: 10, text: '2028' },
          { value: 11, text: '2029' },
          { value: 12, text: '2030' }
        ],
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
.login-form-container {
    width: 70%;
    color: white;

    text-align:left;
    display:inline-block;
}
.gender .custom-radio .custom-control-label::before {
    border:2.5px solid #27FE01;
}
.age.custom-checkbox .custom-control-label::before {
    border-radius: 0.25rem;
    border: 2px solid red;
}
.conditions.custom-checkbox .custom-control-label::before {
    border-radius: 0.25rem;
    border: 2px solid #27FE01;
}

</style>
