<template>
    <div class="account-details-container enter-birthday">
        <b-card>
            <div class="header">
                <img src="@/assets/birthday_logo.png" width="150px" height="150px" style="margin-right: 10px;">
                <img src="@/assets/birthday_title.png" width="500px" height="150px">
            </div>
            <div class="account-form-group-container birthday-form">
                <form>
                    <div class="vip_birthday">
                        <div style="float: left;">
                            <label for="vip_number">enter your VIP number: </label>
                            <input type="text" name="vip_number" value="VIN 101001" style="width: 120px;">
                        </div>
                        <div class="birthday">
                            <label for="birthday">birthday</label>
                            <div style="float:right;">
                                <div style="display: inline-block;margin-right: 20px;">
                                    <input type="text" name="day" value="06">
                                    <span>D</span>
                                </div>
                                <div style="display: inline-block;">
                                    <input type="text" name="month" value="12">
                                    <span>M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="enter_name">
                        <label for="name" style="margin-right: 30px;">enter your name: </label>
                        <div style="background-color:rgb(249, 199, 49);">
                            <input type="text" name="name">
                        </div>
                    </div>
                    
                    <div style="display: flex;justify-content: space-between;margin-bottom: 20px;">
                        <div class="image_upload">Upload<br/>A<br/>Facial Photo</div>
                        <div style="display: inline-block;">
                            <div style="text-align: center;display: inline-block;">
                                <label style="display: block;">enter your location</label>
                                <span style="display: block;font-size: 14px;">"TOWN/COUNTY"</span>
                            </div>
                            <div class="location">
                                <div style="position: relative;top: 30px;">
                                    <div style="display: flex;justify-content: space-between;margin-bottom: 10px;">
                                        <label for="town">TOWN: </label>
                                        <input type="text" name="town">
                                    </div>
                                    <div style="display: flex;justify-content: space-between;">
                                        <label for="county">COUNTY: </label>
                                        <input type="text" name="county">
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </form>
            </div>
        </b-card>
    </div>
</template>

<style>
.account-details-container .card-body {
    color: white;
    padding:0px;
    
}
.enter-birthday{
    border: 5px solid yellow;
    padding: 10px 30px;
}
.birthday-form{
    padding: 0px 45px;
    color: black;
}
.vip_birthday{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.vip_birthday input{
    background-color: #bb941e;
    padding: 3px 5px;
    border: 3px solid black;
    position: relative;
    top: 13px;
}
label{
    margin-right: 10px;
    font-size: 20px;
}
input{
    text-align: center;    
}
.header{
    text-align: center;
    padding: 0px 45px;
    margin-bottom: 20px;
}
.enter_name{
    margin-bottom: 90px;
}
.enter_name input{
    background-color:rgb(249, 199, 49);
    border: 0;
    border-bottom: 2px dotted;
    width: 100%;
    position: relative;
    top: 13px;
}
.enter_name div{
    background-color:#ecb307;
    height: 60px;
    width: 350px;
    border: 3px solid black;
    padding: 0 20px;
    display: inline-block;
    position: relative;
    top: 10px;
}
.birthday input{
    color: white;
    width: 50px;
}
.birthday span{
    display: block;
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
}
.image_upload{
    width: 120px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid #352c10;
    text-align: center;
    color: #0a0a08;
    font-weight: bold;
    background-color: #bb941e;
    padding-top: 10px;
    display: inline-block;
}
.location{
    display: inline-block;
    height: 120px;
    border: 3px solid black;
    padding: 0 15px;
}
.location input{
    background-color:rgb(249, 199, 49);
    border: 0;
    border-bottom: 2px dotted;
    position: relative;
    bottom: 12px;

}
.location label{
    font-size: 13px;
    font-weight: bold;
}

</style>

