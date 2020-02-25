<template>
    <b-container fluid>
        <b-container fluid class="vipcompetitions-container">
            <h1>VIP Competitions</h1>
            <b-row>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition1.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition2.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition3.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition4.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="standcompetitions-container">
            <h1>Standard Competitions</h1>
            <b-row>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition1.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition2.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition3.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition4.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition5.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition1.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition2.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition3.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition4.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition5.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition2.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        title="dailyplay.uk"
                        :img-src="require('@/assets/competitions/competition1.jpg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-height="250"
                    >
                        <b-card-text>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-right: 10px;">Competition is</div>
                                <div>
                                    <b-form-group style="text-align: left;" class="activegroup">
                                        <b-form-radio name="active-radios" value="active" class="active">Active YES</b-form-radio>
                                        <b-form-radio name="active-radios" value="inactive" class="inactive">Active NO</b-form-radio>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-card-text>
                        <router-link to="/competitions/competition-detail" class="competitionButton">
                            <b-img
                                :src="require('@/assets/one_click.png')"
                                center
                                width="150"
                                height="50"
                            />
                        </router-link>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>
<style scoped>
.card {
    margin: 20px 10px;
    border-style: ridge !important;
    border-width: 5px !important;
    border-color: #27fe01 !important;
    background-color: #f8f707 !important;
}
.card-body {
    padding: 8px 6px 6px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img-button{
    padding: 2px 4px !important;
    background-color: #212121 !important;
}

.standcompetitions-container{
    padding: 0 200px;
    text-align: center;
}
.vipcompetitions-container{
    padding: 0 200px;
    text-align: center;
    margin-bottom: 40px;
}
h1{
    text-decoration: underline;
    margin-bottom: 30px;
}
.card-title{
    margin-top: 10px;
}
.form-group{
    margin-bottom: 0px;
}
.competitionButton{
    border-radius: 15px !important;
    border-style: ridge !important;
    border-width: 5px !important;
    border-color: #27fe01 !important;
    background-color: #212121 !important;
}
   
</style>
<style>
.active.custom-radio .custom-control-label::before{
    background-color: #27fe01;
}
.inactive.custom-radio .custom-control-label::before{
    background-color: red;
}
</style>
