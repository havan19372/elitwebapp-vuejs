<template>
    <b-container fluid>
        <b-container style="text-align:center;">
            <h2 class="page-title">log in</h2>
            <div class="login-form-container">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                    id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else."
                    >
                    <b-form-input
                        id="exampleInput1"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Enter email" />
                    </b-form-group>

                    <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2" description="your full name.">
                    <b-form-input
                        id="exampleInput2"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Enter name" />
                    </b-form-group>

                    <label for="textPassword">Password</label>
                    <b-input type="password" id="textPassword" aria-describedby="passwordHelpBlock" />
                    <b-form-text id="passwordHelpBlock">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not
                    contain spaces, special characters, or emoji.
                    </b-form-text>

                    <b-button class="common-button icon-button" type="submit" >Submit</b-button>
                    <b-button class="common-button icon-button" type="reset" >Reset</b-button>
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
        show: true
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
        width: 50%;
        color: white;

        text-align:left;
        display:inline-block;
    }
</style>
