<template>
    <div class="account-details-container">
        <b-card>
            <h3 class="pane-title">manage my VIP account</h3>
            <div class="account-form-group-container">
                <div style="border-bottom: 1px solid rgb(0, 200, 0);padding: 0 30px;">
                    <label>Current balance</label><label>...£00.00</label>
                </div>
                <div style="margin-left:30px;">
                    <div style="margin-top: 30px;border-bottom: 1px solid rgb(0, 200, 0);">
                        <h4>How much do you want to add?</h4>
                        <p style="font-size: 14px;position: relative;bottom: 10px;">Between £10.00 and £200</p>
                        <label style="display: block;font-size:18px">Enter amount.</label>
                        <input type="text" placeholder="£100.00" style="margin-bottom: 10px;width: 140px;"/>
                    </div>
                    <div style="margin-top: 15px;">
                        <h4>Your debit card details:</h4>
                        <div style="margin-top:20px;">
                            <label style="font-size: 14px;">Debit card number: </label>
                            <input type="text" style="font-size: 14px;"/>
                            <div class="month-picker-container">
                                <label style="font-size: 14px;">Expiry date:</label>
                                <div style="color: black;display: inline-block;">
                                    <input type="text" placeholder="08" style="font-size: 14px;width: 50px;margin-right: 10px;"/>
                                    <label style="color: white;">/</label>
                                    <input type="text" placeholder="2020" style="font-size: 14px;width: 50px;"/>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top:20px;">
                            <label style="font-size:18px;">Your 3 digit security code</label>
                            <p style="font-size: 14px;position: relative;bottom: 10px;">You can find this on the back of your card</p>
                            <div>
                                <div style="display: inline-block;margin-right: 20px;">
                                    <label style="display: block;font-size:18px;">CVV</label>
                                    <input type="text" style="width: 100px;font-size:14px;"/>
                                </div>
                                <img src="@/assets/cvv.png" style="position: relative;bottom: 20px;height: 25px;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-card>
    </div>
</template>
<script>
</script>

<style>
.account-details-container .card-body {
    color: white;
    padding:0px;
}

</style>

