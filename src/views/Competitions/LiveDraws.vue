<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Live draws</v-flex
            >
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <router-link
                    :to="{
                        name: 'MyCompetitions',
                        params: { competitionName: 'Competition 1' }
                    }"
                >
                    <v-card>
                        <v-img
                            src="https://firebasestorage.googleapis.com/v0/b/elitecompetitions-c5b13.appspot.com/o/images%2Fecdb86a3-c3d2-4d4c-af76-06b230ce26b8?alt=media&token=0a5eca8e-7700-4764-814c-f0d04ba15dce"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Live draws 1</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Live draws 1</h3>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam mauris felis, varius
                                    rutrum massa a, dignissim ornare dui. Cras
                                    eget velit eu dui tristique lobortis sit
                                    amet vel tellus.
                                </div>
                            </div>
                        </v-card-title>
                    </v-card>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <router-link
                    :to="{
                        name: 'MyCompetitions',
                        params: { competitionName: 'Competition 2' }
                    }"
                >
                    <v-card>
                        <v-img
                            src="https://firebasestorage.googleapis.com/v0/b/elitecompetitions-c5b13.appspot.com/o/images%2Fd6816a4d-302f-4de9-a031-82aec638d6ce?alt=media&token=8fec3bc0-a3fd-4c7e-b400-ce9c25131df6"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Live draws 2</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Live draws 2</h3>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam mauris felis, varius
                                    rutrum massa a, dignissim ornare dui. Cras
                                    eget velit eu dui tristique lobortis sit
                                    amet vel tellus.
                                </div>
                            </div>
                        </v-card-title>
                    </v-card>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <router-link
                    :to="{
                        name: 'MyCompetitions',
                        params: { competitionName: 'Competition 3' }
                    }"
                >
                    <v-card>
                        <v-img
                            src="https://firebasestorage.googleapis.com/v0/b/elitecompetitions-c5b13.appspot.com/o/images%2F0793b5a4-22d6-4d21-88f2-bcda68bd3946?alt=media&token=cfa263e4-83e4-4740-93a9-bac74daacac4"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Live draws 3</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Live draws 3</h3>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam mauris felis, varius
                                    rutrum massa a, dignissim ornare dui. Cras
                                    eget velit eu dui tristique lobortis sit
                                    amet vel tellus.
                                </div>
                            </div>
                        </v-card-title>
                    </v-card>
                </router-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style scoped>
a {
    text-decoration: none;
}
</style>
