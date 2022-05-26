<template>
  <v-app>
    <v-container>
      <v-row justify="space-around">
        <v-card width="600">
          <v-img height="200px" src="./assets/back.jpg"> </v-img>
          <div class="text-center">
            <v-avatar size="130" class="mt-n16">
              <img alt="user" :src="user[0].picture.large" />
            </v-avatar>
          </div>
          <v-card-title class="justify-center">
            <span class="mr-2">{{ user[0].name.title }}: </span>

            <span class="mr-2"> {{ user[0].name.first }}</span
            >{{ user[0].name.last }}
          </v-card-title>
          <v-card-subtitle class="text-center black--text pb-1">{{
            user[0].email
          }}</v-card-subtitle>
          <v-card-subtitle
            class="text-center black--text text-capitalize pt-0"
            >{{ user[0].gender }}</v-card-subtitle
          >

          <v-card-text>
            <v-divider></v-divider>

            <v-row class="mt-2">
              <v-col cols="12" lg="3">
                <div class="text-center">
                  <v-icon color="#E86129" x-large>mdi-cellphone</v-icon>
                  <p class="mt-2 black--text">{{ user[0].cell }}</p>
                </div>
              </v-col>
              <v-col cols="12" lg="4">
                <div class="text-center">
                  <v-icon color="#E86129" x-large>mdi-email-outline</v-icon>
                  <p class="mt-2 black--text">{{ user[0].email }}</p>
                </div>
              </v-col>

              <v-col cols="12" lg="5">
                <div class="text-center">
                  <v-icon color="#E86129" x-large>mdi-home-map-marker</v-icon>
                  <p class="mt-2 black--text">
                   <span class="mr-1"> Street</span>{{ user[0].location.street.number
                    }}<span class="ml-1">
                      {{ user[0].location.street.name }}</span
                    ><span class="ml-1">{{ user[0].location.city }}</span>
                    <span class="ml-1">{{ user[0].location.state }}</span>
                    <span class="ml-1">{{ user[0].location.country }}</span>
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    data: {
      search: "",
    },
    user: [],
  }),
  methods: {
    ...mapActions(["callApi"]),

    search() {
      this.callApi(this.data).then((response) => {
        this.user = response.data.results;
        
      });
    },
  },
  created() {
    this.search();
  },
};
</script>
