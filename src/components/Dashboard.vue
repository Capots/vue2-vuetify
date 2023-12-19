<template>
  <v-container>
    <v-toolbar color="rgba(0,0,0,0)" flat dark>
      <v-toolbar-title class="mt-n3">DASHBOARD</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="white" class="withoutupercase"></v-btn>
      <v-btn icon dark class="ml-n3">
        <v-icon x-small color="#C3F942">fas fa-chevron-down</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <!-- <v-col cols="12" sm="4">
       <Sales/>
      </v-col> -->
      <v-col cols="12" sm="12">
      <Company/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Sales from "./Sales.vue";
import Company from "./Company.vue";
export default {
  components: { Company },
};
</script>